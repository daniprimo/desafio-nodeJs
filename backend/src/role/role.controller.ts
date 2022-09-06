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
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async create(@Body() data: Prisma.roleCreateInput) {
    return await this.roleService.create(data);
  }

  @Get()
  async getAll() {
    return await this.roleService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.roleService.getByRole(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() role: Prisma.roleCreateInput,
  ): Promise<Prisma.roleCreateInput> {
    return await this.roleService.update(Number(id), role);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.roleService.delete(Number(id));
  }
}
