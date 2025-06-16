import AiAgentsGradientIcon from 'icons/header/ai-agent-gradient.inline.svg';
import AiAgentsIcon from 'icons/header/ai-agent.inline.svg';
import AiGradientIcon from 'icons/header/ai-gradient.inline.svg';
import AiIcon from 'icons/header/ai.inline.svg';
import ApiGradientIcon from 'icons/header/api-gradient.inline.svg';
import ApiIcon from 'icons/header/api.inline.svg';
import AuthGradientIcon from 'icons/header/auth-gradient.inline.svg';
import AuthIcon from 'icons/header/auth.inline.svg';
import AutoscalingGradientIcon from 'icons/header/autoscaling-gradient.inline.svg';
import AutoscalingIcon from 'icons/header/autoscaling.inline.svg';
import BlogIcon from 'icons/header/blog.inline.svg';
import BranchingGradientIcon from 'icons/header/branching-gradient.inline.svg';
import BranchingIcon from 'icons/header/branching.inline.svg';
import BuildingGradientIcon from 'icons/header/building-gradient.inline.svg';
import BuildingIcon from 'icons/header/building.inline.svg';
import CareerIcon from 'icons/header/career.inline.svg';
import ChatIcon from 'icons/header/chat.inline.svg';
import CloudGradientIcon from 'icons/header/cloud-gradient.inline.svg';
import CloudIcon from 'icons/header/cloud.inline.svg';
import ConnectionGradientIcon from 'icons/header/connection-gradient.inline.svg';
import ConnectionIcon from 'icons/header/connection.inline.svg';
import DatabaseGradientIcon from 'icons/header/database-gradient.inline.svg';
import DatabaseIcon from 'icons/header/database.inline.svg';
import FolderGradientIcon from 'icons/header/folder-gradient.inline.svg';
import FolderIcon from 'icons/header/folder.inline.svg';
import GearGradientIcon from 'icons/header/gear-gradient.inline.svg';
import GearIcon from 'icons/header/gear.inline.svg';
import MigrationGradientIcon from 'icons/header/migration-gradient.inline.svg';
import MigrationIcon from 'icons/header/migration.inline.svg';
import PeopleIcon from 'icons/header/people.inline.svg';
import RestoreGradientIcon from 'icons/header/restore-gradient.inline.svg';
import RestoreIcon from 'icons/header/restore.inline.svg';
import SaasGradientIcon from 'icons/header/saas-gradient.inline.svg';
import SaasIcon from 'icons/header/saas.inline.svg';
import SearchGradientIcon from 'icons/header/search-gradient.inline.svg';
import SearchIcon from 'icons/header/search.inline.svg';
import SecurityIcon from 'icons/header/security.inline.svg';
import ServerlessGradientIcon from 'icons/header/serverless-gradient.inline.svg';
import ServerlessIcon from 'icons/header/serverless.inline.svg';
import StarGradientIcon from 'icons/header/star-gradient.inline.svg';
import StarIcon from 'icons/header/star.inline.svg';

import LINKS from './links';

export default {
  header: [
    {
      text: 'Docs',
      to: LINKS.docs,
    },
    {
      text: 'Pricing',
      to: LINKS.pricing,
    },
    {
      text: 'Company',
      sections: [
        {
          items: [
            {
              icon: BlogIcon,
              title: 'Blog',
              to: LINKS.blog,
            },
            {
              icon: PeopleIcon,
              title: 'About us',
              to: LINKS.aboutUs,
            },
            {
              icon: CareerIcon,
              title: 'Careers',
              to: LINKS.careers,
            },
            {
              icon: ChatIcon,
              title: 'Contact',
              to: LINKS.contactSales,
            },
            {
              icon: SecurityIcon,
              title: 'Security',
              to: LINKS.security,
            },
          ],
        },
      ],
    },
  ],
  footer: [
    {
      heading: 'Company',
      items: [
        // {
        //   text: 'About',
        //   to: LINKS.aboutUs,
        // },
        // {
        //   text: 'Blog',
        //   to: LINKS.blog,
        // },
        {
          text: 'Careers',
          to: LINKS.careers,
        },
        {
          text: 'Contact',
          to: LINKS.contactSales,
        },
        // {
        //   text: 'Partners',
        //   to: LINKS.partners,
        // },
        {
          text: 'Privacy',
          to: LINKS.security,
        },
        // {
        //   text: 'Legal',
        //   links: [
        //     {
        //       text: 'Privacy Policy',
        //       to: LINKS.privacy,
        //     },
        //     {
        //       text: 'Terms of Service',
        //       to: LINKS.terms,
        //     },
        //     {
        //       text: 'DPA',
        //       to: LINKS.dpa,
        //     },
        //     {
        //       text: 'Subprocessors List',
        //       to: LINKS.subprocessors,
        //     },
        //     {
        //       text: 'Privacy Guide',
        //       to: LINKS.privacyGuide,
        //     },
        //     {
        //       text: 'Cookie Policy',
        //       to: LINKS.cookiePolicy,
        //     },
        //     {
        //       text: 'Business Information',
        //       to: LINKS.businessInformation,
        //     },
        //   ],
        // },
      ],
    },
    // {
    //   heading: 'Resources',
    //   items: [
    //     {
    //       text: 'Docs',
    //       to: LINKS.docs,
    //     },
    //     {
    //       text: 'Changelog',
    //       to: LINKS.changelog,
    //     },
    //     {
    //       text: 'Support',
    //       to: LINKS.support,
    //     },
    //     {
    //       text: 'Community Guides',
    //       to: LINKS.guides,
    //     },
    //     {
    //       text: 'PostgreSQL Tutorial',
    //       to: LINKS.postgresqltutorial,
    //     },
    //     {
    //       text: 'Creators',
    //       to: LINKS.creators,
    //     },
    //   ],
    // },
    {
      heading: 'Social',
      items: [
        {
          text: 'Discord',
          to: LINKS.discord,
          icon: 'discord-icon',
        },
        {
          text: 'GitHub',
          to: LINKS.github,
          icon: 'github-icon',
        },
        {
          text: 'x.com',
          to: LINKS.twitter,
          icon: 'x-icon',
        },
        {
          text: 'LinkedIn',
          to: LINKS.linkedin,
          icon: 'linkedin-icon',
        },
        {
          text: 'YouTube',
          to: LINKS.youtube,
          icon: 'youtube-icon',
        },
      ],
    }
  ],
};
