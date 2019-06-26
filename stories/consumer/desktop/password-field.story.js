import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';
import PasswordField from '../../../components/consumer/desktop/password-field';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=2237%3A444';

storiesOf('Consumer/Desktop/Form Fields/password-field', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('password-field/default', () => (
    <FieldStateProvider
      component={PasswordField}
      name="password"
      label="Password"
      hint="Please login with your password."
      forgotPasswordText="Forgot?"
      onChange={action('change')}
      onForgotPassword={action('click')}
      required
    />
  ))
  .add('password-field/error', () => (
    <FieldStateProvider
      component={PasswordField}
      name="password"
      label="Password"
      hint="Please login with your password."
      forgotPasswordText="Forgot?"
      error="Something went wrong!"
      onChange={action('change')}
      onForgotPassword={action('click')}
      required
    />
  ));
