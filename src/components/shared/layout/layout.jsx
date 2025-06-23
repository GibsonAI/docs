import clsx from 'clsx';
import PropTypes from 'prop-types';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

const Layout = ({
  className = null,
  headerClassName = null,
  headerTheme = null,
  footerTheme = null,
  withOverflowHidden = false,
  children,
  headerWithBorder = false,
  isHeaderSticky = false,
  isHeaderStickyOverlay = false,
  isClient = false,
  sidebar = null,
}) => (
  <>
    {/* 36px is the height of the topbar */}
    <div className="relative flex min-h-[calc(100vh-36px)] flex-col pt-safe">
      <Header
        sidebar={sidebar}
        className={headerClassName}
        theme={headerTheme}
        isDarkTheme={headerTheme === 'dark'}
        isSticky={isHeaderSticky}
        isStickyOverlay={isHeaderStickyOverlay}
        withBorder={headerWithBorder}
        isClient={isClient}
      />
      <main
        className={clsx(withOverflowHidden && 'overflow-hidden', 'flex flex-1 flex-col', className)}
      >
        {children}
      </main>
      <Footer theme={footerTheme} />
    </div>
  </>
);

Layout.propTypes = {
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  headerTheme: PropTypes.oneOf(['light', 'dark']),
  footerTheme: PropTypes.oneOf(['light', 'dark']),
  withOverflowHidden: PropTypes.bool,
  children: PropTypes.node.isRequired,
  isHeaderSticky: PropTypes.bool,
  isHeaderStickyOverlay: PropTypes.bool,
  headerWithBorder: PropTypes.bool,
  isClient: PropTypes.bool,
  sidebar: PropTypes.array,
};

export default Layout;
