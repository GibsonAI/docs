import Image from 'next/image';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import autoscaling from 'icons/ai/autoscaling.svg';
import cycle from 'icons/ai/cycle.svg';
import perfomance from 'icons/ai/perfomance.svg';
import pgvector from 'icons/ai/pgvector.svg';
import robot from 'icons/ai/robot.svg';
import search from 'icons/ai/search.svg';

const ITEMS = [

];

const StarterKit = () => (
  <section className="starter-kit safe-paddings mt-[200px] xl:mt-[176px] lg:mt-[152px] md:mt-[104px]">
    <Container className="!max-w-[640px] md:px-5 sm:!max-w-sm">
      <h2 className="font-title text-5xl font-medium leading-none tracking-extra-tight xl:text-[44px] lg:text-4xl md:text-[32px]">
        GibsonAI's AI Starter Kit
      </h2>
      <p className="mt-3 max-w-lg text-lg leading-snug tracking-extra-tight text-gray-new-70 lg:max-w-md lg:text-base">
        GibsonAI's AI Starter Kit offers resources, apps, and examples to kickstart GibsonAI as your vector
        database.
      </p>
      <Link
        className="mt-6 text-lg leading-none tracking-[-0.03em] lg:mt-5 lg:text-base"
        to={LINKS.docsAi}
        theme="white"
        withArrow
      >
        Learn more
        <span className="sr-only">about GibsonAI's AI Starter Kit</span>
      </Link>
      <ul className="mt-14 grid grid-cols-2 gap-x-[72px] gap-y-10 lg:mt-11 lg:gap-x-16 sm:grid-cols-1">
        {ITEMS.map(({ title, description, icon }) => (
          <li key={title}>
            <Image
              className="relative mb-[18px]"
              src={icon}
              alt=""
              width={22}
              height={22}
              quality={100}
            />
            <h3 className="text-xl font-semibold leading-dense tracking-tighter lg:text-lg">
              {title}
            </h3>
            <p
              className="mt-2 text-pretty text-lg tracking-extra-tight text-gray-new-70 lg:text-base"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default StarterKit;
