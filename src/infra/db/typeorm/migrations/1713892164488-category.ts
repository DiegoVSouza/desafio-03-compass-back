import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Category1713892164488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'categories',
            columns: [
                { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
                { name: 'name', type: 'varchar' },
                { name: 'image_link', type: 'varchar' },
                { name: 'description', type: 'text' },
                { name: 'created_at', type: 'timestamp', default: 'now()' },
                { name: 'updated_at', type: 'timestamp', default: 'now()', onUpdate: 'CURRENT_TIMESTAMP' },
                { name: 'deleted_at', type: 'timestamp', isNullable: true },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(`categories`);
    }

}
