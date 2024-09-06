import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Prisma } from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get(':id')
  async getAll(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.postService.getAll(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  @Post()
  async create(@Body() dto: Prisma.PostCreateInput) {
    try {
      return await this.postService.create(dto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Prisma.PostUpdateInput,
  ) {
    try {
      return await this.postService.update(id, dto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
