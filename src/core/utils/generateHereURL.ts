import * as dotenv from 'dotenv';
dotenv.config();

export const generateHereURL = (
  latitude: number,
  longitude: number,
  type: string,
): string =>
  `${process.env.HERE_API_LINK}?in=circle:${latitude},${longitude};r=150&q=${type}&apiKey=${process.env.HERE_ACCESS_KEY}`;
