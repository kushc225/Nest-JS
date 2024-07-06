import { Controller, Delete, Get, Param, Patch, Post, Body, HttpCode, NotFoundException, HttpStatus, Res } from "@nestjs/common";
import { Response } from 'express';
import { CreateEventDTO } from "./create.event.dto";
import { UpdatedCreateEventDTO } from "./update.event.dto";



@Controller('/events')
export class EventController {
    // create resources 
    @Get()
    findAll() {
        return ["kush", "kumar"]
    }
    @Get(':id')
    findOne(@Param('id') name) { return name }
    @Post()
    create(@Body() input: CreateEventDTO): CreateEventDTO { return input }
    @Patch(':id')
    update(@Param('id') id, @Body() input: UpdatedCreateEventDTO): UpdatedCreateEventDTO {
        return input;
    }
    @Delete()
    remove(@Res() res: Response) {
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