"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default Providers;

// "use client"

// import { SessionProvider } from "next-auth/react"

// const Provider = ({ children, session }) => {
//   return <SessionProvider session={session}>{children}</SessionProvider>
// }

// export default Provider
