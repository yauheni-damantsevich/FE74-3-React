import React from "react";
import "./App.css";
import accountIcon from "../../assets/account.png";
import backgroundImage from "../../assets/background.jpg";
import { Burger } from "../../components/index";
import { MainBlock } from "../../components/index";

const username = "Yauheni Damantsevich";

function App() {
  return (
    <div className="App relative">
      <header className="App absolute z-10 flex w-full justify-center">
        <div className="container mx-auto p-4 flex">
          <div className="relative">
            <Burger />
          </div>
          <button className="flex">
            <img src={accountIcon} className="max-w-6 max-h-6 m-2" alt="" />
            <p className="text-lg self-center m-2">{username}</p>
          </button>
        </div>
      </header>
      <main className="absolute w-full justify-center ">
        <div className="max-h-screen overflow-hidden">
          <div className="container mx-auto px-4 flex">
            <div className="z-10 absolute top-1/4">{MainBlock()}</div>
          </div>
          <img src={backgroundImage} alt="background" className="" />
        </div>
      </main>
    </div>
  );
}

export default App;
