import 'styles/globals.css';

import Script from 'next/script';

import { ActiveLabelProvider } from 'components/pages/doc/code-tabs/CodeTabsContext';

import ModeToggler from 'components/pages/doc/mode-toggler';
import Sidebar from 'components/pages/doc/sidebar';
import Container from 'components/shared/container';
import Layout from 'components/shared/layout';
import { getSidebar } from 'utils/api-docs';
import { DOCS_BASE_PATH } from 'constants/docs';

import inter from './fonts';
import ThemeProvider from './provider';


export const preferredRegion = 'edge';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};

// eslint-disable-next-line react/prop-types
const RootLayout = async ({ children }) => {
  // Build docs sidebar structure at build-time. This is synchronous and fast
  // because `getSidebar` only reads Markdown front-matter.
  const sidebar = getSidebar();

  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://console.gibsonai.com" />
      </head>
      <body>
        <ThemeProvider>
          {/* Shared site chrome – header, footer, theme switching etc. */}
          <Layout headerTheme="dark" footerTheme="dark" isHeaderSticky sidebar={sidebar}>
            <Container
              size="md"
              className="grid grid-cols-[16rem,1fr] gap-x-6 pt-10 md:block md:pt-6"
            >
              {/* Desktop sidebar */}
              <Sidebar
                className="block md:hidden flex-none w-[16rem] h-[calc(100vh-80px)] sticky top-20 overflow-y-auto"
                sidebar={sidebar}
                slug=""
                basePath={DOCS_BASE_PATH}
              />

              {/* Main column */}
              <div className="min-w-0">
                {children}
              </div>
            </Container>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
