import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../Enum/role.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflactor: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflactor.getAllAndOverride<Role[]>('role', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user.role);
  }
}
