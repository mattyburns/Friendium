import InteractionFormContainer from '../src/containers/InteractionFormContainer';
import testHelper from './testHelper';

describe ('InteractionFormContainer', ()=>{
  let wrapper;

  beforeEach(()=> {
    spyOn(InteractionFormContainer.prototype, 'handleChange').and.callThrough();
    wrapper = mount(<InteractionFormContainer/>)
  });

  it('should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({
      interactionType: "",
      notes: "",
      dateOfInteraction: moment(),
      errors: ""
    })
  })

  it('should render a DatePicker component', ()=> {
    expect(wrapper.find('DatePicker').length).toEqual(1);
  })

  it('should render a TypeDropDownTile component', ()=> {
    expect(wrapper.find('TypeDropDownTile').length).toEqual(1);
  })

  it('should render a TextAreaTile component', ()=> {
    expect(wrapper.find('TextAreaTile').length).toEqual(1);
  })


})
