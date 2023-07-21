import { NextRequest, NextResponse } from 'next/server';
import openai from '../../utils/openai';

const drawArr: string[] = [];
//system behind thes censs prompt prompt tuining
//or replying need t pass the whole array
export async function POST(req: NextRequest) {
  const body = await req.json();
  const text = body.product;
  //const messages
  const response = await openai.createImage({
    // prompt: "a white siamese cat",
    prompt: `${text}`,
    n: 3,
    size: "1024x1024",
  });
  const image_url = response.data.data[0].url;
  //todo:   drawArr.push({draw: `${text}`, url: image_url})
  drawArr.push(text, image_url)
  return NextResponse.json({item: image_url});
} 

