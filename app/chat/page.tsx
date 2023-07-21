'use client'; // This is a client component
import { NextPage } from "next";
import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import React, { FormEvent } from "react";

// todo: push this to new array [...messages, { role: 'user', content: data.item }]
interface Message {
  role: string;
  content: string;
}

const HomePage: NextPage = () => {
  const textDivRef = useRef<HTMLDivElement>(null);
  const [chatInput, setChatInput] = useState("");
  const [result, setResult] = useState(() => "");
  const [isLoading, setIsLoading] = useState(false);
  const [resultArray, setResultArray] = useState<Message[]>([])
  // const [resultArray, setResultArray] = useState<string[]>([]);

  //array will be sent during POST req
  const messages = [
    ...resultArray,
    { role: "system", content: "Respond in 3-4 sentences about the topic, as if you were a friendly neighborhood Spiderman. When signing off be sure to thank the user and remind them to be kind." }, {
    role: "user", content: `${chatInput}`
  }]
  
  // Add a click event listener to the copy icon that copies the text in the div to the clipboard when clicked
  useEffect(() => {
    const copyIcon = document.querySelector(".copy-icon");
    if (!copyIcon) return;
    copyIcon.addEventListener("click", () => {
      const textDiv = textDivRef.current;
      let text;
      if (textDivRef.current) {
        text = textDivRef.current.textContent;
      }
      // Create a hidden textarea element
      const textArea: HTMLTextAreaElement = document.createElement("textarea"); // Define type as HTMLTextAreaElement
      document.body.appendChild(textArea);

      // Select the text in the textarea
      textArea.select();

      // Copy the text to the clipboard
      // document.execCommand("copy");

      // Remove the textarea element
      document.body.removeChild(textArea);
    });
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    console.log('res array', messages)
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ product: productInput }),
            body: JSON.stringify({ chats: messages }),

      // body: JSON.stringify(messages)
    })
    // console.log('resy', response)
    const data = await response.json();
    console.log('data', data)
    //og code start
    let rawResult = data.item;
    // setResultArray(rawResult)
    //og code end
// messages.push({ role: 'user', content: rawResult },...messages)
setResultArray([...messages, { role: 'user', content: rawResult }])
// setMessages((messages) => [
//   ...messages,
//   { role: 'user', content: rawResult },
// ]);
// messages.push({ role: 'user', content: rawResult })
console.log('front end', messages)
    // Append the new result to the array
    // setResultArray((prevResults) => [...prevResults, rawResult]);

    //test
    // setResultArray((prevResults) => [...prevResults, { role: 'user', content: rawResult }])
    // todo: push this to new array [...messages, { role: 'user', content: data.item }]

    console.log('chat history 1', messages)

    setResult(rawResult);
    setChatInput("");
    setIsLoading(false);

  }
  // console.log('chat history 2', messages)

  return (
    <div>
       <Head>
      <title>Spideychat</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <main
        className="flex flex-col 
                    items-center justify-center m-20"
      >
        <h3 className="text-slate-900 text-xl mb-3">
          Spideychat
        </h3>
        <p className="text-slate-700 text-lg mb-3">
          Enter a topic, any topic you want to chat about with Spiderman.{" "}
        </p>
        <form onSubmit={onSubmit}>
          <input
            className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
            type="text"
            name="chat"
            placeholder="Enter some text for Spiderman..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />

          <button
            className="text-sm w-full bg-fuchsia-600 h-7 text-white
                              rounded-2xl mb-10"
            type="submit"
          >
            Your friendly neighborhood spidey at your service.
          </button>
        </form>
        {isLoading ? (
          <p>Loading... be patient.. may take 30s+</p>
        ) : result ? (
          <div className="relative w-2/4 ">
            <div className="rounded-md border-spacing-2 border-slate-900 bg-slate-100 break-words max-w-500 overflow-x-auto  ">
              <div
                ref={textDivRef}
                className="m-5 "
                dangerouslySetInnerHTML={{ __html: result }}
              />
            </div>
            <div className="copy-icon absolute top-0 right-0 mt-2 mr-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-copy"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="8" y="8" width="12" height="12" rx="2"></rect>
                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
              </svg>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default HomePage;
