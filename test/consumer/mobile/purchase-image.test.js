import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PurchaseImage from '../../../components/consumer/mobile/purchase-image';

describe('purchase-image', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<PurchaseImage />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-purchase-image')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<PurchaseImage className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have correct image', () => {
    const src = 'image-url';
    const wrapper = shallow(<PurchaseImage src={src} />);
    expect(wrapper.find('img').prop('src')).to.equal(src);
  });
});
