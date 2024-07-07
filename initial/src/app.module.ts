import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './events/event.entity';
import { EventsModule } from './events/events.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // load .env variable
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: parseInt(process.env.PORT),
      username:  process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      entities: [Event],
      synchronize: true,
    }),

    EventsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
