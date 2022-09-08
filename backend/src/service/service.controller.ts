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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { serviceDto } from './dto/service.dto';

@Controller('service')
@ApiTags('Servicos')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  @ApiOperation({ summary: 'Adicionar novow servico' })
  async create(@Body() data: serviceDto) {
    return await this.serviceService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os servicos' })
  async getAll(): Promise<serviceDto[]> {
    return await this.serviceService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pesquisar servico a partir do Id' })
  async getById(@Param('id') id: number): Promise<serviceDto> {
    return await this.serviceService.getById(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar o servico a partir do ID' })
  async update(
    @Param('id') id: number,
    @Body() service: serviceDto,
  ): Promise<serviceDto> {
    return await this.serviceService.update(Number(id), service);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar servico a partir do ID' })
  async delete(@Param('id') id: number) {
    this.serviceService.delete(Number(id));
  }
}
