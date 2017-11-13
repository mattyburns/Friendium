import TextAreaTile from '../src/components/tiles/TextAreaTile';

describe('TextAreaTile', () => {
  let name,
      content,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TextAreaTile
        name="notes"
        value="test note"
      />)
  });

  it('should have a textarea tag with specified properties', () => {
    expect(wrapper.find('textarea').props()).toEqual({
      rows: "10",
      cols: "50",
      name: "notes",
      value: "test note"
  });

});
