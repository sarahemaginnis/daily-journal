import { DailyJournal } from "./DailyJournal.js";

const container = document.querySelector("#entries");

export const render = () => {
  container.innerHTML = DailyJournal();
};
render();
