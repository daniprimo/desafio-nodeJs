import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { roleDto } from './dto/role.dto';
import { RoleService } from './role.service';

@Controller('role')
@ApiTags('Papeis')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @ApiOperation({ summary: 'Adicionar novo papel' })
  async create(@Body() data: roleDto) {
    return await this.roleService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar Papeis' })
  async getAll() {
    return await this.roleService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar papel a partir do ID' })
  async getById(@Param('id') id: number) {
    return this.roleService.getByRole(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar papel a partir do ID' })
  async update(
    @Param('id') id: number,
    @Body() role: roleDto,
  ): Promise<roleDto> {
    return await this.roleService.update(Number(id), role);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar papel a partir do codigo' })
  async delete(@Param('id') id: number) {
    this.roleService.delete(Number(id));
  }
}
