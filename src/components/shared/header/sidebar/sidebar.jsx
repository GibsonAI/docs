import clsx from 'clsx';
import PropTypes from 'prop-types';




import Link from 'components/shared/link';
import LINKS from 'constants/links';
import DiscordIcon from 'icons/discord.inline.svg';


const themePropTypes = {
  isDarkTheme: PropTypes.bool,
};



const Sidebar = ({ isDarkTheme, isClient, className }) => (
  <div className={clsx('flex items-center gap-x-6 lg:hidden', className)}>
    <Link
      className={clsx(
        'flex items-center gap-1.5 transition-colors duration-200',
        isDarkTheme
          ? 'text-gray-new-90 hover:text-green-45'
          : 'text-gray-new-8 hover:text-green-45 dark:text-gray-new-90 dark:hover:text-green-45'
      )}
      to={LINKS.discord}
      target="_blank"
      rel="noopener noreferrer"
      tagName="Header"
    >
      <DiscordIcon width={18} height={18} />
      <span className="text-sm leading-none tracking-extra-tight">Discord</span>
    </Link>
    
    
  </div>
);

Sidebar.propTypes = {
  ...themePropTypes,
  isClient: PropTypes.bool,
  className: PropTypes.string,
};

export default Sidebar;
