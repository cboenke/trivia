import "./trivia.css";
import { createElement } from "../../utils/createElement";
import { getRandomQuestion } from "../../utils/api";
import { createCard } from "./trivia";

export default {
  title: "Components/Trivia",
  parameters: { layout: "centered" },
};

export const staticQuestion = () => {
  return createCard({
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "This element, when overcome with extreme heat and pressure, creates diamonds.",
    correct_answer: "Carbon",
    incorrect_answers: ["Nitrogen", "Oxygen", "Hydrogen"],
  });
};

export const RandomQuestion = (args, { loaded: { result } }) => {
  const randomButton = createElement("button", {
    className: "btn__Random",
    innerText: "Load random question",
    onclick: async () => {
      const randomQuestion = await getRandomQuestion();
      if (container.childNodes.length > 1) {
        container.removeChild(container.lastChild);
      }
      container.append(createCard(randomQuestion));
    },
  });

  const container = createElement("div", {
    className: "container",
    childs: [randomButton, createCard(result)],
  });
  return container;
};

RandomQuestion.loaders = [
  async () => ({
    result: await getRandomQuestion(),
  }),
];
