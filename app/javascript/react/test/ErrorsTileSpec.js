import ErrorsTile from '../src/components/tiles/ErrorsTile';

describe('ErrorsTile', () => {
  let wrapper,
      errors;

  beforeEach(() => {
    wrapper = mount(
      <ErrorsTile
        errors={['error1', 'error2']}
      />)
  });

  it('should render an li element for each error in props', () => {
    expect(wrapper.find('li').text()).toBe('error1')
  });

});
