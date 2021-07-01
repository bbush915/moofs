import axios from "axios";

type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export class TriviaService {
  async getQuestion(): Promise<Question> {
    const { data } = await axios.get(process.env.TRIVIA_API_URL!);
    return data.results[0];
  }
}
