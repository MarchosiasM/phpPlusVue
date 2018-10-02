import { mount } from '@vue/test-utils';
import InputComponent from '../src/components/InputComponent';

describe('Input Component', () => {
  const factory = (value = {}) => {
    const wrapper = mount(InputComponent, {
      propsData: {
        ...value
      }
    })
    return wrapper;
  }
  it('renders correctly', () => {
    const wrapper = factory();
    expect(wrapper).toMatchSnapshot();
  })
})
