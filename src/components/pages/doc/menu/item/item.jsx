import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

import Link from 'components/shared/link';
import ChevronIcon from 'icons/chevron-down.inline.svg'; // Add this import

import Tag from '../../tag';
import Icon from '../icon';

const Item = ({
  basePath,
  title,
  slug = null,
  icon = null,
  tag = null,
  ariaLabel = null,
  items = null,
  activeMenuList,
  setActiveMenuList,
  closeMobileMenu = null,
  isExpanded = false,
  root,
  children,
}) => {
  const pathname = usePathname();
  const currentSlug = pathname.replace(basePath, '');

  const externalSlug = slug?.startsWith('http') ? slug : null;
  const websiteSlug = slug?.startsWith('/') && `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}${slug}`;
  const docSlug = root ? slug : `${basePath}${slug}/`;

  const LinkTag = slug ? Link : 'button';

  // Track open/close state for collapsible menu items
  const hasSubsections = Array.isArray(items) && items.length > 0;

  // Determine if this item is expanded based on activeMenuList
  const expanded =
    hasSubsections &&
    activeMenuList.some((item) =>
      slug ? item.slug === slug : item.title === title
    );

  const handleClick = () => {
    if (items?.length) {
      const isActive = activeMenuList.some((item) =>
        slug ? item.slug === slug : item.title === title
      );
      if (!isActive) {
        // If this is a top-level menu (depth 0), close all others
        if (!root) {
          setActiveMenuList([{ title, slug }]);
        } else {
          setActiveMenuList((prevList) => [...prevList, { title, slug }]);
        }
      } else {
        // If already expanded and root, collapse it
        if (!root) {
          setActiveMenuList([]);
        } else {
          setActiveMenuList((prevList) =>
            prevList.filter((item) =>
              slug ? item.slug !== slug : item.title !== title
            )
          );
        }
      }
      return;
    }
    if (slug) {
      // Collapse all accordions immediately; keep only the root (HOME) menu so sidebar is still rendered.
      setActiveMenuList((prev) => (prev.length ? [prev[0]] : []));
      if (closeMobileMenu) closeMobileMenu();
    }
  };

  return (
    <li className="group/item flex flex-col">
      <div className="flex items-center">
        <LinkTag
          className={clsx(
            'group flex w-full gap-2 py-1.5 text-left text-sm leading-tight tracking-extra-tight transition-colors duration-200 md:py-[7px]',
            currentSlug === slug
              ? 'font-medium text-black-new dark:text-white'
              : 'font-normal text-gray-new-40 hover:text-black-new dark:text-gray-new-80 dark:hover:text-white'
          )}
          type={slug ? undefined : 'button'}
          to={slug ? externalSlug || websiteSlug || docSlug : undefined}
          target={externalSlug || websiteSlug ? '_blank' : '_self'}
          icon={externalSlug && 'external'}
          onClick={handleClick}
        >
          {ariaLabel && <span className="sr-only">{ariaLabel}</span>}
          {icon && <Icon title={icon} className="size-4.5 shrink-0" />}
          <span className="text-pretty" aria-hidden={!!ariaLabel}>
            {title}&nbsp;
            {tag && <Tag className="relative -top-px ml-1 inline-block" label={tag} size="sm" />}
          </span>
        </LinkTag>
        {hasSubsections && (
          <button
            type="button"
            className={clsx(
              'ml-auto flex items-center px-2 py-1 transition-transform duration-200',
              expanded ? 'rotate-90' : 'rotate-0'
            )}
            tabIndex={0}
            onClick={handleClick}
          >
            <ChevronIcon className="w-3 h-3 text-gray-new-40 dark:text-gray-new-80 -rotate-90" />
          </button>
        )}
      </div>
      {children}
    </li>
  );
};

Item.propTypes = {
  basePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
  icon: PropTypes.string,
  tag: PropTypes.string,
  ariaLabel: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string,
      tag: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.any),
      ariaLabel: PropTypes.string,
    })
  ),
  activeMenuList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string,
    })
  ).isRequired,
  setActiveMenuList: PropTypes.func.isRequired,
  closeMobileMenu: PropTypes.func,
  root: PropTypes.bool,
  isExpanded: PropTypes.bool,
  children: PropTypes.node,
};

export default Item;
