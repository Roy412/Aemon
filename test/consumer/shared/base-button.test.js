import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from '../../../components/consumer/shared/button';

export const shouldBehaveLikeButton = (wrapper) => {
  beforeEach(() => {
    wrapper.setProps({ children: 'A button', disabled: null, onClick: null, hint: null });
  });

  it('should render a button tag', () => {
    expect(wrapper.find('button')).to.have.lengthOf(1);
  });

  it('should have correct class name', () => {
    expect(wrapper.find('button').hasClass('pbg-button')).to.be.true;
  });

  it('should pass extra classNames given', () => {
    const expected = 'extra-class';
    wrapper.setProps({ className: expected});
    expect(wrapper.find('button').hasClass('pbg-button')).to.be.true;
    expect(wrapper.find('button').hasClass(expected)).to.be.true;
  });

  it('should add disabled class when disabled prop is present', () => {
    wrapper.setProps({ disabled: true })
    expect(wrapper.find('button').hasClass('disabled')).to.be.true;
  });

  it('should render correct text', () => {
    const expected = 'some text';
    wrapper.setProps({ children: expected });
    expect(wrapper.find('button').text()).to.equal(expected);
  });

  it('should execute click handler if given', () => {
    const onClick = sinon.spy();
    wrapper.setProps({ onClick });
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).to.be.true;
  });

  it('should not execute click handler if given but disabled', () => {
    const onClick = sinon.spy();
    wrapper.setProps({ onClick, disabled: true });
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).to.be.false;
  });

  it('should not attempt to call click handler if not a function', () => {
    const onClick = '';
    wrapper.setProps({ onClick  });
    expect(() => wrapper.find('button').simulate('click')).not.to.throw();
  });

  it('should have type button if click handler is given', () => {
    wrapper.setProps({ onClick: () => {} });
    expect(wrapper.find('button').html()).to.include('type="button"');
  });

  it('should have type submit if click handler is not given', () => {
    wrapper.setProps({ onClick: null });
    expect(wrapper.find('button').html()).to.include('type="submit"');
  });

  it('should not throw error when hint is provided', () => {
    expect(() => {
      wrapper.setProps({ hint: 'lets break!' });
      wrapper.update();
    }).not.to.throw();
  });

  it('should render hint when provided', () => {
    const expected = 'hint';
    wrapper.setProps({ hint: expected });
    expect(wrapper.find('.pbg-button-hint-container')).to.have.lengthOf(1);
  });

  it('should not render hint if not provided', () => {
    wrapper.setProps({ hint: null });
    expect(wrapper.find('.pbg-button-hint-container')).to.have.lengthOf(0);
  });
};

describe('Base Button', () => {
  it('should throw when render is attempted', () => {
    expect(() => {
      shallow(<Button />);
    }).to.throw();
  });
});