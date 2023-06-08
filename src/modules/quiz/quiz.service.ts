import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getAllQuizzes(): string[] {
    return ['quiz1', 'quiz2', 'quiz3', 'Coming from service'];
  }
}
