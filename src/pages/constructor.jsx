import React from "react";
import { useEffect } from "react";
import BotConstructor from "../components/BotConstructor";

const Constructor = () => {
  useEffect(() => {
    document.title = "Constructor - SIBSIU";
    alert("Не работает!");
  });
  return <BotConstructor />;
};

export default Constructor;
