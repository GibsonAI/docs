import closeIcon from 'icons/close.svg';

const baseSettings = {
  apiKey: process.env.INKEEP_INTEGRATION_API_KEY,
  integrationId: process.env.INKEEP_INTEGRATION_ID,
  organizationId: process.env.INKEEP_ORGANIZATION_ID,
  primaryBrandColor: '#00E599',
  organizationDisplayName: 'GibsonAI',
  customIcons: {
    close: { custom: closeIcon },
  },
  customCardSettings: [
    {
      filters: {},
      searchTabLabel: 'GibsonAI Docs',
    },
  ],
};

const searchSettings = {
  searchMode: 'KEYWORD',
  placeholder: 'Search',
};

const aiChatSettings = {
  botName: 'GibsonAI AI',
  placeholder: 'Ask anything...',
  quickQuestions: [
    'What’s Neon?',
    'How do I sign up for Neon?',
    'How to create a project?',
    'How to get started with the Neon API?',
  ],
  botAvatarSrcUrl: '/inkeep/images/bot.svg',
  botAvatarDarkSrcUrl: '/inkeep/images/bot-dark.svg',
  userAvatarSrcUrl: '/inkeep/images/user.svg',
  userAvatarDarkSrcUrl: '/inkeep/images/user-dark.svg',
  isChatSharingEnabled: true,
  shareChatUrlBasePath: 'https://gibsonai.com',
  getHelpCallToActions: [
    {
      type: 'OPEN_LINK',
      icon: { builtIn: 'FaDiscord' },
      name: 'Discord',
      url: 'https://discord.gg/92vNTzKDGp',
    },
    {
      type: 'OPEN_LINK',
      icon: { builtIn: 'IoChatbubblesOutline' },
      name: 'GibsonAI Support',
      url: 'https://console.neon.com/app/projects?modal=support',
    },
  ],
};

export { baseSettings, searchSettings, aiChatSettings };
