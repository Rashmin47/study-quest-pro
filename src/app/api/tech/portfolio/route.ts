import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/db';
import { portfolioProjects, users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const projects = await db.select().from(portfolioProjects).where(eq(portfolioProjects.userId, userId));
    return NextResponse.json(projects);
  } catch (error) {
    console.error("[PORTFOLIO_GET]", error);
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
    const { title, description, githubUrl, liveUrl, techStack } = body;

    const [project] = await db.insert(portfolioProjects).values({
      id: crypto.randomUUID(),
      userId,
      title,
      description,
      githubUrl,
      liveUrl,
      techStack,
    }).returning();

    return NextResponse.json(project);
  } catch (error) {
    console.error("[PORTFOLIO_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
