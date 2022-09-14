import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { userDtoRole } from 'src/user/dto/user.dto role';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async welcome(user: userDtoRole) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Seu Cadastro foi realizado com Sucesso',
      template: './welcome', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        name: user.name,
      },
    });
  }
}

