'use client';

import PropTypes from 'prop-types';
import { useEffect } from 'react';

import Layout from 'components/shared/layout';

/*
  NOTE:
  This page is needed to handle unexpected errors and display fallback UI.
*/
const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <>
      <title>Error | GibsonAI Docs</title>
      <Layout isClient>
        <div className="flex grow items-center justify-center">
          <div className="text-center">
            <h1 className="font-title text-4xl font-bold">Something went wrong...</h1>
            <p className="mt-4 text-lg">
              Sorry, the page you are looking for is broken. Please try again later, we&apos;ll fix
              it soon!
            </p>
            <button
              className="mt-4 rounded bg-green-400 px-4 py-2 font-bold text-white hover:bg-green-500"
              type="button"
              onClick={reset}
            >
              Try again
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.object,
  reset: PropTypes.func,
};

export default ErrorPage;
