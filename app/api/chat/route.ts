import { NextRequest, NextResponse } from 'next/server';
import openai from '../../utils/openai';
 
export async function POST(req: NextRequest) {
  const body = await req.json();
  const text = body.product;
  const prompt = "Respond in 3-4 sentences about the topic, as if you were a friendly neighborhood Spiderman. When signing off be sure to thank the user and remind them to be kind."
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: `${prompt}: ${text}`}],

  });
  const responseText = chatCompletion.data.choices[0].message.content;

  return NextResponse.json({item: responseText});
} 