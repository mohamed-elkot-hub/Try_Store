import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getStats(): Promise<{
        totalProducts: number;
        totalOrders: number;
        totalCustomers: number;
        totalSales: any;
    }>;
}
