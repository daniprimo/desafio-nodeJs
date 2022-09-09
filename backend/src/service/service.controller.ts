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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { serviceDto } from './dto/service.dto';

@Controller('service')
@ApiTags('Servicos')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  @ApiOperation({ summary: 'Adicionar novow servico' })
  @ApiResponse({ status: 201, description: 'Servico adicionado com sucesso' })
  @ApiResponse({ status: 400, description: 'Parametros invalidos' })
  async create(@Body() data: serviceDto) {
    return await this.serviceService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os servicos' })
  @ApiResponse({ status: 201, description: 'Servico adicionado com sucesso' })
  async getAll(): Promise<serviceDto[]> {
    return await this.serviceService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pesquisar servico a partir do Id' })
  @ApiResponse({ status: 200, description: 'Servico adicionado com sucesso' })
  @ApiResponse({ status: 404, description: 'Servico não encontrado' })
  async getById(@Param('id') id: number): Promise<serviceDto> {
    return await this.serviceService.getById(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar o servico a partir do ID' })
  @ApiResponse({ status: 200, description: 'Servico atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Servico não encontrado' })
  async update(
    @Param('id') id: number,
    @Body() service: serviceDto,
  ): Promise<serviceDto> {
    return await this.serviceService.update(Number(id), service);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar servico a partir do ID' })
  @ApiResponse({ status: 204, description: 'Servico foi removido com sucesso' })
  @ApiResponse({ status: 404, description: 'Servico não encontrado' })
  async delete(@Param('id') id: number) {
    this.serviceService.delete(Number(id));
  }
}
