import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Bookings extends Model<Bookings> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
}
