import clsx from 'clsx';
import PropTypes from 'prop-types';

import Link from 'components/shared/link';
import LINKS from 'constants/links';

const navLinks = [
  { text: 'Docs', to: LINKS.docs },
  { text: 'Changelog', to: LINKS.changelog },
  { text: 'Support', to: LINKS.support },
  { text: 'GitHub', to: LINKS.github, target: '_blank' },
];

const Navigation = ({ isDarkTheme }) => (
  <nav>
    <ul className="flex items-center gap-x-10 xl:gap-x-8 lg:hidden [@media(max-width:1070px)]:gap-x-6">
      {navLinks.map(({ to, text, target }, index) => (
        <li key={index}>
          <Link
            className={clsx(
              'flex items-center gap-x-1 whitespace-pre text-sm font-normal',
              isDarkTheme ? 'text-white' : 'text-black dark:text-white'
            )}
            to={to}
            target={target}
            theme={isDarkTheme ? 'white' : 'black'}
            tagName="Navigation"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default Navigation;
