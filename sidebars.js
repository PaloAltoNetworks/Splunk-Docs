/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docSideBar: [
    'home-doc',
    'webinars-videos',
    'faq',
    'troubleshooting',
    'support',
    'release-notes',
    {
      type: 'category',
      label: 'GETTING STARTED',
      collapsed: false,
      items: [
        'installation',
        {
          'Getting Data Into Splunk': [
            {
              type: 'doc',
              id: 'getting-data-in',
              label: 'Summary'
            },
            'firewalls-panorama',
            'cortex-xdr',
            'cortex-hec',
            'aperture',
            'autofocus-and-minemeld',
            'iot-security',
            'universal-forwarder',
          ],
        },
        'log-correlation',
      ],
    },
    {
      type: 'category',
      label: 'CONFIGURATION',
      collapsed: false,
      items: [
        'tune-or-reduce-firewall-logs',
        'enterprise-security',
        'lookups',
      ],
    },
    {
      type: 'category',
      label: 'ADVANCED FEATURES',
      collapsed: false,
      items: [
        'adaptive-response',
        'threat-intelligence',
        'external-search',
        'userid',
        'commands',
      ]
    }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
}
