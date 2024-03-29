import React from 'react';
import { storiesOf } from '@storybook/react';

import TextArea from '../../../components/consumer/mobile/text-area';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/text-area', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('text-area/default', () => (
    <FieldStateProvider component={TextArea} name="text1" label="Label" value="" hint="Hint" />
  ))
  .add('text-area/placeholder', () => (
    <FieldStateProvider
      component={TextArea}
      name="text2"
      label="Label"
      placeholder="Placeholder"
      value=""
      hint="Hint"
    />
  ))
  .add('text-area/error', () => (
    <FieldStateProvider
      component={TextArea}
      name="text3"
      label="Label"
      value="This is an erroneous field"
      error="Error"
    />
  ))
  .add('text-area/disabled', () => (
    <FieldStateProvider component={TextArea} name="text4" label="Label" value="Disabled" hint="Hint" disabled />
  ));
