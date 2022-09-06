import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.service.findMany();
  }

  async getById(id: number) {
    const serviceExist = await this.prisma.service.findUnique({
      where: {
        id,
      },
    });

    if (!serviceExist) {
      throw new Error('Service não encontrado');
    }

    return serviceExist;
  }

  async create(data: Prisma.serviceCreateInput) {
    const serviceExist = await this.prisma.service.findFirst({
      where: {
        name: data.name,
      },
    });

    if (serviceExist) {
      throw new Error('Service ja existe');
    }

    const service = await this.prisma.service.create({
      data,
    });

    return service;
  }

  async update(id: number, data: Prisma.serviceCreateInput) {
    const serviceAtual = await this.prisma.service.findUnique({
      where: {
        id,
      },
    });

    if (!serviceAtual) {
      throw new Error('Service não encontrado');
    }

    return await this.prisma.service.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    const serviceExist = await this.prisma.service.findUnique({
      where: {
        id,
      },
    });

    if (!serviceExist) {
      throw new Error('Serviço não encontrado');
    }

    return this.prisma.service.delete({
      where: {
        id,
      },
    });
  }
}
