import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SchedulingService } from './scheduling.service';
import { Prisma } from '@prisma/client';

@Controller('scheduling')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Post()
  async create(@Body() data: Prisma.SchedulingCreateInput) {
    return await this.schedulingService.create(data);
  }

  @Get()
  async getAll(): Promise<Prisma.SchedulingCreateInput[]> {
    return await this.schedulingService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.schedulingService.getById(Number(id));
  }
  @Put(':id')
  async uodate(
    @Param('id') id: number,
    @Body() servico: Prisma.SchedulingCreateInput,
  ): Promise<Prisma.SchedulingCreateInput> {
    return await this.schedulingService.update(Number(id), servico);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.schedulingService.delete(Number(id));
  }
}
