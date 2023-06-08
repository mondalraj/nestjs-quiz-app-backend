import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsNotEmpty({ message: 'Description is required' })
  @Length(10, 255, {
    message: 'Description should be between 10 to 255 characters',
  })
  description: string;
}
