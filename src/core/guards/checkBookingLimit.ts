import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

import { BookingsService } from '../../modules/bookings/bookings.service';

@Injectable()
export class checkBookingLimit implements CanActivate {
    constructor(private readonly bookingsService: BookingsService) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request) {
        const bookings = await this.bookingsService.getBookingsByHotelId(request.body.hotelId);
        if (bookings.count > 10) {
            throw new ForbiddenException('No booking available for this hotel');
        }
        return true;
    }
}
