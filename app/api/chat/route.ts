import { NextRequest, NextResponse } from 'next/server';
import openai from '../../utils/openai';
 
export async function POST(req: NextRequest) {

  const body = await req.json();
  const text = body.product;
  console.log('text', text)
  const prompt = "Respond in 3-4 sentences about the topic, as if you were a friendly neighborhood Spiderman. When signing off be sure to thank the user and remind them to be kind."
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: `${prompt}: ${text}`}],
    // messages: [{role: "user", content: reviewPrompt(body)}],
    // messages: body.messages
  });
  const responseText = chatCompletion.data.choices[0].message.content;
  console.log('resy text',responseText);

  return NextResponse.json({item: responseText});
} 
// export async function POST(req: NextRequest, res: NextResponse) {
  
//   const body = await req.json();
//   const completion = await openai.createChatCompletion({
//     // model: "gpt-3.5-turbo",
//     messages: body.messages,
//     model: "gpt-3.5-turbo",
//     // messages: [{role: "user", content: `${prompt}: ${text}`}],
//     // prompt: reviewPrompt(body),

//   })
//   // res.(200).json({ result: completion.data.choices });

//   const responseText = completion.data.choices[0].message.content;
//   console.log('res text', responseText)
//   return NextResponse.json({ item: responseText });
// }

// function reviewPrompt(topicName) {
//   return `Topic: NFL
//   Short Story: Any facts about the NFL player, NFL team or facts related to American football. If it's an NFL player date of birth and college they played. If NFL team year list the year it was founded and the number of Superbowl wins or appearances they currently have. If topic related to American Football then list random facts about the sport. 
  
//   If NFL player then list if they are retired or currently still playing. If NFL team list last seasons record, a few popular players and if they are favorites to win the Superbowl. If American football related just list more random facts.

      
//   Topic: ${topicName}
//   Short Story:`;
// }