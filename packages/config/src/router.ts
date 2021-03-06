import type { ResolvedConfig, ResolvedConfigEntry } from '@acot/types';
import glob2regexp from 'glob-to-regexp';

const globOptions: glob2regexp.Options = {
  globstar: true,
  extended: true,
};

export class ConfigRouter {
  private _config: ResolvedConfig;

  public constructor(config: ResolvedConfig) {
    this._config = config;
  }

  public resolve(path: string): ResolvedConfigEntry {
    const test = (pattern: string, path: string) =>
      glob2regexp(pattern, globOptions).test(path);

    const entry = this._config.overrides?.find((config) => {
      let found = (config.paths ?? []).includes(path);

      // include
      if (!found && config.include != null) {
        found = config.include.some((pattern) => test(pattern, path));
      }

      // exclude
      if (found && config.exclude != null) {
        found = config.exclude.every((pattern) => !test(pattern, path));
      }

      return found;
    });

    if (entry != null) {
      return entry;
    }

    return this._config;
  }
}
