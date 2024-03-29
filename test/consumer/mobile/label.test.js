import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { labelClassNames } from '../../../components/consumer/shared/base-label';
import Label from '../../../components/consumer/mobile/label';

describe('Mobile Label', () => {
  it('should contain pbg-consumer-mobile className', () => {
    const expected = 'pbg-consumer-mobile';
    const wrapper = mount(<Label>some text</Label>);
    expect(wrapper.find('label').hasClass(labelClassNames.base)).to.be.true;
    expect(wrapper.find('label').hasClass(expected)).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = mount(<Label className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should render label tag as first element', () => {
    const wrapper = mount(<Label />);
    expect(wrapper.html()).to.equal('<label class="pbg-label pbg-consumer-mobile"><span></span></label>');
  });
});
