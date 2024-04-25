import { AppModule } from '../../../app.module';
import { NestFactory } from '@nestjs/core';
import { ICategoryService } from './interface/categoryService';
import { IProductService } from './interface/productService';

async function seed() {
  const app = await NestFactory.create(AppModule);

  try {
    const categorySeedService = app.get(ICategoryService);
    const productSeedService = app.get(IProductService);
    const categories = await categorySeedService.seedCategories();
    console.log("Categories created, awaiting for products")
    await productSeedService.seedProducts(categories);

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await app.close();
  }
}

seed();
