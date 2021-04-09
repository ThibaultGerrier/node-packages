import { Test, TestingModule } from '@nestjs/testing';

import { HealthService } from './health.service';

describe('HealthService', () => {
  let service: HealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthService],
    }).compile();

    service = module.get<HealthService>(HealthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return git information', async () => {
    const gitData = await service.getGitData();
    await service.getGitData();
    await service.getGitData();
    await service.getGitData();
    expect(gitData).toHaveProperty('branch');
    expect(gitData).toHaveProperty('commitId');
    expect(gitData).toHaveProperty('version');

    expect(typeof gitData.branch).toBe('string');
    expect(typeof gitData.commitId).toBe('string');
    expect(typeof gitData.version).toBe('string');
  });

  it('should return ready information', async () => {
    const ready = await service.getReady();
    expect(ready).toHaveProperty('data');
  });
});
