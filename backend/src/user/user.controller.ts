import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { userDtoRole } from './dto/user.dto role';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
@ApiTags('Usuario')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Adicionar novo Cliente' })
  @ApiResponse({ status: 201, description: 'Cliente adicionado com sucesso' })
  @ApiResponse({ status: 400, description: 'Parametros invalidos' })
  async create(@Body() data: userDtoRole) {
    data.password = await bcrypt.hash(data.password, 10);
    return await this.userService.create(data);
  }

  @Post('admin')
  @ApiOperation({ summary: 'Criar Aministrador ' })
  @ApiResponse({ status: 201, description: 'Cliente adicionado com sucesso' })
  @ApiResponse({ status: 400, description: 'Parametros invalidos' })
  async createAdmin(@Body() data: userDtoRole) {
    return await this.userService.createAdmin(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuarios' })
  @ApiResponse({ status: 201, description: 'Cliente listado com sucesso' })
  async getAll(): Promise<Prisma.UserCreateInput[]> {
    return await this.userService.getAll();
  }

  @Get(':cpf')
  @ApiOperation({ summary: 'Pesquisar usuario pelo CPF' })
  @ApiResponse({ status: 201, description: 'Usuario encontrado com sucesso' })
  @ApiResponse({ status: 400, description: 'Parametros invalidos' })
  async getById(@Param('cpf') cpf: string): Promise<Prisma.UserCreateInput> {
    return this.userService.getByCpf(cpf);
  }

  @Put(':cpf')
  @ApiOperation({ summary: 'Atualizar registro o usuario a partir do CPF' })
  @ApiResponse({ status: 201, description: 'Usuario atualizado com sucesso' })
  @ApiResponse({ status: 400, description: 'Parametros invalidos' })
  async update(
    @Param('cpf') cpf: string,
    @Body() user: userDtoRole,
  ): Promise<Prisma.UserCreateInput> {
    user.password = await bcrypt.hash(user.password, 10);
    return await this.userService.updatae(cpf, user);
  }

  @Delete(':cpf')
  @ApiOperation({ summary: 'Deletar o usuarios a partir do CPF' })
  @ApiResponse({ status: 201, description: 'Usuario excluido com sucesso' })
  @ApiResponse({ status: 400, description: 'Parametros invalidos' })
  async delete(@Param('cpf') cpf: string) {
    this.userService.delete(cpf);
  }
}
