import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { shouldBehaveLikeFormField } from './form-field.test';
import { TextField } from '../../../components/consumer/mobile/form-fields';
import Label, { types as labelTypes } from '../../../components/consumer/mobile/label';
import Hint, { types as hintTypes } from '../../../components/consumer/mobile/hint';

export const shouldBehaveLikeTextField = (wrapper) => {
  it('should have class pbg-form-field', () => {
    expect(wrapper.hasClass('pbg-form-field')).to.be.true;
  });

  it('should have class pbg-text-field', () => {
    expect(wrapper.hasClass('pbg-text-field')).to.be.true;
  });

  it('should add pbg-form-field-focused class when clicked on input', () => {
    wrapper.find('input').simulate('focus');
    expect(wrapper.hasClass('pbg-form-field-focused')).to.be.true;
  });

  it('should remove pbg-form-field-focused class when clicked out of input', () => {
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    expect(wrapper.hasClass('pbg-form-field-focused')).to.be.false;
  });
};

describe('TextField', () => {
  shouldBehaveLikeTextField(shallow(<TextField />));
  shouldBehaveLikeFormField(shallow(<TextField error="some error" />));

  it('should pass name prop to input element', () => {
    const expected = 'text-field-name';
    const wrapper = shallow(<TextField name={expected} />);
    expect(wrapper.find('input').html()).to.include(`name="${expected}"`);
  });

  it('should contain one input type text element', () => {
    const wrapper = shallow(<TextField />);
    expect(wrapper.find('input').html()).to.include(`type="text"`);
  });

  it('should pass value prop to input element', () => {
    const expected = 'text field value';
    const wrapper = shallow(<TextField value={expected} />);
    expect(wrapper.find('input').prop('value')).to.equal(expected);
  });

  it('should pass onChange prop to input element', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<TextField onChange={onChange} />);
    wrapper.find('input').simulate('change');
    expect(onChange.calledOnce).to.be.true;
  });

  it('should execute onBlur when clicked out of input', () => {
    const onBlur = sinon.spy();
    const wrapper = shallow(<TextField onBlur={onBlur} />);
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    expect(onBlur.calledOnce).to.be.true;
  });

  it('should pass label prop as placeholder to input element', () => {
    const expected = 'a placeholder';
    const wrapper = shallow(<TextField label={expected} />);
    expect(wrapper.find('input').prop('placeholder')).to.equal(expected);
  });

  it('should include label element with passed label along with input', () => {
    const expected = 'A label';
    const wrapper = shallow(<TextField label={expected} />);
    expect(wrapper.find(Label).prop('children')).to.equal(expected);
  });

  it('should show a hint when given', () => {
    const expected = 'a hint';
    const wrapper = shallow(<TextField hint={expected} />);
    expect(wrapper.contains(<Hint>{expected}</Hint>)).to.be.true;
  });

  it('should pass type prop to input', () => {
    const expected = 'password';
    const wrapper = shallow(<TextField type={expected} />);
    expect(wrapper.find('input').prop('type')).to.equal(expected);
  });

  describe('With error', () => {
    it('should show an error hint when error is given', () => {
      const expected = 'a horrible error';
      const wrapper = shallow(<TextField error={expected} />);
      expect(wrapper.contains(<Hint type={hintTypes.ERROR}>{expected}</Hint>)).to.be.true;
    });

    it('should have correct class when error is given', () => {
      const wrapper = shallow(<TextField error="an error"/>);
      expect(wrapper.hasClass('pbg-form-field-error')).to.be.true;
    });

    it('should show an error over a hint when error is given', () => {
      const expected = 'a horrible error';
      const hint = 'nope';
      const wrapper = shallow(<TextField error={expected} hint={hint} />);
      expect(wrapper.contains(<Hint type={hintTypes.ERROR}>{expected}</Hint>)).to.be.true;
      expect(wrapper.contains(<Hint>{hint}</Hint>)).to.be.false;
    });

    it('should show an error label when error is given', () => {
      const expected = 'A label';
      const wrapper = shallow(<TextField error='and error' label={expected}/>);
      expect(wrapper.contains(<Label type={labelTypes.ERROR}>{expected}</Label>)).to.be.true;
    });
  });
});