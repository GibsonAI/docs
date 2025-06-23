import LINKS from 'constants/links';

// pagesToShow - array of page titles and sections where the modal should be shown
// 'Gibson Docs' - show modal on the introduction page
const MODALS = [
  {
    id: 'migrate',
    pagesToShow: ['Migrate to Gibson'],
    title: 'Migrating to Gibson?',
    description: 'Our team can help minimize downtime.',
    link: {
      title: 'Get migration assistance',
      url: LINKS.migrationAssistance,
    },
  },
  {
    id: 'support',
    pagesToShow: ['Support'],
    title: 'Need help now?',
    description: 'Please reach out to our Support team!',
    link: {
      title: 'Get support',
      url: LINKS.consoleSupport,
    },
  },
  {
    id: 'slack',
    pagesToShow: ['GibsonAI Docs'],
    title: 'Manage Gibson in Slack',
    description: 'Get alerts, track usage, and manage your team right from Slack',
    link: {
      title: 'Get the Gibson App for Slack',
      url: '/docs/manage/slack-app',
    },
  },
  {
    id: 'slack',
    pagesToShow: ['Organizations'],
    title: 'Collaborate in Slack',
    description: 'Invite teammates to your Gibson organization right from Slack',
    link: {
      title: 'Get the Gibson App for Slack',
      url: '/docs/manage/slack-app',
    },
  },
  {
    id: 'slack',
    pagesToShow: ['Plans and billing'],
    title: 'Track usage in Slack',
    description: 'Check project usage and get consumption alerts',
    link: {
      title: 'Get the Gibson App for Slack',
      url: '/docs/manage/slack-app',
    },
  },
];

export default MODALS;
