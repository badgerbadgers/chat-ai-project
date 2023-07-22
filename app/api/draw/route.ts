import { NextRequest, NextResponse } from 'next/server';
import openai from '../../utils/openai';

//generate multiple images []
const drawArr: string[] = [];
export async function POST(req: NextRequest) {
  const body = await req.json();
  const text = body.product;
  const response = await openai.createImage({
    prompt: `${text}`,
    n: 3,
    size: "1024x1024",
  });
  const image_url = response.data.data[0].url;
  drawArr.push(text, image_url)
  return NextResponse.json({item: image_url});
} 

