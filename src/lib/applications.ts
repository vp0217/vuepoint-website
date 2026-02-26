import { getDb } from "./db";
import { ObjectId } from "mongodb";

export type ApplicationStatus = "new" | "contacted" | "accepted" | "rejected";

export interface Application {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
  experienceLevel: string;
  message?: string;
  status: ApplicationStatus;
  createdAt: string;
}

const COLLECTION = "applications";

function toApplication(doc: Record<string, unknown> & { _id: ObjectId }): Application {
  const { _id, ...rest } = doc;
  return { ...rest, id: _id.toString() } as Application;
}

export async function getAllApplications(): Promise<Application[]> {
  const db = await getDb();
  const col = db.collection(COLLECTION);
  const docs = await col.find({}).sort({ createdAt: -1 }).toArray();
  return docs.map((d) => toApplication(d as { _id: ObjectId; [key: string]: unknown }));
}

export async function createApplication(data: Omit<Application, "id" | "status" | "createdAt">): Promise<Application> {
  const db = await getDb();
  const col = db.collection(COLLECTION);
  const doc = {
    ...data,
    status: "new" as ApplicationStatus,
    createdAt: new Date().toISOString(),
  };
  const result = await col.insertOne(doc);
  return {
    ...doc,
    id: result.insertedId.toString(),
  };
}

export async function updateApplicationStatus(id: string, status: ApplicationStatus): Promise<Application | null> {
  const db = await getDb();
  const col = db.collection(COLLECTION);
  let oid: ObjectId;
  try {
    oid = new ObjectId(id);
  } catch {
    return null;
  }
  const result = await col.findOneAndUpdate(
    { _id: oid },
    { $set: { status } },
    { returnDocument: "after" }
  );
  if (!result) return null;
  return toApplication(result as { _id: ObjectId; [key: string]: unknown });
}

export async function deleteApplication(id: string): Promise<boolean> {
  const db = await getDb();
  const col = db.collection(COLLECTION);
  let oid: ObjectId;
  try {
    oid = new ObjectId(id);
  } catch {
    return false;
  }
  const result = await col.deleteOne({ _id: oid });
  return result.deletedCount === 1;
}
