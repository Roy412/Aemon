import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FacebookInput from '../../../components/consumer/desktop/facebook-input';

import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Form Fields/facebook-input', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('default', () =>
    <FacebookInput
      onClick={action('clicked')}
      hint="You previously logged in with Facebook. Please click to authenticate again."
      buttonLabel="Continue with Facebook"
    />
  )
  .add('german', () =>
    <FacebookInput
      onClick={action('clicked')}
      hint="Sie haben sich zuvor mit Facebook angemeldet. Bitte klicken Sie, um sich erneut zu authentifizieren."
      buttonLabel="Weiter mit Facebook"
    />
  )
  .add('france', () =>
    <FacebookInput
      onClick={action('clicked')}
      hint="Vous avez déjà connecté avec Facebook. Veuillez cliquer pour vous authentifier à nouveau."
      buttonLabel="Continuer avec Facebook"
    />
  )
  .add('spanish', () =>
    <FacebookInput
      onClick={action('clicked')}
      hint="Has iniciado sesión previamente con Facebook. Por favor, haga clic para autenticar de nuevo."
      buttonLabel="Continuar con Facebook"
    />
  );
