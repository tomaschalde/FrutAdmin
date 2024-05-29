import { Injectable } from '@nestjs/common';
import { ReportsRepository } from './reports.repository';

@Injectable()
export class ReportsService {
    constructor(private readonly reportsRepository : ReportsRepository) {}

    salesSummary(periodo : string){
        return this.reportsRepository.summarySales(periodo)
    }

    topSales(){
        return this.reportsRepository.topSales()
    }

    lowStock(){
        return this.reportsRepository.lowStock()
    }

    totalRevenue(){
        return this.reportsRepository.totalRevenue()
    }

    generatePdf(){

    }
}
