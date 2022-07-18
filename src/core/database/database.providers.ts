import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE, DEVELOPMENT, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { Bookings } from '../../modules/bookings/bookings.entity';
import { Hotels } from '../../modules/hotels/hotels.entity';

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case DEVELOPMENT:
                    config = databaseConfig.development;
                    break;
                case PRODUCTION:
                    config = databaseConfig.production;
                    break;
                default:
                    config = databaseConfig.development;
            }
            const sequelize = new Sequelize(config);
            sequelize.addModels([Bookings, Hotels]);
            await sequelize.sync({force: true});
            return sequelize;
        },
    },
];
