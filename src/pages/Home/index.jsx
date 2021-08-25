import Chart from '../../components/Chart';
import FeaturedInfo from '../../components/FeaturedInfo';
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
    </div>
  );
}
