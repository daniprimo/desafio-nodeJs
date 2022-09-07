import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { userDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: Prisma.UserCreateInput) {
    return await this.userService.create(data);
  }

  @Post('admin')
  async createAdmin(@Body() data: Prisma.UserCreateInput) {
    return await this.userService.createAdmin(data);
  }

  @Get()
  async getAll(): Promise<Prisma.UserCreateInput[]> {
    return await this.userService.getAll();
  }

  @Get(':cpf')
  async getById(@Param('cpf') cpf: string): Promise<Prisma.UserCreateInput> {
    return this.userService.getByCpf(cpf);
  }

  @Put(':cpf')
  async update(
    @Param('cpf') cpf: string,
    @Body() user: userDto,
  ): Promise<Prisma.UserCreateInput> {
    return await this.userService.updatae(cpf, user);
  }

  @Delete(':cpf')
  async delete(@Param('cpf') cpf: string) {
    this.userService.delete(cpf);
  }
}
