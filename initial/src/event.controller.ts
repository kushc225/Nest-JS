import { Controller, Delete, Get, Param, Patch, Post, Body } from "@nestjs/common";

@Controller('/events')
export class EventController {
    // create resources 
    @Get()
    findAll() {}
    @Get(':id')
    findOne(@Param('id') name ) {return name}
    @Post()
    create(@Body() input : any) : string {return input}
    @Patch()
    update() {}
    @Delete()
    remove() {}
} 