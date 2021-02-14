export type Question = {
  results: {
    category: string;
    type: string;
    difficulty: "easy" | "medium" | "hard";
    question: string;
    correct_answer: string;
    incorrect_answers: [string];
  };
};

export async function getRandomQuestion() {
  const response = await fetch("https://opentdb.com/api.php?amount=1");
  if (!response.ok) {
    return {
      question: "Not found",
    };
  }

  const result = (await response.json()) as Question;
  return result.results[0];
}
