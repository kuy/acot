import type { RuleRecord } from '@acot/types';
import interactiveHasEnoughSize from './interactive-has-enough-size';
import interactiveSupportsFocus from './interactive-supports-focus';
import interactiveHasName from './interactive-has-name';

export const rules: RuleRecord = {
  'interactive-has-enough-size': interactiveHasEnoughSize,
  'interactive-supports-focus': interactiveSupportsFocus,
  'interactive-has-name': interactiveHasName,
};
