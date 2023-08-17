import React from "react";
import GoogleSigninButton from "./GoogleSigninButton"

const Appbar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <GoogleSigninButton />
    </header>
  );
};

export default Appbar;