'use client';

import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import PropTypes from 'prop-types';

import Sidebar from 'components/pages/doc/sidebar';
import Button from 'components/shared/button';
import { DOCS_BASE_PATH } from 'constants/docs';
import LINKS from 'constants/links';
import useMobileMenu from 'hooks/use-mobile-menu';

import Burger from '../burger';

const ANIMATION_DURATION = 0.2;

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: { duration: ANIMATION_DURATION },
    transitionEnd: { zIndex: -1 },
  },
  to: {
    zIndex: 39,
    opacity: 1,
    translateY: 0,
    transition: { duration: ANIMATION_DURATION },
  },
};

const MobileMenu = ({ sidebar, isDarkTheme = false, isDocPage = false, docPageType = '' }) => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <>
      {/* Burger button visible only on mobile (<= lg breakpoint in this project) */}
      <div className="absolute right-8 top-5 z-40 hidden md:flex gap-x-3 gap-x-4 md:right-4">
        <Burger
          className={clsx(
            'relative flex',
            isDarkTheme ? 'text-white' : 'text-black dark:text-white'
          )}
          isToggled={isMobileMenuOpen}
          isNewDesign
          onClick={toggleMobileMenu}
        />
      </div>

      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.nav
              className={clsx(
                'safe-paddings fixed inset-0 z-[50] flex-col justify-between dark:bg-black-pure hidden md:flex',
                isDarkTheme ? 'bg-black-pure' : 'bg-white'
              )}
              initial="from"
              animate="to"
              exit="from"
              variants={variants}
            >
              <div className="relative h-full pb-[108px] pt-[102px] sm:pb-[158px]">
                <ul className="no-scrollbars flex h-full flex-col overflow-y-auto px-8 md:px-5">
                  <Sidebar
                    className="w-full"
                    sidebar={sidebar}
                    slug=""
                    basePath={DOCS_BASE_PATH}
                    isDocPage={isDocPage}
                    docPageType={docPageType}
                  />
                </ul>

                <div
                  className={clsx(
                    'absolute inset-x-0 bottom-0 grid grid-cols-2 gap-x-5 gap-y-3.5 p-8 dark:bg-black-pure md:px-5 sm:grid-cols-1 sm:py-7',
                    isDarkTheme ? 'bg-black-pure' : 'bg-white'
                  )}
                >
                  <Button
                    className={clsx(
                      'h-11 items-center justify-center text-[15px] !font-semibold tracking-tight dark:!border-gray-new-15 dark:!text-white',
                      !isDarkTheme && '!border-gray-new-90 !text-black-new'
                    )}
                    to={LINKS.login}
                    theme="gray-15-outline"
                    tagName="MobileMenu"
                  >
                    Log In
                  </Button>
                  <Button
                    className="h-11 items-center text-[15px] !font-semibold tracking-tight"
                    to={LINKS.signup}
                    theme="primary"
                    tagName="MobileMenu"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </m.nav>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  );
};

MobileMenu.propTypes = {
  sidebar: PropTypes.array,
  isDarkTheme: PropTypes.bool,
  isDocPage: PropTypes.bool,
  docPageType: PropTypes.string,
};

export default MobileMenu;