import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import DatestampLabel from '../src/labels/datestamp'

describe('<DatestampLabel />', () => {
  it('mounts a span with .ul-datestamp class name', () => {
    const wrapper = shallow(<DatestampLabel />);
    expect(wrapper.find('span.ul-datestamp')).to.have.length(1)
  });

  it('renders a formatted date', () => {
    const wrapper = shallow(<DatestampLabel stamp="2016-01-01"/>);
    expect(wrapper.html()).to.equal(`<span class="ul-datestamp">1/1/2016</span>`)
  });
});