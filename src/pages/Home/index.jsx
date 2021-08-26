import Chart from '../../components/Chart';
import FeaturedInfo from '../../components/FeaturedInfo';
import WidgetLarge from '../../components/WidgetLarge';
import WidgetSmall from '../../components/WidgetSmall';
import { userData } from '../../utils/dummyData';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userData}
        xDatakey='name'
        lineDataKey='Active User'
        title='Sales Analytics'
        grid
      />
      <div className='widgets'>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
