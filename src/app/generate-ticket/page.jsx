import GithubRegistrationStep from 'components/pages/deploy/github-registration-step';
import Container from 'components/shared/container';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.generateTicket);

const GenerateTicketPage = () => (
  <div style={{ padding: 40, textAlign: 'center', color: '#c0f910', fontWeight: 600 }}>
    Ticket generation is disabled for this build.
  </div>
);

export default GenerateTicketPage;
