import InteractionIndexComponent from '../src/components/InteractionIndexComponent';

describe('InteractionIndexComponent', ( => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<InteractionIndexComponent/>)
  });

  it('should render an InteractionTile', () => {
    expect(wrapper.find('InteractionTile')).toBePresent();
  });
}));
