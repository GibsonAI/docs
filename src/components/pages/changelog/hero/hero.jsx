import clsx from 'clsx';
import PropTypes from 'prop-types';

const TITLE = 'Changelog';
const DESCRIPTION = 'The latest product updates from Gibson';

const Hero = ({ className = null }) => (
  <div className={clsx('mb-6 text-center sm:mb-7', className)}>
    <h1 className="text-[36px] font-semibold xl:text-3xl">{TITLE}</h1>
    <p className="mt-2.5">{DESCRIPTION}</p>
  </div>
);

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
