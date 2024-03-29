import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from '../../../components/consumer/desktop/divider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Atomic Components/divider', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('divider', () => <Divider />)
  .add('divider/label-only', () => <Divider label='Label' />)
  .add('divider/label-with-helper', () => <Divider label='Label' hint='Helper text' />)
