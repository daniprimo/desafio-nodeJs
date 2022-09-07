import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { Prisma } from '@prisma/client';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  async create(@Body() data: Prisma.serviceCreateInput) {
    return await this.serviceService.create(data);
  }

  @Get()
  async getAll(): Promise<Prisma.serviceCreateInput[]> {
    return await this.serviceService.getAll();
  }
  @Get('id')
  async getById(@Param('id') id: number) {
    return await this.serviceService.getById(Number(id));
  }

  @Put()
  async update(
    @Param('id') id: number,
    @Body() service: Prisma.serviceCreateInput,
  ): Promise<Prisma.serviceCreateInput> {
    return await this.serviceService.update(Number(id), service);
  }

  @Delete()
  async delete(@Param('id') id: number) {
    this.serviceService.delete(Number(id));
  }
}
