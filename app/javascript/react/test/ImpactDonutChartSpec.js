import ImpactDonutChart from '../src/components/ImpactDonutChart';

describe('ImpactDonutChart', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ImpactDonutChart/>);
  });

  it('should render a Chart Component', () => {
    expect(wrapper.find('Chart')).toBePresent();
  });
});
