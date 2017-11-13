import InteractionTile from '../../src/components/tiles/InteractionTile';

describe('InteractionTile', () => {
  let friendId,
      dateOfInteraction,
      interactionType,
      notes,
      wrapper;

  beforeEach(() => {
    onClick = jasmine.createSpy('onClick spy');
    wrapper = mount(
      <InteractionTile
        friendId={1}
        dateOfInteraction="2017-03-12"
        interactionType="Package"
        notes="Sent a package"
      />
    );
  });

  it('should render 3 p tags', () => {
    expect(wrapper.find('p').length).toEqual(3);
  });

  it('should render a p tag with the dateOfInteraction property', () => {
    expect(wrapper.find('p').text()).toBe("Matthew Burns");
  })

  it('should render 2 img tags', () => {
    expect(wrapper.find('img').length).toEqual(2);
  });

});
