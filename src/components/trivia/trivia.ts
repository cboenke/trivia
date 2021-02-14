import { createElement } from "../../utils/createElement";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function createCard({
  category,
  question,
  difficulty,
  type,
  correct_answer,
  incorrect_answers,
}) {
  const answerOptions = [correct_answer, ...incorrect_answers];
  console.log(answerOptions);
  const shuffledAnswers = shuffle(answerOptions);

  return createElement("div", {
    className: "card",
    childs: [
      createElement("div", {
        className: "card__inner",
        childs: [
          createElement("div", {
            className: "card__front",
            childs: [
              createElement("h2", {
                className: "card__category",
                innerText: category,
              }),
              createElement("h3", {
                className: "card__question",
                innerText: question,
              }),
              createElement("p", {
                className: "card__difficulty",
                innerText: "Difficulty: " + difficulty,
              }),
              createElement("p", {
                className: "card__type",
                innerText: "Question type: " + type,
              }),
              createElement("p", {
                className: "card__answers",
                innerText: "Answer options: " + shuffledAnswers,
              }),
            ],
          }),
          createElement("div", {
            className: "card__back",
            childs: [
              createElement("p", {
                className: "card__correctanswers",
                innerText: correct_answer,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
