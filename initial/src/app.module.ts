import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EventsController}  from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type : 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username : 'postgres',
    password : 'admin',
    database : 'test',
    entities : [Event],
    synchronize : true
  }),
  TypeOrmModule.forFeature([Event]),
],

  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}
