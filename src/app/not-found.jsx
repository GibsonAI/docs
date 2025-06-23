
import Layout from 'components/shared/layout';

export const metadata = {
  title: 'Page Not Found',
};

const NotFoundPage = () => (
  <Layout>
    <div className="flex grow items-center justify-center">
      <div className="text-center">
        <h1 className="font-title text-4xl font-bold">Page not found...</h1>
        <p className="mt-4 text-lg">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
