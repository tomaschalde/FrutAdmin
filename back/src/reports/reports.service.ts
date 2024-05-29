import { Injectable } from '@nestjs/common';
import { ReportsRepository } from './reports.repository';

@Injectable()
export class ReportsService {
    constructor(private readonly reportsRepository : ReportsRepository) {}

    salesSummary(){
        return this.reportsRepository.productsMoreSold()
    }
}
