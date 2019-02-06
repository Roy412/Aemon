import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FormField from '../../../components/consumer/desktop/form-field';
import { labelTypes } from '../../../components/consumer/shared/label';

describe('Desktop: FormField', () => {
  it('should implement .label, .hintOrError, .labelType', () => {
    const wrapper = shallow(<FormField />)
    const instance = wrapper.instance();

    expect(() => {
      return instance.label
    }).to.not.throw;

    expect(() => {
      return instance.hintOrError
    }).to.not.throw;

    expect(() => {
      return instance.labelType
    }).to.not.throw;
  });

  it('should return labelType.ERROR when error', () => {
    const wrapper = shallow(<FormField error='this is an error' />)
    const instance = wrapper.instance();

    expect(instance.labelType).to.equal(labelTypes.ERROR);
  });

  it('should return labelType.BASE when NO error', () => {
    const wrapper = shallow(<FormField />)
    const instance = wrapper.instance();

    expect(instance.labelType).to.equal(labelTypes.BASE);
  });

  it('should render a Label if specified in props', () => {
    const wrapper = shallow(<FormField label="this is a label" />)
    const instance = wrapper.instance();
    const labelWrapper = shallow(instance.label);

    expect(labelWrapper.html()).to.contain('<label')
  });
});