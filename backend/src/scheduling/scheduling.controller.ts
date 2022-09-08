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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('scheduling')
@ApiTags('Agenda')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Post()
  @ApiOperation({ summary: 'Adicionar novo agendamento' })
  async create(@Body() data: schedulingDto) {
    return await this.schedulingService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os agendamentos' })
  async getAll(): Promise<schedulingDto[]> {
    return await this.schedulingService.getAll();
  }

  @Get(':codigo')
  @ApiOperation({ summary: 'Buscar agendamento a partir do codigo' })
  async getById(@Param('codigo') codigo: number) {
    return this.schedulingService.getById(Number(codigo));
  }

  @Put(':codigo')
  @ApiOperation({ summary: 'Atualizar o agendamento a partir do codigo' })
  async uodate(
    @Param('codigo') codigo: number,
    @Body() servico: schedulingDto,
  ): Promise<schedulingDto> {
    return await this.schedulingService.update(Number(codigo), servico);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Deletar agendamento a partir do codigo' })
  async delete(@Param('id') id: number) {
    this.schedulingService.delete(Number(id));
  }
}
