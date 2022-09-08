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
import { schedulingDto } from './dto/scheduling.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('scheduling')
@ApiTags('Agenda')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Post()
  async create(@Body() data: schedulingDto) {
    return await this.schedulingService.create(data);
  }

  @Get()
  async getAll(): Promise<schedulingDto[]> {
    return await this.schedulingService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.schedulingService.getById(Number(id));
  }
  @Put(':id')
  async uodate(
    @Param('id') id: number,
    @Body() servico: schedulingDto,
  ): Promise<schedulingDto> {
    return await this.schedulingService.update(Number(id), servico);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.schedulingService.delete(Number(id));
  }
}
