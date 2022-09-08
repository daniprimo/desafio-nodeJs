import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { userDto } from './dto/user.dto';
import { userDtoRole } from './dto/user.dto role';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('Usuario')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: userDto) {
    return await this.userService.create(data);
  }

  @Post('admin')
  async createAdmin(@Body() data: userDto) {
    return await this.userService.createAdmin(data);
  }

  @Get()
  async getAll(): Promise<userDto[]> {
    return await this.userService.getAll();
  }

  @Get(':cpf')
  async getById(@Param('cpf') cpf: string): Promise<userDto> {
    return this.userService.getByCpf(cpf);
  }

  @Put(':cpf')
  async update(
    @Param('cpf') cpf: string,
    @Body() user: userDtoRole,
  ): Promise<userDtoRole> {
    return await this.userService.updatae(cpf, user);
  }

  @Delete(':cpf')
  async delete(@Param('cpf') cpf: string) {
    this.userService.delete(cpf);
  }
}
