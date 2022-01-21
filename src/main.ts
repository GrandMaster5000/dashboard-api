import { App } from './app';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controlle';

async function bootstrap() {
    const logger = new LoggerService();
    const app = new App(logger, new UserController(logger));
    await app.init();
}

bootstrap();