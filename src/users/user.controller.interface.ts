import { NextFunction, Response, Request } from 'express';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';

export interface CustomRequest<T> extends Request {
	body: T;
}

export interface IUserController {
	login: (req: CustomRequest<UserLoginDto>, res: Response, next: NextFunction) => void;
	register: (req: CustomRequest<UserRegisterDto>, res: Response, next: NextFunction) => void;
	info: (req: Request, res: Response, next: NextFunction) => void;
}
