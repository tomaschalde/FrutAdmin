import { Controller, Get, Query} from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
    constructor(private readonly reportsService : ReportsService) {}

    @Get('sales-summary')
    salesSummary(@Query('periodo') periodo : 'day' | 'week' | 'month'){
        return this.reportsService.salesSummary(periodo)
    }

    @Get('top-sales')
    topSales(){
        return this.reportsService.topSales()
    }

    @Get('low-stock')
    lowStock(){
        return this.reportsService.lowStock()
    }

    @Get('total-revenue')
    totalRevenue(){
        return this.reportsService.totalRevenue()
    }
}
