import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Cards from './cards';
import DivInput from '../div-input';
import CardPlaceholder from './card-placeholder';

class CardField extends React.Component {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-text-field pbg-card-field';

  static propTypes = {
    label: PropTypes.string,
    allowedCardTypes: PropTypes.arrayOf(PropTypes.string),
    cardType: PropTypes.oneOf(['visa', 'master', 'american_express', 'discover', 'diners_club']),
  };

  static defaultProps = {
    label: null,
    cardType: null,
    allowedCardTypes: ['visa', 'master', 'american_express', 'discover', 'diners_club'],
  };

  render() {
    const { label, allowedCardTypes, cardType } = this.props;

    return (
      <div className={this.baseClassName}>
        {label && (
          <div className="pbg-card-field-label-wrapper">
            <div className="pbg-desktop-label-normal pbg-label-with-cards">{label}</div>
            <Cards allowedCardTypes={allowedCardTypes} />
          </div>
        )}
        <div className="pbg-card-field-wrapper">
          <CardPlaceholder cardType={cardType} />
          <DivInput />
        </div>
      </div>
    );
  }
}

export default CardField;
