import Container from 'components/shared/container/container';
import CCPALogo from 'images/pages/security/ccpa-logo.png';
import GDPRLogo from 'images/pages/security/gdpr-logo.png';
import HIPAALogo from 'images/pages/security/hipaa-logo.png';

import Cards from '../cards';

const CARDS = [

];

const Privacy = () => (
  <section className="compliance safe-paddings relative pt-40 xl:pt-[136px] lg:pt-[120px] md:pt-[104px]">
    <Container className="relative z-10" size="960">
      <h2 className="text-center font-title text-[44px] font-medium leading-[0.9] tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
        Privacy & Regulations
      </h2>
      <Cards data={CARDS} />
    </Container>
  </section>
);

export default Privacy;
