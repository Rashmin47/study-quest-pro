import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/db';
import { techSkills } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const skills = await db.select().from(techSkills).where(eq(techSkills.userId, userId));
    return NextResponse.json(skills);
  } catch (error) {
    console.error("[SKILLS_GET]", error);
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
    const { name, category, masteryPercentage } = body;

    const [skill] = await db.insert(techSkills).values({
      id: crypto.randomUUID(),
      userId,
      name,
      category,
      masteryPercentage,
    }).returning();

    return NextResponse.json(skill);
  } catch (error) {
    console.error("[SKILLS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
