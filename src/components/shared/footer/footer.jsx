import clsx from 'clsx';
import PropTypes from 'prop-types';

import Container from 'components/shared/container';

const Footer = ({ theme = null }) => {
  const isDarkTheme = theme === 'dark';
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={clsx(
        'safe-paddings relative z-50 mt-auto dark:bg-black-pure dark:text-white',
        'before:absolute before:left-1/2 before:top-0 before:h-px before:w-full before:max-w-[1920px] before:-translate-x-1/2 before:opacity-10 before:[mask-image:linear-gradient(90deg,transparent_0%,black_40%,black_60%,transparent_100%);] dark:before:bg-white',
        isDarkTheme ? 'bg-black-pure before:bg-white' : 'bg-white before:bg-gray-new-10'
      )}
    >
      <Container
        className="flex justify-between gap-x-10 pb-[51px] pt-10 xl:pt-9 lg:pb-9 sm:py-8"
        size="1344"
      >
        <div className="flex w-full flex-col items-center justify-center gap-y-3">
          <p className="text-sm leading-none tracking-extra-tight text-gray-new-40">
            Copyright &copy; {currentYear} Gibson, Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
};

export default Footer;
