import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDTO } from './create.event.dto';
import { UpdatedCreateEventDTO } from './update.event.dto';
import { skip } from 'node:test';
@Controller('/events')
export class EventsController {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}

  @Get()
  async findAll() {
    return await this.repository.find();
  }
  @Get('/practice')
  async pathAll() {
    return await this.repository.find({
      select: ['id', 'address'],
      where: [{description : Like("%world%")}],
      take: 2,
      skip: 2,
      order : {
        id : "ASC"
      }
    });
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.repository.findOneBy({ id });
  }

  @Post()
  async create(@Body() input: CreateEventDTO) {
    try {
      const data = await this.repository.save({
        ...input,
        when: new Date(),
      });
      console.log({ data });
      return data;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() input: UpdatedCreateEventDTO) {
    const event = await this.repository.findOneBy({ id });

    return await this.repository.save({
      ...event,
      ...input,
      when: new Date(),
    });
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id) {
    const event = await this.repository.findOneBy({ id });
    const data = await this.repository.remove(event);
    return data;
  }

}
