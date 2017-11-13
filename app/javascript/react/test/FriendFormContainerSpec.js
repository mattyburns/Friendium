import FriendFormContainer from '../src/containers/FriendFormContainer';
import ErrorsTile from '../src/components.tiles/ErrorsTile'

describe ('FriendFormContainer', ()=>{
  let wrapper;

  beforeEach(()=> {
    spyOn(FriendFormContainer.prototype, 'handleChange').and.callThrough();
    wrapper = mount(<FriendFormContainer/>)
  });

  it('should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({
      fullName: "",
      preferredName: "",
      preferredPronouns: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      errors: ""
    })
  })

  it('should render nine FormFieldTile components', ()=> {
    expect(wrapper.find('FormFieldTile').length).toEqual(9);
  });

  it('should render an ErrorsTile component if there are errors in state', () =>{
    wrapper.setState({errors: ["error1", "error2"]});
    expect(wrapper.find(ErrorsTile)).toBePresent();
  });

});
