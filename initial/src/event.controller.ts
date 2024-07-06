import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";

@Controller('/events')
export class EventController {
    // create resources 
    @Get()
    findAll() {}
    @Get()
    findOne() {}
    @Post()
    create() {}
    @Patch()
    update() {}
    @Delete()
    remove() {}
} 