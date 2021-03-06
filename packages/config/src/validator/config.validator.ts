/* tslint:disable */
// generated by typescript-json-validator
import { inspect } from 'util';
import Ajv = require('ajv');
import { Config } from '@acot/types';
export const ajv = new Ajv({
  allErrors: true,
  coerceTypes: 'array',
  format: 'fast',
  nullable: false,
  unicode: true,
  uniqueItems: true,
  useDefaults: false,
});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

export { Config };
export const ConfigSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  allOf: [
    {
      properties: {
        extends: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        headers: {
          $ref: '#/definitions/Record',
        },
        paths: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        presets: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        rules: {
          $ref: '#/definitions/RuleConfig',
        },
      },
      type: 'object',
    },
    {
      properties: {
        chromeChannel: {
          $ref: '#/definitions/ChromeChannel',
        },
        connection: {
          $ref: '#/definitions/ConnectionOptions',
        },
        launchOptions: {
          $ref: '#/definitions/LaunchOptions',
        },
        origin: {
          type: 'string',
        },
        overrides: {
          items: {
            allOf: [
              {
                properties: {
                  extends: {
                    items: {
                      type: 'string',
                    },
                    type: 'array',
                  },
                  headers: {
                    $ref: '#/definitions/Record',
                  },
                  paths: {
                    items: {
                      type: 'string',
                    },
                    type: 'array',
                  },
                  presets: {
                    items: {
                      type: 'string',
                    },
                    type: 'array',
                  },
                  rules: {
                    $ref: '#/definitions/RuleConfig',
                  },
                },
                type: 'object',
              },
              {
                properties: {
                  exclude: {
                    items: {
                      type: 'string',
                    },
                    type: 'array',
                  },
                  include: {
                    items: {
                      type: 'string',
                    },
                    type: 'array',
                  },
                },
                type: 'object',
              },
            ],
          },
          type: 'array',
        },
        reporter: {
          anyOf: [
            {
              allOf: [
                {
                  $ref:
                    '#/definitions/Pick<{with?:Record<string,any>;},"with">',
                },
                {
                  properties: {
                    uses: {
                      $ref: '#/definitions/U',
                    },
                  },
                  required: ['uses'],
                  type: 'object',
                },
              ],
            },
            {
              type: 'string',
            },
          ],
        },
        runner: {
          anyOf: [
            {
              allOf: [
                {
                  $ref:
                    '#/definitions/Pick<{with?:Record<string,any>;},"with">',
                },
                {
                  properties: {
                    uses: {
                      $ref: '#/definitions/U',
                    },
                  },
                  required: ['uses'],
                  type: 'object',
                },
              ],
            },
            {
              type: 'string',
            },
          ],
        },
        viewport: {
          anyOf: [
            {
              $ref: '#/definitions/Viewport',
            },
            {
              type: 'string',
            },
          ],
        },
        workingDir: {
          type: 'string',
        },
      },
      type: 'object',
    },
  ],
  definitions: {
    ChromeChannel: {
      enum: ['*', 'canary', 'puppeteer', 'stable'],
      type: 'string',
    },
    ConnectionOptions: {
      $ref: '#/definitions/__type_2',
    },
    LaunchOptions: {
      $ref: '#/definitions/__type_4',
    },
    'Pick<{with?:Record<string,any>;},"with">': {
      properties: {
        with: {
          $ref: '#/definitions/T',
        },
      },
      type: 'object',
    },
    Record: {
      $ref: '#/definitions/__type',
    },
    RuleConfig: {
      $ref: '#/definitions/__type_1',
    },
    T: {
      $ref: '#/definitions/__type_3',
    },
    U: {
      type: 'string',
    },
    Viewport: {
      properties: {
        deviceScaleFactor: {
          default: 1,
          description:
            'Specify device scale factor (can be thought of as dpr).',
          type: 'number',
        },
        hasTouch: {
          default: false,
          description: 'Specifies if viewport supports touch events.',
          type: 'boolean',
        },
        height: {
          description: 'The page height in pixels.',
          type: 'number',
        },
        isLandscape: {
          default: false,
          description: 'Specifies if viewport is in landscape mode.',
          type: 'boolean',
        },
        isMobile: {
          default: false,
          description: 'Whether the `meta viewport` tag is taken into account.',
          type: 'boolean',
        },
        width: {
          description: 'The page width in pixels.',
          type: 'number',
        },
      },
      required: ['height', 'width'],
      type: 'object',
    },
    __type: {
      type: 'object',
    },
    __type_1: {
      type: 'object',
    },
    __type_2: {
      properties: {
        command: {
          type: 'string',
        },
        timeout: {
          type: 'number',
        },
      },
      type: 'object',
    },
    __type_3: {
      type: 'object',
    },
    __type_4: {
      properties: {
        args: {
          description:
            'Additional arguments to pass to the browser instance.\nThe list of Chromium flags can be found here.',
          items: {
            type: 'string',
          },
          type: 'array',
        },
        defaultViewport: {
          description:
            'Sets a consistent viewport for each page. Defaults to an 800x600 viewport. null disables the default viewport.',
          properties: {
            deviceScaleFactor: {
              default: 1,
              description:
                'Specify device scale factor (can be thought of as dpr).',
              type: 'number',
            },
            hasTouch: {
              default: false,
              description: 'Specifies if viewport supports touch events.',
              type: 'boolean',
            },
            height: {
              description: 'page height in pixels.',
              type: 'number',
            },
            isLandscape: {
              default: false,
              description: 'Specifies if viewport is in landscape mode.',
              type: 'boolean',
            },
            isMobile: {
              default: false,
              description:
                'Whether the meta viewport tag is taken into account.',
              type: 'boolean',
            },
            width: {
              description: 'page width in pixels.',
              type: 'number',
            },
          },
          type: 'object',
        },
        devtools: {
          description:
            'Whether to auto-open a DevTools panel for each tab.\nIf this option is true, the headless option will be set false.',
          type: 'boolean',
        },
        dumpio: {
          default: false,
          description:
            'Whether to pipe browser process stdout and stderr into process.stdout and\nprocess.stderr.',
          type: 'boolean',
        },
        env: {
          additionalProperties: {
            type: ['string', 'number', 'boolean'],
          },
          default: '`process.env`.',
          description:
            'Specify environment variables that will be visible to Chromium.',
          type: 'object',
        },
        executablePath: {
          description:
            'Path to a Chromium executable to run instead of bundled Chromium. If\nexecutablePath is a relative path, then it is resolved relative to current\nworking directory.',
          type: 'string',
        },
        handleSIGHUP: {
          default: true,
          description: 'Close chrome process on SIGHUP.',
          type: 'boolean',
        },
        handleSIGINT: {
          default: true,
          description: 'Close chrome process on Ctrl-C.',
          type: 'boolean',
        },
        handleSIGTERM: {
          default: true,
          description: 'Close chrome process on SIGTERM.',
          type: 'boolean',
        },
        headless: {
          default: 'true unless the devtools option is true.',
          description: 'Whether to run browser in headless mode.',
          type: 'boolean',
        },
        ignoreDefaultArgs: {
          anyOf: [
            {
              items: {
                type: 'string',
              },
              type: 'array',
            },
            {
              type: 'boolean',
            },
          ],
          default: false,
          description:
            'Do not use `puppeteer.defaultArgs()` for launching Chromium.',
        },
        ignoreHTTPSErrors: {
          default: false,
          description: 'Whether to ignore HTTPS errors during navigation.',
          type: 'boolean',
        },
        pipe: {
          default: false,
          description:
            'Connects to the browser over a pipe instead of a WebSocket.',
          type: 'boolean',
        },
        slowMo: {
          description:
            'Slows down Puppeteer operations by the specified amount of milliseconds.\nUseful so that you can see what is going on.',
          type: 'number',
        },
        timeout: {
          default: 30000,
          description:
            'Maximum navigation time in milliseconds, pass 0 to disable timeout.',
          type: 'number',
        },
        userDataDir: {
          description: 'Path to a User Data Directory.',
          type: 'string',
        },
      },
      type: 'object',
    },
  },
};
export type ValidateFunction<T> = ((data: unknown) => data is T) &
  Pick<Ajv.ValidateFunction, 'errors'>;
export const isConfig = ajv.compile(ConfigSchema) as ValidateFunction<Config>;
export default function validate(value: unknown): Config {
  if (isConfig(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(
        isConfig.errors!.filter((e: any) => e.keyword !== 'if'),
        { dataVar: 'Config' },
      ) +
        '\n\n' +
        inspect(value),
    );
  }
}
