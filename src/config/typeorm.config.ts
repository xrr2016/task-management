import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as path                from "path";

const ePath = path.resolve(__dirname, "../**/*.entity.js")

console.log('e-path', ePath)

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'task_management',
  entities: [ePath],
  synchronize: true,
}
