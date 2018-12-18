import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { shouldBehaveLikeFormField } from './form-field.test';
import { HistoricalPicker } from '../../../components/consumer/mobile/form-fields';
import Label from '../../../components/consumer/mobile/label';
import Hint, { types as hintTypes} from '../../../components/consumer/mobile/hint';

describe('Historical Picker', () => {
  shouldBehaveLikeFormField(shallow(<HistoricalPicker error="some error" />));

  it('should have correct class name', () => {
    const wrapper = shallow(<HistoricalPicker />);
    expect(wrapper.hasClass('pbg-historical-picker')).to.be.true;
  });

  it('should contain a select element', () => {
    const wrapper = shallow(<HistoricalPicker />);
    expect(wrapper.find('select')).to.have.lengthOf(1);
  });

  it('should render given options', () => {
    const opts = [{ label: 'option 1', value: 'opt1' }, { label: 'option 2', value: 'opt2' }]
    const wrapper = shallow(<HistoricalPicker options={opts}/>);
    expect(wrapper.find('select').find('option')).to.have.lengthOf(2);
    opts.forEach(opt => {
      const expected = <option value={opt.value}>{opt.label}</option>;
      expect(wrapper.find('select').contains(expected)).to.be.true;
    });
  });

  it('should not render a label', () => {
    const labelText = 'Pick your posion';
    const wrapper = shallow(<HistoricalPicker label={labelText} />);
    expect(wrapper.find('.pbg-historical-picker').contains(<Label>{labelText}</Label>)).to.be.false;
  });

  it('should render the a hint if given', () => {
    const hintText = 'Pick your posion';
    const wrapper = shallow(<HistoricalPicker hint={hintText} />);
    expect(wrapper.find('.pbg-historical-picker').contains(<Hint>{hintText}</Hint>)).to.be.true;
  });

  it('should have correct class when error is given', () => {
    const wrapper = shallow(<HistoricalPicker error="an error"/>);
    expect(wrapper.hasClass('pbg-form-field-error')).to.be.true;
  });

  it('should render the an error if given', () => {
    const error = 'terrible error';
    const wrapper = shallow(<HistoricalPicker error={error} />);
    const expected = <Hint type={hintTypes.ERROR}>{error}</Hint>;
    expect(wrapper.find('.pbg-historical-picker').contains(expected)).to.be.true;
  });

  it('should render the an error if given despite a hint being passed', () => {
    const error = 'terrible error';
    const wrapper = shallow(<HistoricalPicker error={error} hint='hint' />);
    expect(wrapper.find('.pbg-historical-picker').contains(<Hint type={hintTypes.ERROR}>{error}</Hint>)).to.be.true;
  });

  it('should render a custom arrow element', () => {
    const wrapper = shallow(<HistoricalPicker />);
    const el = wrapper.find('.pbg-historical-picker')
      .find('.pbg-picker-select-container')
      .find('.pbg-picker-arrow');
    expect(el).to.have.lengthOf(1);
  });
});