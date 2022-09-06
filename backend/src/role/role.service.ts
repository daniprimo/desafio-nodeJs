import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.role.findMany();
  }

  async getByRole(id: number) {
    const roleExists = await this.prisma.role.findUnique({
      where: {
        id,
      },
    });

    if (!roleExists) {
      throw new Error(`Usuario de id ${id} não encontrado`);
    }

    return roleExists;
  }

  async create(data: Prisma.roleCreateInput) {
    const createExist = await this.prisma.role.findFirst({
      where: {
        nameRole: data.nameRole,
      },
    });

    if (createExist) {
      throw new Error(`Role ${data.nameRole} already exists`);
    }

    const role = await this.prisma.role.create({
      data,
    });

    return role;
  }

  async update(id: number, data: Prisma.roleUncheckedCreateInput) {
    const roleAtual = await this.prisma.role.findUnique({
      where: {
        id,
      },
    });

    if (!roleAtual) {
      throw new Error('Usuario inexistente');
    }

    return await this.prisma.role.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    const roleExists = await this.prisma.role.findUnique({
      where: {
        id,
      },
    });

    if (!roleExists) {
      throw new Error(`Ppael ja existente`);
    }

    return this.prisma.role.delete({
      where: {
        id,
      },
    });
  }
}
