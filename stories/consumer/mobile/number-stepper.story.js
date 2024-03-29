import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withContainer, wrapStory } from '../../util/decorators';
import NumberStepper from '../../../components/consumer/mobile/number-stepper';

import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/number-stepper', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('number-stepper/simple', () => (
    <FieldStateProvider
      component={NumberStepper}
      name="simple-number-stepper"
      value={null}
      onChange={action('onChange')}
      min={1}
      max={100}
    />
  ))
  .add('number-stepper/default', () => (
    <FieldStateProvider
      component={NumberStepper}
      name="simple-number-stepper"
      value={null}
      label="Label"
      hint="Hint"
      onChange={action('onChange')}
      min={1}
      max={100}
    />
  ))
  .add('number-stepper/error', () => (
    <FieldStateProvider
      component={NumberStepper}
      name="simple-number-stepper"
      value={null}
      label="Label"
      hint="Hint"
      error="Error"
      onChange={action('onChange')}
      min={1}
      max={100}
    />
  ))
  .add('number-stepper/disabled', () => (
    <FieldStateProvider
      component={NumberStepper}
      name="simple-number-stepper"
      value={null}
      label="Label"
      hint="Hint"
      disabled
      onChange={action('onChange')}
      min={1}
      max={100}
    />
  ));
