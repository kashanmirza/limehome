import { Hotels } from './hotels.entity';
import { HOTELS_REPOSITORY } from '../../core/constants';

export const hotelsProviders = [
  {
    provide: HOTELS_REPOSITORY,
    useValue: Hotels,
  },
];
