import { exec as execCb } from 'child_process';
import { promisify } from 'util';

import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

const exec = promisify(execCb);

async function execCmd(cmd: string) {
  try {
    const { stdout } = await exec(cmd);
    return stdout.trim();
  } catch (e) {
    console.warn('Could not run command:', cmd);
    return '';
  }
}

@Injectable()
export class HealthService {
  async getGitData() {
    return {
      branch: await execCmd('git rev-parse --abbrev-ref HEAD'),
      commitId: await execCmd('git rev-parse HEAD'),
      version: await execCmd('git describe --tags --long'),
    };
  }

  async getReady() {
    return {
      data: [
        {
          type: 'AppHealthStatus',
          id: uuidv4(),
          attributes: {
            results: [],
            status: 'OK',
            timestamp: new Date().toISOString(),
            ...(await this.getGitData()),
          },
        },
      ],
    };
  }
}
