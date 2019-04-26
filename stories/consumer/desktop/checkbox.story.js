import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import {
  Checkbox,
} from '../../../components/consumer/desktop/checkbox';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=607%3A5';

storiesOf('Consumer/Desktop/Atomic Components/Checkbox', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Checkbox/Unhecked', () => (
    <FieldStateProvider
      component={Checkbox}
      name="field1"
      onChange={action('change')}
    />
  ))
  .add('Checkbox/Checked', () => (
    <FieldStateProvider
      component={Checkbox}
      name="field1"
      value="true"
      onChange={action('change')}
    />
  ))
  .add('Checkbox/Disabled', () => (
    <FieldStateProvider
      component={Checkbox}
      name="field1"
      value="true"
      disabled
      onChange={action('change')}
    />
  ));

storiesOf('Consumer/Desktop/Form Fields/Toggle', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Toggle/Checked', () => (
    <FieldStateProvider
      component={Checkbox}
      label="A checked checkbox field"
      hint="A hint here"
      value="true"
      onChange={action('change')}
    />
  ))
  .add('Toggle/Unchecked', () => (
    <FieldStateProvider
      component={Checkbox}
      name="field1"
      label="A checkbox field"
      hint="A hint here"
      onChange={action('change')}
    />
  ))
  .add('Toggle/Disabled', () => (
    <FieldStateProvider
      component={Checkbox}
      name="field1"
      value="true"
      label="A checkbox field"
      hint="A hint here"
      disabled
      onChange={action('change')}
    />
  ))
  .add('Toggle/Error', () => (
    <FieldStateProvider
      component={Checkbox}
      label="A checkbox field"
      hint="A hint here"
      error="An error"
      onChange={action('change')}
    />
  ));