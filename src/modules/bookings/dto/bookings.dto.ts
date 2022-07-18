import { IsNotEmpty, IsEmail } from 'class-validator';

export class BookingsDto {

    @IsNotEmpty()
    readonly checkInDate: Date;

    @IsNotEmpty()
    readonly checkOutDate: Date;

    @IsNotEmpty()
    readonly amount: number;

    @IsNotEmpty()
    readonly guestName: string;

    @IsNotEmpty()
    @IsEmail()
    readonly guestEmail: string;

    @IsNotEmpty()
    readonly guestPhoneNumber: number;

    @IsNotEmpty()
    readonly hotelId: number;
}
