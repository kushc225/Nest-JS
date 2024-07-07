import { IsDateString, Length } from "class-validator";

export class CreateEventDTO {
  @Length(5, 255, {message : "name is invalid"})
  name: string;
  description: string;
  address: string;
  @IsDateString()
  when: string;
}
