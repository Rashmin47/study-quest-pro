import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/db';
import { roadmapMilestones } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const milestones = await db.select().from(roadmapMilestones).where(eq(roadmapMilestones.userId, userId));
    return NextResponse.json(milestones);
  } catch (error) {
    console.error("[ROADMAP_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { title, description, status, track } = body;

    const [milestone] = await db.insert(roadmapMilestones).values({
      id: crypto.randomUUID(),
      userId,
      title,
      description,
      status,
      track,
    }).returning();

    return NextResponse.json(milestone);
  } catch (error) {
    console.error("[ROADMAP_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
