import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private PrismaService: PrismaService) {}

  async getAll(id: number) {
    return await this.PrismaService.post.findUniqueOrThrow({
      where: { id: id },
    });
  }

  async create(dto: Prisma.PostCreateInput) {
    return await this.PrismaService.post.create({ data: dto });
  }

  async update(id: number, dto: Prisma.PostUpdateInput) {
    return await this.PrismaService.post.update({
      where: { id: id },
      data: dto,
    });
  }

  async delete(id: number) {
    return await this.PrismaService.post.delete({ where: { id: id } });
  }
}
