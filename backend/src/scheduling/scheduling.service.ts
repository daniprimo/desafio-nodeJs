import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class SchedulingService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.scheduling.findMany();
  }

  async getById(codigo: number) {
    const schedullingExist = await this.prisma.scheduling.findUnique({
      where: {
        codigo,
      },
    });

    if (!schedullingExist) {
      throw new Error('Agendamento inexistente');
    }

    return schedullingExist;
  }

  async create(data: Prisma.SchedulingCreateInput) {
    const schedulling = await this.prisma.scheduling.create({
      data,
    });
    return await schedulling;
  }

  async update(codigo: number, data: Prisma.SchedulingUpdateInput) {
    const scheduling = await this.prisma.scheduling.findUnique({
      where: {
        codigo,
      },
    });

    if (!scheduling) {
      throw new Error('Schedulling não encontrado');
    }

    return await this.prisma.scheduling.update({
      data,
      where: {
        codigo,
      },
    });
  }

  async delete(codigo: number) {
    const scheduling = await this.prisma.scheduling.findUnique({
      where: {
        codigo,
      },
    });

    if (!scheduling) {
      throw new Error('Schedulling');
    }
    return await this.prisma.scheduling.delete({
      where: {
        codigo,
      },
    });
  }
}
