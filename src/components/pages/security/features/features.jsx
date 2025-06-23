import Container from 'components/shared/container';
import LINKS from 'constants/links';
import accessIcon from 'icons/security/access.svg';
import bugIcon from 'icons/security/bug.svg';
import chartsIcon from 'icons/security/charts.svg';
import checkPrivacyIcon from 'icons/security/check-privacy.svg';
import checkIcon from 'icons/security/check.svg';
import circuitIcon from 'icons/security/circuit.svg';
import crosshairIcon from 'icons/security/crosshair.svg';
import dataLockIcon from 'icons/security/data-lock.svg';
import dataReplaceIcon from 'icons/security/data-replace.svg';
import dataTransitIcon from 'icons/security/data-transit.svg';
import gearIcon from 'icons/security/gear.svg';
import graduationIcon from 'icons/security/graduation.svg';
import keyIcon from 'icons/security/key.svg';
import lockIcon from 'icons/security/lock.svg';
import mugIcon from 'icons/security/mug.svg';
import pcIcon from 'icons/security/pc.svg';
import policyIcon from 'icons/security/policy.svg';
import privacyCycleIcon from 'icons/security/privacy-cycle.svg';
import radarIcon from 'icons/security/radar.svg';
import restoreIcon from 'icons/security/restore.svg';
import searchIcon from 'icons/security/search.svg';
import segregationIcon from 'icons/security/segregation.svg';
import serverIcon from 'icons/security/server.svg';
import todoIcon from 'icons/security/todo.svg';
import userLockIcon from 'icons/security/user-lock.svg';
import userPrivacyIcon from 'icons/security/user-privacy.svg';
import warningIcon from 'icons/security/warning.svg';

import Slider from './slider';

const DATA = [

];

const Features = () => (
  <section className="features safe-paddings relative overflow-hidden pt-[168px] xl:pt-[136px] lg:pt-[120px] md:pt-[104px]">
    <Container className="relative z-10" size="960">
      <h2 className="sr-only">Features</h2>
      <div className="flex flex-col gap-[136px] xl:gap-[104px] lg:gap-16">
        {DATA.map((item, index) => (
          <Slider key={index} {...item} />
        ))}
      </div>
    </Container>
  </section>
);

export default Features;
