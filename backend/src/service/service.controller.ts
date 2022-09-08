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
import { ApiTags } from '@nestjs/swagger';
import { serviceDto } from './dto/service.dto';

@Controller('service')
@ApiTags('Servicos')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  async create(@Body() data: serviceDto) {
    return await this.serviceService.create(data);
  }

  @Get()
  async getAll(): Promise<serviceDto[]> {
    return await this.serviceService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<serviceDto> {
    return await this.serviceService.getById(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() service: serviceDto,
  ): Promise<serviceDto> {
    return await this.serviceService.update(Number(id), service);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.serviceService.delete(Number(id));
  }
}
