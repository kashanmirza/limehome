import { Bookings } from './bookings.entity';
import { BOOKINGS_REPOSITORY } from '../../core/constants';

export const bookingsProviders = [
  {
    provide: BOOKINGS_REPOSITORY,
    useValue: Bookings,
  },
];
