import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { APP_GUARD } from '@nestjs/core';


@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest()
    const token = req.headers['authorization']
    return token === "Bearer LSKDJFLKSDJFLKSJDLFKJLSKDJFLKSJDLVVNSLKDMFNNKLSDNFKLSNDLF"
  }
}
