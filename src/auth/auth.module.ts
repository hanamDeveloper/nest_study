import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: "test",
      signOptions: { expiresIn: '60s' },
    }),
    forwardRef(() => CatsModule)
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}