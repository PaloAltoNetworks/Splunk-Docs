/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Palo Alto Networks App for Splunk',
  tagline: 'Advanced security reporting and analysis tool',
  url: 'https://splunk.paloaltonetworks.com',
  baseUrl: '/',
  favicon: 'img/PANW_Parent_Brand_Peelable_RGB_Red.png',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'PaloAltoNetworks', // Usually your GitHub org/user name.
  projectName: 'Splunk-Docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Palo Alto Networks App for Splunk',
      logo: {
        alt: 'Palo Alto Networks Logo',
        src: 'img/PANW_Parent_Brand_Peelable_RGB_Red.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'home-doc',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: 'https://splunkbase.splunk.com/app/491',
          label: 'Download App',
          position: 'left',
        },
        {
          to: 'https://splunkbase.splunk.com/app/2757',
          label: 'Download Add-on',
          position: 'left',
        },
        {
          to: '/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'Strata',
              href: 'https://strata.pan.dev',
            },
            {
              label: 'Cortex',
              href: 'https://cortex.pan.dev',
            },
            {
              label: 'Cortex XSOAR',
              href: 'https://xsoar.pan.dev',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://medium.com/palo-alto-networks-developer-blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Palo Alto Networks for developers',
        src: 'img/PANW_Parent_Brand_Primary_Logo_RGB_KO.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/PaloAltoNetworks/Splunk-Docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
