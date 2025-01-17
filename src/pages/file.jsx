import React from "react";
import { atom, useRecoilState } from "recoil";

const a = atom({
  key: "hello-",
  default: "hello",
});
//console.log(a);
const file = () => {
  const [alpha, setAlpha] = useRecoilState(a);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => setAlpha(alpha === "hello" ? "world" : "hello")}
        className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg  hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200 transform hover:scale-105 active:scale-95"
      >
        {alpha}
      </button>
    </div>
  );
};

export default file;
