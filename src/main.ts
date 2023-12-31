import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const prismaService = app.get(PrismaService);
  app.enableCors();
  await prismaService.enableShutdownHooks(app);
  await app.listen(process.env.PORT);
}
bootstrap();
