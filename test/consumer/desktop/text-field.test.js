import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import TextField from '../../../components/consumer/desktop/text-field';
import { shouldBehaveLikeFormField } from '../shared/form-field.test';
import Label, { labelTypes } from '../../../components/consumer/desktop/label';
import Hint, { hintTypes } from '../../../components/consumer/desktop/hint';

export const shouldBehaveLikeTextField = wrapper => {
  it('should have class pbg-form-field', () => {
    expect(wrapper.hasClass('pbg-form-field')).to.be.true;
  });

  it('should have class pbg-text-field', () => {
    expect(wrapper.hasClass('pbg-text-field')).to.be.true;
  });

  it('should add pbg-form-field-focused class when focused', done => {
    wrapper.setProps({ focused: true }, () => {
      expect(wrapper.hasClass('pbg-form-field-focused')).to.be.true;
      done();
    });
  });

  it('should remove pbg-form-field-focused class when not focused', done => {
    wrapper.setProps({ focused: true }, () => {
      wrapper.setProps({ focused: false }, () => {
        expect(wrapper.hasClass('pbg-form-field-focused')).to.be.false;
        done();
      });
    });
  });

  it('should not render label and hint if simple prop', done => {
    wrapper.setProps({ simple: true, label: 'some label', hint: 'a hint' }, () => {
      expect(wrapper.find(Label)).to.have.lengthOf(0);
      expect(wrapper.find(Hint)).to.have.lengthOf(0);
      done();
    });
  });
};

describe('TextField', () => {
  shouldBehaveLikeTextField(shallow(<TextField />));
  shouldBehaveLikeFormField(shallow(<TextField error="some error" />));

  it('should have correct className when provided', () => {
    const className = 'className';
    const wrapper = shallow(<TextField className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });

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

  it('should set value to empty string if undefined is given', () => {
    const expected = '';
    const wrapper = shallow(<TextField />);
    expect(wrapper.find('input').prop('value')).to.equal(expected);
  });

  it('should set value to empty string if null is given', () => {
    const expected = '';
    const wrapper = shallow(<TextField value={null} />);
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

  it('should pass placeholder prop to input element', () => {
    const expected = 'a placeholder';
    const wrapper = shallow(<TextField placeholder={expected} />);
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

  it('should execute onFocus if given', () => {
    const onFocus = sinon.spy();
    const wrapper = shallow(<TextField onFocus={onFocus} />);
    wrapper.find('input').simulate('focus');
    expect(onFocus.calledOnce).to.be.true;
  });

  it('should pass pattern prop to input', () => {
    const expected = '[0-9]*';
    const wrapper = shallow(<TextField pattern={expected} />);
    expect(wrapper.find('input').prop('pattern')).to.equal(expected);
  });

  describe('With error', () => {
    it('should show an error hint when error is given', () => {
      const expected = 'a horrible error';
      const wrapper = shallow(<TextField error={expected} />);
      expect(wrapper.contains(<Hint type={hintTypes.ERROR}>{expected}</Hint>)).to.be.true;
    });

    it('should have correct class when error is given', () => {
      const wrapper = shallow(<TextField error="an error" />);
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
      const wrapper = shallow(<TextField error="and error" label={expected} />);
      expect(wrapper.contains(<Label type={labelTypes.ERROR}>{expected}</Label>)).to.be.true;
    });

    it('should have error label when error is given but field is focused', () => {
      const expected = 'A label';
      const wrapper = shallow(<TextField error="and error" label={expected} focused />);
      expect(wrapper.contains(<Label type={labelTypes.ERROR}>{expected}</Label>)).to.be.true;
    });

    it('should not have error class when error is given but field is focused', () => {
      const expected = 'A label';
      const wrapper = shallow(<TextField error="and error" label={expected} focused />);
      expect(wrapper.hasClass('pbg-form-field-error')).to.be.false;
    });

    it('should add a pbg-text-field-icon element when icon prop is passed', () => {
      const wrapper = shallow(<TextField icon="/urlhere.dude" />);
      expect(wrapper.find('.pbg-text-field-icon')).to.have.lengthOf(1);
    });

    it('should trigger icon click event when icon is clicked', () => {
      const onIconClick = sinon.spy();
      const wrapper = shallow(<TextField icon="/urlhere.dude" onIconClick={onIconClick} />);
      wrapper.find('.pbg-text-field-icon').simulate('click');
      expect(onIconClick.calledOnce).to.be.true;
    });
  });

  describe('when its a simple field', () => {
    it('should not render the label and hint', () => {
      const label = 'label text';
      const hint = 'hint text';
      const wrapper = shallow(<TextField simple label={label} hint={hint} />);

      expect(wrapper.find(Label)).to.have.lengthOf(0);
      expect(wrapper.find(Hint)).to.have.lengthOf(0);
    });
  });
});
