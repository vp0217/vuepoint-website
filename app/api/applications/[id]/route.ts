import { NextRequest, NextResponse } from "next/server";
import { updateApplicationStatus, deleteApplication } from "@/lib/applications";
import type { ApplicationStatus } from "@/lib/applications";

const ADMIN_SECRET = process.env.ADMIN_SECRET || "vuepoint-admin-secret-change-me";

function isAdmin(request: NextRequest): boolean {
  const cookie = request.cookies.get("admin_session");
  return cookie?.value === ADMIN_SECRET;
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  try {
    const body = await request.json();
    const status = body.status as ApplicationStatus;
    if (!["new", "contacted", "accepted", "rejected"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }
    const app = await updateApplicationStatus(id, status);
    if (!app) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(app);
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAdmin(_request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const deleted = await deleteApplication(id);
  if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return new NextResponse(null, { status: 204 });
}
