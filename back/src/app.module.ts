import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { SalesModule } from './sales/sales.module';
import { ReportsModule } from './reports/reports.module';


@Module({
  imports: [InventoryModule, SalesModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
