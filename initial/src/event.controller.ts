import { Controller, Delete, Get, Param, Patch, Post, Body, HttpCode, NotFoundException, HttpStatus, Res } from "@nestjs/common";
import { Response } from 'express';
import { CreateEventDTO } from "./create.event.dto";
import { UpdatedCreateEventDTO } from "./update.event.dto";
import { Event } from "./event.entity";



@Controller('/events')
export class EventController {

    private events: Event[] = []

    // create resources 
    @Get()
    findAll() {
        return this.events;
    }
    @Get(':id')
    findOne(@Param('id') id): CreateEventDTO {
        const data = this.events.find((ele) => ele.id === (id));
        console.log(this.events)
        return data
    }
    @Post()
    create(@Body() input: CreateEventDTO): CreateEventDTO {
        const obj = { id: this.events.length + 1 + "", when: new Date(), ...input }
        this.events.push(obj)
        return obj;
    }
    @Patch(':id')
    update(@Res() res: Response, @Param('id') id, @Body() input: UpdatedCreateEventDTO): UpdatedCreateEventDTO | Response<any, Record<string, any>> {
        const data = this.events.find(ele => ele.id === id);
        if (!data) return res.status(HttpStatus.NOT_FOUND).json({ ...input, message: 'Not Found' });
        const newdata = { ...data, ...input };
        this.events.push(newdata);
        return newdata;
    }
    @Delete(":id")
    remove(@Res() res: Response, @Param("id") id) {

        const data = this.events.filter(ele => ele.id !== id);
        this.events = [];
        this.events = data;
        return data;

        // Your logic to determine if the event exists or not
        const eventExists = false; // This is just an example, replace with actual logic

        if (!eventExists) {
            // If the event doesn't exist, send a 404 response
            return res.status(HttpStatus.NOT_FOUND).json({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Event with id not found',
                error: 'Not Found',
            });
        }

        // If the event exists, you can proceed with deletion logic and send a 200 response
        // Perform deletion logic here...

        return res.status(HttpStatus.OK).json({
            statusCode: HttpStatus.OK,
            message: 'Event deleted successfully',
        });
    }
} 