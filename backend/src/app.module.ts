import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ServiceModule } from './service/service.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    RoleModule,
    ServiceModule,
    SchedulingModule,
    MailModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
