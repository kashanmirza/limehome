import { Test, TestingModule } from '@nestjs/testing';
import { HereService } from './here.service';

describe('RapidApiService', () => {
  let service: HereService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HereService],
    }).compile();

    service = module.get<HereService>(HereService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
