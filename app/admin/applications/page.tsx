"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Application, ApplicationStatus } from "@/lib/applications";
import { getCourseLabel } from "@/lib/courses";

const STATUS_OPTIONS: { value: ApplicationStatus; label: string }[] = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "accepted", label: "Accepted" },
  { value: "rejected", label: "Rejected" },
];

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const router = useRouter();

  const fetchApplications = async () => {
    const res = await fetch("/api/applications");
    if (res.status === 401) {
      router.push("/admin");
      return;
    }
    if (!res.ok) return;
    const data = await res.json();
    setApplications(data);
  };

  useEffect(() => {
    fetchApplications().finally(() => setLoading(false));
  }, []);

  const updateStatus = async (id: string, status: ApplicationStatus) => {
    setUpdating(id);
    try {
      const res = await fetch(`/api/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) await fetchApplications();
    } finally {
      setUpdating(null);
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm("Delete this application?")) return;
    const res = await fetch(`/api/applications/${id}`, { method: "DELETE" });
    if (res.ok) setApplications((prev) => prev.filter((a) => a.id !== id));
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-heading font-bold text-xl text-foreground">Applications</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Log out
            </Button>
            <Link href="/">
              <Button variant="ghost" size="sm">Back to site</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="text-left p-3 font-semibold">Date</th>
                  <th className="text-left p-3 font-semibold">Name</th>
                  <th className="text-left p-3 font-semibold">Email</th>
                  <th className="text-left p-3 font-semibold">Phone</th>
                  <th className="text-left p-3 font-semibold">Course</th>
                  <th className="text-left p-3 font-semibold">Level</th>
                  <th className="text-left p-3 font-semibold">Status</th>
                  <th className="text-left p-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="p-8 text-center text-muted-foreground">
                      No applications yet.
                    </td>
                  </tr>
                ) : (
                  applications.map((app) => (
                    <tr key={app.id} className="border-b border-border hover:bg-muted/50">
                      <td className="p-3 text-muted-foreground whitespace-nowrap">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-3 font-medium">{app.firstName} {app.lastName}</td>
                      <td className="p-3">{app.email}</td>
                      <td className="p-3">{app.phone}</td>
                      <td className="p-3">{getCourseLabel(app.course)}</td>
                      <td className="p-3">{app.experienceLevel}</td>
                      <td className="p-3">
                        <select
                          value={app.status}
                          onChange={(e) => updateStatus(app.id, e.target.value as ApplicationStatus)}
                          disabled={updating === app.id}
                          className="rounded border border-input bg-background px-2 py-1 text-xs"
                        >
                          {STATUS_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </td>
                      <td className="p-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                          onClick={() => deleteApplication(app.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        {applications.some((a) => a.message) && (
          <details className="mt-4 text-sm text-muted-foreground">
            <summary className="cursor-pointer font-medium">View messages</summary>
            <ul className="mt-2 space-y-2 pl-4">
              {applications.filter((a) => a.message).map((app) => (
                <li key={app.id}>
                  <span className="font-medium text-foreground">{app.firstName} {app.lastName}:</span> {app.message}
                </li>
              ))}
            </ul>
          </details>
        )}
      </main>
    </div>
  );
}
