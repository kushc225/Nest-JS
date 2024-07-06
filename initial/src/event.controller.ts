import { Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

@Controller('/events')
export class EventController {
    // create resources 
    @Get()
    findAll() {}
    @Get(':id')
    findOne(@Param('id') name ) {return name}
    @Post()
    create() {}
    @Patch()
    update() {}
    @Delete()
    remove() {}
} 