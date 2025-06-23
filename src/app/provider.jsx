'use client';

import { usePathname } from 'next/navigation';
import { ThemeProvider as PreferredProvider } from 'next-themes';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const whiteThemePages = [
  '/privacy-policy',
  '/terms-of-service',
  '/dpa',
  '/subprocessors',
  '/privacy-guide',
  '/cookie-policy',
  '/business-info',
];

const themesSupportPages = ['/docs'];

const ThemeProvider = ({ children }) => {
  const pathname = usePathname();
  const isWhiteThemePage = whiteThemePages.some((page) => pathname.startsWith(page));
  const hasThemesSupport = themesSupportPages.some((page) => pathname.startsWith(page));
  // Default to dark unless it's a whiteThemePage
  const forcedTheme = isWhiteThemePage ? 'light' : 'dark';

  return (
    <PreferredProvider
      attribute="class"
      // If themes are supported, default to dark, else force theme
      forcedTheme={hasThemesSupport ? undefined : forcedTheme}
      defaultTheme="dark"
      storageKey="gibson-theme"
      disableTransitionOnChange
    >
      {children}
    </PreferredProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
