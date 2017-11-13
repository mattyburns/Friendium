import FriendTile from '../src/components/tiles/FriendTile';

describe('FriendTile', () => {
  let fullName,
      preferredName,
      preferredPronouns,
      email,
      phoneNumber,
      streetAddress,
      city,
      state,
      zipCode,
      wrapper;

  beforeEach(() => {
    onClick = jasmine.createSpy('onClick spy');
    wrapper = mount(
      <FriendTile
        fullName="Matthew Burns"
        preferredName ="Matty"
        preferredPronouns="he/him"
        email="mattyb@123.com"
        phoneNumber="555-555-5555"
        streetAddress="12 Pear Street"
        city="Boston"
        state="MA"
        zipCode="12345"
      />
    );
  });

  it('should render an h3 tag', () => {
    expect(wrapper.find('h3')).toBePresent();
  });

  it('should render an h1 tag with the fullName property', () => {
    expect(wrapper.find('h1').text()).toBe("Matthew Burns");
  });

  it('should render 4 img tags', () => {
    expect(wrapper.find('img').length).toEqual(4);
  });

});
