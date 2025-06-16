import { PropTypes } from 'prop-types';

import TopbarClient from './topbar-client';

const TOPBAR_API_URL = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/topbar`;

const Topbar = async ({ isDarkTheme }) => {
  try {
    const response = await fetch(TOPBAR_API_URL, {
      next: {
        revalidate: 600, // 10 minutes
      },
    });
    const topbar = await response.json();

    if (!topbar?.text || !topbar?.link) return null;

    // Override the link and text with the requested values
    const updatedTopbar = {
      ...topbar,
      text: 'Effortlessly create databases from any compatible IDE with the GibsonAI MCP Server!',
      link: {
        ...topbar.link,
        url: 'https://www.gibsonai.com/resources/the-gibson-mcp-server',
      },
    };

    return <TopbarClient {...updatedTopbar} isDarkTheme={isDarkTheme} />;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};

Topbar.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default Topbar;
