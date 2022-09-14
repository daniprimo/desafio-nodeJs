import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';
import { userDtoRole } from './dto/user.dto role';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  async getAll() {
    return await this.prisma.user.findMany();
  }

  async getByCpf(cpf: string) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        cpf,
      },
    });

    if (!userExists) {
      throw new Error('User não encontrado');
    }

    return userExists;
  }

  async getByEmail(email: string) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userExists) {
      throw new Error('User não encontrado');
    }

    return userExists;
  }

  async create(data: userDtoRole) {
    const userExist = await this.prisma.user.findFirst({
      where: {
        cpf: data.cpf,
      },
    });

    if (userExist) {
      throw new Error('User ja existe');
    }

    const user = await this.prisma.user.create({
      data,
    });

    user.role = 2;

    this.mailService.welcome(user);

    return user;
  }

  async createAdmin(data: userDtoRole) {
    const userExist = await this.prisma.user.findFirst({
      where: {
        cpf: data.cpf,
      },
    });

    if (userExist) {
      throw new Error('User ja existe');
    }

    const user = await this.prisma.user.create({
      data,
    });

    user.role = 1;

    return user;
  }

  async updatae(cpf: string, data: Prisma.UserCreateInput) {
    const userAtual = await this.prisma.user.findUnique({
      where: {
        cpf,
      },
    });

    if (!userAtual) {
      throw new Error('Usuario não encontrado');
    }

    const id = userAtual.id;

    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(cpf: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        cpf,
      },
    });

    if (!user) {
      throw new Error('User não encontrado');
    }
    const userAtualer = this.getByCpf(cpf);
    const id = (await userAtualer).id;

    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
