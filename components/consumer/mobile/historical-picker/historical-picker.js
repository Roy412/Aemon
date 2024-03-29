import React from 'react';

import Picker from '../picker';

import './style.scss';

class HistoricalPicker extends Picker {
  baseClassName = 'pbg-form-field pbg-picker pbg-historical-picker';

  render() {
    return (
      <div className={this.className}>
        <div className="pbg-picker-select-container">
          {this.renderSelect()}
          <i className="pbg-picker-arrow" />
        </div>
        {this.renderHintOrError()}
      </div>
    );
  }
}

export default HistoricalPicker;
