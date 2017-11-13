import ChartsContainer from '../src/containers/ChartsContainer';
import ImpactDonutChart from '../src/components/ImpactDonutChart';

describe('ChartsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ChartsContainer />)
  });

  it('should render the ImpactDonutChart with data props', () => {
    expect(wrapper.find(ImpactDonutChart).props()).toEqual({
      data: props.data
    });
  });

});
