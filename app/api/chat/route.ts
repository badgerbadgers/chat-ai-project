import { NextRequest, NextResponse } from 'next/server';
import openai from '../../utils/openai';

// interface Message {
//   role: string;
//   content: string;
// }

 //todo store messages
 //not persist route.ts have variable convo array outside of post req persist through the session ([]) push all convos out the post req, tailwind
//todos send drawarr to front end (export variable?)
export const chatsArr: string[] = [];

export async function POST(req: NextRequest) {

  const data = await req.json();
  // const  messages  = await req.json();
const messages = data.chats
  console.log('api backend', messages)
  // const prompt = "Respond in 3-4 sentences about the topic, as if you were a friendly neighborhood Spiderman. When signing off be sure to thank the user and remind them to be kind."
  // const messages: Message[] = [{ role: "system", content: `${prompt}` }, {
  //   role: "user", content: `${product}`
  // }]
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    //roles: user(passed in), system(fine tuning), assistant(robot)
    // messages: [{role: "user", content: `${prompt}: ${text}`}],//can send multiple msg
  // const { messages } = req.body;

  //prev
    messages: messages,
    // messages: [...messages, ...chatsArr.map((chat) => ({ role: "user", content: chat }))],
    temperature: 0.7,

  });
  const responseText = chatCompletion.data.choices[0].message.content;
  console.log('resy', responseText)

  chatsArr.push(responseText)
  return NextResponse.json({item: responseText});
} 