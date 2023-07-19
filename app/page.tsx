// 'use client'; // This is a client component
// import { NextPage } from "next";
// import Head from "next/head";
// import { useState, useRef, useEffect } from "react";
// import React from "react";

// const HomePage: NextPage = () => {
//   // Create a ref for the div element
//   const textDivRef = useRef<HTMLDivElement>(null);
//   const [productInput, setProductInput] = useState("");
//   const [result, setResult] = useState(() => "");
//   const [isLoading, setIsLoading] = useState(false);

//   // Add a click event listener to the copy icon that copies the text in the div to the clipboard when clicked
//   useEffect(() => {
//     const copyIcon = document.querySelector(".copy-icon");
//     if (!copyIcon) return;
//     copyIcon.addEventListener("click", () => {
//       const textDiv = textDivRef.current;
//       let text;
//       if (textDivRef.current) {
//         text = textDivRef.current.textContent;
//       }
//       // Create a hidden textarea element
//       const textArea: HTMLTextAreaElement = document.createElement("textarea"); // Define type as HTMLTextAreaElement
//       document.body.appendChild(textArea);

//       // Select the text in the textarea
//       textArea.select();

//       // Copy the text to the clipboard
//       document.execCommand("copy");

//       // Remove the textarea element
//       document.body.removeChild(textArea);
//     });
//   }, []);


//   async function onSubmit(event: { preventDefault: () => void; }) {
//     event.preventDefault();
//     setIsLoading(true);
//     const response = await fetch("/api/chat", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ product: productInput }),
//     })
//     const data = await response.json();
//     let rawResult = data.item;

//     // set result to the highlighted code. Address this error: Argument of type 'string' is not assignable to parameter of type '(prevState: undefined) => undefined'.ts(2345)
//     setResult(rawResult);

//     setProductInput("");
//     setIsLoading(false);
//   }

//   return (
//     <div>
//        <Head>
//       <title>Spideychat</title>
//       <meta name="description" content="" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>

//       <main
//         className="flex flex-col 
//                     items-center justify-center m-20"
//       >
//         <h3 className="text-slate-900 text-xl mb-3">
//           Spideychat
//         </h3>
//         <p className="text-slate-700 text-lg mb-3">
//           Enter a topic, any topic you want to chat about with Spiderman.{" "}
//         </p>
//         <form onSubmit={onSubmit}>
//           <input
//             className="text-sm text-gray-base w-full 
//                               mr-3 py-5 px-4 h-2 border 
//                               border-gray-200 rounded mb-2"
//             type="text"
//             name="product"
//             placeholder="Enter some text for Spiderman..."
//             value={productInput}
//             onChange={(e) => setProductInput(e.target.value)}
//           />

//           <button
//             className="text-sm w-full bg-fuchsia-600 h-7 text-white
//                               rounded-2xl mb-10"
//             type="submit"
//           >
//             Your friendly neighborhood spidey at your service.
//           </button>
//         </form>
//         {isLoading ? (
//           <p>Loading... be patient.. may take 30s+</p>
//         ) : result ? (
//           <div className="relative w-2/4 ">
//             <div className="rounded-md border-spacing-2 border-slate-900 bg-slate-100 break-words max-w-500 overflow-x-auto  ">
//               <div
//                 ref={textDivRef}
//                 className="m-5 "
//                 dangerouslySetInnerHTML={{ __html: result }}
//               />
//             </div>
//             <div className="copy-icon absolute top-0 right-0 mt-2 mr-2 cursor-pointer">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="icon icon-tabler icon-tabler-copy"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                 <rect x="8" y="8" width="12" height="12" rx="2"></rect>
//                 <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
//               </svg>
//             </div>
//           </div>
//         ) : null}
//       </main>
//     </div>
//   );
// };

// export default HomePage;

import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const HomePage: NextPage = () => {
  return (
    <>
    <Head>
      <title>OPEN AI API ROULETTE</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        OPEN-AI<span className="text-[hsl(280,100%,70%)]">-extravaganza</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/chat"
          >
            <h3 className="text-2xl font-bold">Spideychat →</h3>
            <div className="text-lg">
              Talk to your friendly neighborhood Spiderman.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/draw"
      
          >
            <h3 className="text-2xl font-bold">Draw →</h3>
            <div className="text-lg">
Generate neat AI art.
            </div>
          </Link>
          {/* <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/test"
      
          >
            <h3 className="text-2xl font-bold">Draw! →</h3>
            <div className="text-lg">
Create a test
            </div>
          </Link> */}
        </div>
       
      </div>
    </main>
  </>
  );
};

export default HomePage;

