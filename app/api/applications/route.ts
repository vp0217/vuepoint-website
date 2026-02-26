import { NextRequest, NextResponse } from "next/server";
import { getAllApplications, createApplication } from "@/lib/applications";

const ADMIN_SECRET = process.env.ADMIN_SECRET || "vuepoint-admin-secret-change-me";

function isAdmin(request: NextRequest): boolean {
  const cookie = request.cookies.get("admin_session");
  return cookie?.value === ADMIN_SECRET;
}

export async function GET(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const applications = await getAllApplications();
    return NextResponse.json(applications);
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, course, experienceLevel, message } = body;
    if (!firstName || !lastName || !email || !phone || !course || !experienceLevel) {
      return NextResponse.json(
        { error: "Missing required fields: firstName, lastName, email, phone, course, experienceLevel" },
        { status: 400 }
      );
    }
    const application = await createApplication({
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      course: String(course).trim(),
      experienceLevel: String(experienceLevel).trim(),
      message: message ? String(message).trim() : undefined,
    });
    return NextResponse.json(application, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Failed to create application" }, { status: 500 });
  }
}
