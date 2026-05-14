import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/db';
import { certifications } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userCerts = await db.select().from(certifications).where(eq(certifications.userId, userId));
    return NextResponse.json(userCerts);
  } catch (error) {
    console.error("[CERTIFICATIONS_GET]", error);
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
    const { title, issuer, dateObtained } = body;

    const [cert] = await db.insert(certifications).values({
      id: crypto.randomUUID(),
      userId,
      title,
      issuer,
      dateObtained: dateObtained ? new Date(dateObtained) : null,
    }).returning();

    return NextResponse.json(cert);
  } catch (error) {
    console.error("[CERTIFICATIONS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
