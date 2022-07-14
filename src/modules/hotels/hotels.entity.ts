import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Hotels extends Model<Hotels> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
}
