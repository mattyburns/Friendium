import FormFieldTile from '../src/components/tiles/FormFieldTile';

describe('FormFieldTile', () => {
  let name,
  value,
  onChange,
  wrapper;

  beforeEach(() => {
    onChange = jasmine.createSpy('onChange spy');
    wrapper = mount(
      <FormFieldTile
        name="State"
        value="MA"
        onChange={onChange}
      />)
    })

    it('should render an input tag with the specific props', () => {
      expect(wrapper.find('input').props()).toEqual({
        name: "State",
        value: "MA"
      });
    });

    it('should invoke the onChange function from props when clicked', () => {
      wrapper.simulate('change');
      expect(onChange).toHaveBeenCalled();
    });

});
