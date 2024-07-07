import { IsDateString, Length } from "class-validator";

export class CreateEventDTO {
  @Length(5, 255, {message : "name is invalid"})
  name: string;
  description: string;
  @Length(3, 255,{groups : ['create']})
  @Length(6, 255,{groups : ['update']})
  address: string;
  @IsDateString()
  when: string;
}
