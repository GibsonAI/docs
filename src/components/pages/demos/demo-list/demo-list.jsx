import clsx from 'clsx';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import ChevronIcon from 'icons/chevron.inline.svg';

const items = [
];

const DemoList = () => (
  <section className="demo-list safe-paddings my-20 lg:my-16 md:my-10">
    <Container className="grid-gap-x grid grid-cols-12 lg:grid-cols-1" size="medium">
      <ul className="col-span-10 col-start-2 flex flex-col gap-y-20 lg:col-span-full lg:col-start-1 lg:gap-y-16 md:gap-y-10">
        {items.map(({ category, categoryTextColor, items }, index) => (
          <li
            className="mx-auto w-full max-w-[1048px] rounded-[10px] bg-black-new p-10 lg:p-8 md:px-6"
            key={index}
          >
            <h2
              className={clsx(
                'flex items-center text-xs font-semibold uppercase leading-none tracking-extra-tight',
                categoryTextColor
              )}
            >
              <span>{category}</span>
              <span className="ml-2 h-px grow bg-gray-new-15" />
            </h2>
            <ul className="mt-7">
              {items.map(({ title, description, sourceLink, demoLink }, index) => (
                <li
                  className="mt-6 flex items-center justify-between border-t border-gray-new-15 border-opacity-80 pt-6 first:mt-0 first:border-t-0 first:pt-0 lg:flex-col lg:items-start lg:gap-y-8 md:mt-4 md:gap-y-6 md:pt-4"
                  key={index}
                >
                  <div className="max-w-[591px] xl:max-w-[500px] lg:max-w-full">
                    <h3 className="max-w-[510px] text-2xl font-medium leading-tight -tracking-[0.05em] lg:text-xl">
                      {title}
                    </h3>
                    <p
                      className="with-link-primary mt-3 font-light leading-snug tracking-snug text-gray-new-60"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                  <div className="flex items-center justify-start gap-x-4 text-[15px] leading-none">
                    {demoLink !== '#' && (
                      <Link
                        className="flex items-center rounded-full bg-gray-new-15 bg-opacity-80 px-5 py-3 text-[15px] font-medium leading-none transition-colors duration-200 hover:bg-gray-new-20"
                        to={demoLink}
                        target={demoLink.startsWith('http') ? '_blank' : '_self'}
                        rel={demoLink.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        <ChevronIcon className="mr-2" />
                        Live demo
                      </Link>
                    )}
                    {sourceLink !== '#' && (
                      <Link
                        className="text-[15px] leading-none"
                        to={sourceLink}
                        target="_blank"
                        theme="gray-80"
                        rel="noopener noreferrer"
                      >
                        Source
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default DemoList;
