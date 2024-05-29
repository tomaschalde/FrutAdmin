import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { SalesRepository } from './sales.repository';
import { InventoryRepository } from 'src/inventory/inventory.repository';

@Module({
  controllers: [SalesController],
  providers: [SalesService, SalesRepository,InventoryRepository]
})
export class SalesModule {}
