import PropTypes from 'prop-types';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import Logo from 'components/shared/logo';
import LINKS from 'constants/links';

import HeaderWrapper from './header-wrapper';
import MobileMenu from './mobile-menu';
import DocSidebar from 'components/pages/doc/sidebar';
import { DOCS_BASE_PATH } from 'constants/docs';

const Header = ({
  className = null,
  theme = null,
  isDarkTheme = false,
  isSticky = false,
  isStickyOverlay = false,
  withBorder = false,
  isClient = false,
  sidebar = [],
}) => (
  <>
    <HeaderWrapper
      className={className}
      isSticky={isSticky}
      isStickyOverlay={isStickyOverlay}
      theme={theme}
      withBorder={withBorder}
    >
      <div className="flex w-full items-center">
        <Container
          className="z-10 flex w-full items-center justify-between gap-x-8 lg:pr-36 md:pr-24"
          size="1408"
        >
          <div className="flex items-center gap-x-7">
            <Logo
              className="h-7"
              isDarkTheme={isDarkTheme}
              width={102}
              height={28}
              priority
              isHeader
            />
            <Link
              className="relative text-[15px] font-medium leading-tight tracking-extra-tight text-gray-new-60 transition-colors duration-200 before:absolute before:inset-y-0 before:-left-3.5 before:h-full before:w-px before:bg-gray-new-80 hover:text-black-new dark:text-gray-new-60 before:dark:bg-gray-new-20 dark:hover:text-white"
              to={LINKS.docs}
            >
              Docs
            </Link>
          </div>
        </Container>
      </div>
    </HeaderWrapper>
    <MobileMenu sidebar={sidebar} isDarkTheme={isDarkTheme} />
  </>
);

Header.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  isDarkTheme: PropTypes.bool,
  isSticky: PropTypes.bool,
  isStickyOverlay: PropTypes.bool,
  withBorder: PropTypes.bool,
  isClient: PropTypes.bool,
  sidebar: PropTypes.array,
};

export default Header;
