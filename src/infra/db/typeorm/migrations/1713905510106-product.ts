import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Product1713905510106 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
                { name: 'category_id', type: 'uuid' },
                { name: 'name', type: 'varchar' },
                { name: 'description', type: 'text' },
                { name: 'large_description', type: 'text' },
                { name: 'price', type: 'numeric' },
                { name: 'discount_price', type: 'numeric' },
                { name: 'discount_percent', type: 'numeric' },
                { name: 'sku', type: 'varchar' },
                { name: 'is_new', type: 'boolean', default: false },
                { name: 'created_at', type: 'timestamp', default: 'now()' },
                { name: 'updated_at', type: 'timestamp', default: 'now()', onUpdate: 'CURRENT_TIMESTAMP' },
                { name: 'deleted_at', type: 'timestamp', isNullable: true },
            ],
        }), true);

        await queryRunner.createTable(new Table({
            name: 'attributes',
            columns: [
                { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
                { name: 'qtd', type: 'int' },
                { name: 'color', type: 'varchar' },
                { name: 'size', type: 'varchar' },
                { name: 'image_link', type: 'varchar' },
                { name: 'product_id', type: 'uuid' },
                { name: 'created_at', type: 'timestamp', default: 'now()' },
                { name: 'updated_at', type: 'timestamp', default: 'now()', onUpdate: 'CURRENT_TIMESTAMP' },
            ],
        }), true);

        await queryRunner.createForeignKey('products', new TableForeignKey({
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'CASCADE',
        }));

        await queryRunner.createForeignKey('attributes', new TableForeignKey({
            columnNames: ['product_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'products',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('attributes');
        await queryRunner.dropTable('products');
    }

}
