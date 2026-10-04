import { Controller, Get, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { RoleGuard } from '../../common/guard/role.guard';
import { Role } from '../../common/Enum/role.enum';
import { ROLE } from '../../common/decorators/role/role.decorators';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}
  @UseGuards(RoleGuard)
  @ROLE(Role.admin)
  @Get('stats')
  getStats() {
    return this.dashboardService.getStats();
  }
}
