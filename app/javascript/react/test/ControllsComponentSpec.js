import ControllsComponent from '../src/ControllsComponent';
import BackButton from '../src/components/buttons/BackButton'

describe('ControllsComponent',
()=> {
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(<ControllsComponent/>);
  });

  it('should render a BackButton Component', ()=> {
    expect(wrapper.find(BackButton)).toBePresent();
  });

});
