import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NewAddressField from '../../../components/consumer/mobile/new-address-field';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'Mexico', value: 'mx' },
  { label: 'Denmark', value: 'dk' },
];

const validate = value => {
  const errors = {};
  if (!value.streetAddress) {
    errors.streetAddress = 'Must type in your street address';
  }
  if (!value.city) {
    errors.city = 'is required';
  }

  return errors;
};

const labels = {
  streetAddress: 'Street address',
  city: 'City',
  state: 'State',
  postalCode: 'Postal code',
  country: 'Country',
};

storiesOf('Consumer/Mobile/Form Fields', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('new-address-field', () => (
    <FieldStateProvider
      validate={validate}
      component={NewAddressField}
      name="new-address-field"
      label="Address label"
      hint="First two sub fields are required."
      required
      labels={labels}
      value={{
        streetAddress: '',
      }}
      countryOptions={countries}
      onChange={action('onChange')}
    />
  ));
