import { NextRequest, NextResponse } from 'next/server';
import openai from '../../utils/openai';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const messages = data.chats
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0.7,
  });
  const responseText = chatCompletion.data.choices[0].message.content;
  return NextResponse.json({item: responseText});
} 