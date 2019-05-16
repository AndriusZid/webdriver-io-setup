import fs from 'fs';
import path from 'path';

const CONFIG_NAME = 'config.js';

export default function resolveProjectPaths(baseProjectDir, projectName) {
  if (!projectName) {
    throw new Error('Project name not given');
  }

  const projectDir = path.join(baseProjectDir, projectName);
  const configPath = path.join(projectDir, CONFIG_NAME);

  if (!fs.existsSync(projectDir)) {
    throw new Error(`Project directory not found at: ${projectDir}`);
  }

  if (!fs.existsSync(configPath)) {
    throw new Error(`Project config is missing at: ${configPath}`);
  }

  return {
    projectDir,
    configPath,
  };
}