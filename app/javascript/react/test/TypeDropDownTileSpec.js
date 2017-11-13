import TypeDropDownTile from '../src/components/tiles/TypeDropDownTile'


describe('TypeDropDownTile', () => {
  let name,
      content,
      labelText,
      wrapper;

  beforeEach(() => {
    wrapper = mount(<TypeDropDownTile
      name="interactionType"
      content="Package"
      labelText="Interaction type:"
                    />
    );
  });


  it('should render a label tag with the labelText', () =>{
    expect(wrapper.find('label').text()).toBe("Interaction type:");
  });

  it('should render a select tag', () => {
    expect(wrapper.find('select')).toBePresent();
  });
});
