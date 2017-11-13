import FriendIndexComponent from '../src/components/FriendIndexComponent';

describe('FriendIndexComponent', ( => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<FriendIndexComponent/>)
  });

  it('should render a FriendTile', () => {
    expect(wrapper.find(FriendTile)).toBePresent();
  })
}))
