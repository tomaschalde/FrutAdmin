import { Injectable } from "@nestjs/common";
import { InventoryRepository } from "src/inventory/inventory.repository";
import { SalesRepository } from "src/sales/sales.repository";

@Injectable()
export class ReportsRepository {
    constructor(private readonly inventoryRepository : InventoryRepository, private readonly salesRepository : SalesRepository){}

    
    summarySales(periodo : string){
        const sales = this.salesRepository.getSales()
        const today = new Date()

        if(periodo === 'day'){
            const actualDay = today.toISOString().split('T')[0];
            const dailyData = sales.filter((sale) => sale.date === actualDay)

            return dailyData
        }
        
        else if (periodo === 'week'){
            const weekData = [];
            const weekMap = new Map();

            sales.forEach(sale => {
                const week = this.getWeekNumber(new Date(sale.date));
                if (!weekMap.has(week)) {
                  weekMap.set(week, { week, sales: [] });
                  weekData.push(weekMap.get(week));
                }
                weekMap.get(week).sales.push(sale.details)
              });

            return weekData
        }

        else{
            const monthlyData = [];
            const monthMap = new Map();

            sales.forEach(sale => {
            const month = new Date(sale.date).getMonth() + 1; // Mes 1-12
            if (!monthMap.has(month)) {
                monthMap.set(month, { month, sales: [] });
                monthlyData.push(monthMap.get(month));
            }
            monthMap.get(month).sales.push(sale.details);
            });

      
          return monthlyData;
        }
    }

    topSales(){
        const sales = this.salesRepository.getSales()
        const productsSold = []

        sales.forEach(sale => {
                const {name, quantity} = sale.details

                const foundProduct = productsSold.find(p => p.name === name)

                if(foundProduct){
                    foundProduct.quantity += quantity
                }else{
                    productsSold.push({name,quantity})
                }
            
        })

        productsSold.sort((a, b) => b.quantity - a.quantity);

        return productsSold.slice(0, 5)

    }

    async lowStock(){
        const products = await this.inventoryRepository.getInventory()

        return products.map((product) => {
            if(product.stock < 5)
                return product;
        })
    }

    totalRevenue(){
        const sales = this.salesRepository.getSales()
        let total = 0;
        const productsSold = []
        sales.forEach((sale) => {
            productsSold.push(sale.details.name)
            total = total + sale.details.totalPrice
        })
        return {productsSold,total}
    }

    
    private getWeekNumber(date) {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }
}