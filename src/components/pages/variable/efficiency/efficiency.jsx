import { PropTypes } from 'prop-types';

import Testimonial from 'components/pages/use-case/testimonial';
import LINKS from 'constants/links';
import autoscaleIcon from 'icons/variable/autoscale.svg';
import performanceIcon from 'icons/variable/performance.svg';
import resizeIcon from 'icons/variable/resize.svg';
import pieralbertoColonboAvatar from 'images/pages/variable-load/testimonials/pieralberto-colonbo.jpg';

import List from '../list';
import Section from '../section';

const items = [
];

const Efficiency = ({ title }) => (
  <Section className="efficiency" title={title}>
    <div className="prose-variable">
      <List items={items} />
    </div>
    <Testimonial
      text="When we were using MySQL in&nbsp;Azure, we had to manually upgrade the database during the&nbsp;days of peak traffic and downgrade later in the day, which&nbsp;caused a couple of minutes of downtime and a huge waste of&nbsp;time for the team."
      author={{
        name: 'Pieralberto Colombo',
        company: 'Recrowd',
        avatar: pieralbertoColonboAvatar,
      }}
      url={`${LINKS.blog}/`}
    />
  </Section>
);

Efficiency.propTypes = {
  title: PropTypes.shape({}),
};

export default Efficiency;
