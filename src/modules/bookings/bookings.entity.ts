import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Bookings extends Model<Bookings> {
  static associate(models) {
    Bookings.belongsTo(models.Hotels, {
      foreignKey: 'hotelId',
      as: 'hotels',
    });
  }
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  checkInDate: Date;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  checkOutDate: Date;
  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  amount: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  guestName: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  guestEmail: string;
  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  guestPhoneNumber: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  hotelId: number;
}
