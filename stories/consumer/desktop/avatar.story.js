import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../../../components/consumer/desktop/avatar'
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Atomic Components/Avatar', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Default size', () => (
    <Avatar src='http://i.pravatar.cc/300' />
  ))
  .add('Custom size', () => (
    <div className='flex middle'>
      <Avatar
        className='mr-2'
        size={100}
        src='http://i.pravatar.cc/300'
      />
      <Avatar
        className='mr-2'
        size={150}
        src='http://i.pravatar.cc/300'
      />
      <Avatar
        className='mr-2'
        size={200}
        src='http://i.pravatar.cc/300'
      />
    </div>
  ))
  .add('Default fallback', () => (
    <Avatar
      size={50}
      src='brokenlink.broken'
    />
  ))
  .add('Initials', () => (
    <div className="flex">
      <Avatar 
        size={32}
        userId='cad51ae7-1013-47e8-a3a8-e7e537906f4d'
        fullName="Sergio de la Garza"
      />
      <Avatar 
        size={32}
        userId='c892121b-d1fa-4305-9765-a46ec5543c30'
        fullName="Frank"
      />
      <Avatar 
        size={32}
        userId='c892121b-d1fa-4305-9765-a46ec5543c30'
        fullName="example@example.com"
      />

    </div>
  ))
  .add('Fallbacks generated by userId', () => (
    <div className='flex middle'>
      <Avatar
        className='mr-2'
        size={50}
        src='brokenlink.broken'
        userId='cad51ae7-1013-47e8-a3a8-e7e537906f4d'
      />
      <Avatar
        className='mr-2'
        size={50}
        src='brokenlink.broken'
        userId='f6089ef8-6288-4bfc-bfd2-bef2d6123a2d'
      />
      <Avatar
        className='mr-2'
        size={50}
        src='brokenlink.broken'
        userId='c892121b-d1fa-4305-9765-a46ec5543c30'
      />
      <Avatar
        className='mr-2'
        size={50}
        src='brokenlink.broken'
        userId='72a7ec5e-2807-4489-83a2-eeab1c76ce8e'
      />
      <Avatar
        className='mr-2'
        size={50}
        src='brokenlink.broken'
        userId='e28cdb6e-67aa-4458-a6ae-fc510e1b449b'
      />

      <Avatar
        className='mr-2'
        size={15}
        src='brokenlink.broken'
        userId='ecf96f7f-d517-4bd1-9f16-18171114af43'
      />
    </div>
  ));
