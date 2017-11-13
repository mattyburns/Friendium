import BackButton from '../src/components/buttons/BackButton'


describe('BackButton', ()=> {
  let wrapper;


  beforeEach(()=> {
    onClick = jasmine.createSpy('onClick spy');
    wrapper = mount(
      <BackButton/>
    );
  });

  it('should render an img tag', () => {
    expect(wrapper.find('img')).ttoBePresent();
  });

  it('should invoke the onClick function when clicked', () => {
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

});
