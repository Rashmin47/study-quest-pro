import { NextResponse } from 'next/server';

const API_KEY = process.env.GEMINI_API_KEY ;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          role: "user",
          parts: [{ 
            text: `You are an expert study assistant AI for the StudyQuest Pro application, designed to help students learn, maintain focus, and manage their extracurricular activities. Your responses should be:
1. Educational, encouraging, and concise
2. Formatted with clear bullet points where appropriate
3. Short, ideally under 100 words.

User question: ${message}`
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to communicate with AI');
    }

    const data = await response.json();
    let text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't understand that.";

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
