import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { ReportsRepository } from './reports.repository';
import { SalesRepository } from 'src/sales/sales.repository';
import { InventoryRepository } from 'src/inventory/inventory.repository';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService, ReportsRepository,SalesRepository,InventoryRepository]
})
export class ReportsModule {}
