import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Hotels extends Model<Hotels> {
  static associate(models) {
    Hotels.hasMany(models.Bookings, {
      as: 'bookings',
      foreignKey: 'hotelId',
    });
  }
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  uniqueId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  latitude: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  longitude: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  contact: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  website: string;
}
