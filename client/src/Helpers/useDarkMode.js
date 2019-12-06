import React from "react";

export default function useDarkMode(state) {
  if (state === true) {
    document.querySelector(`body`).classList.add("darkMode");
  } else {
    document.querySelector(`body`).classList.remove("darkMode");
  }
}
