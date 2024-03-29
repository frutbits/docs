const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FrutBits Docs',
  url: 'https://docs.frutbits.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'frutbits',
  projectName: 'documentation',
  plugins: [
    [
			'docusaurus-plugin-typedoc',
			{
				id: 'Sapphire-Plugins',
				entryPointStrategy: 'resolve',
				entryPoints: [
          './projects/sapphire-plugins/packages/command-context/src/index.ts',
          './projects/sapphire-plugins/packages/pino-logger/src/index.ts'
				],
				tsconfig: './tsconfig.typedoc.json',
				readme: 'none',
				out: 'documentation/sapphire-plugins',
				plugin: ['typedoc-plugin-mdn-links', 'typedoc-plugin-djs-links'],
				sidebar: {
					categoryLabel: 'Sapphire Plugins',
					position: 2
				}
			}
		],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/frutbits/docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'FrutBits',
        logo: {
          alt: 'FrutBits Logo',
          src: 'img/logo.png',
        },
        items: [
          {
						to: '/',
						label: 'Home',
						position: 'left',
						activeBaseRegex: '^/$'
					},
					{
						to: 'docs/General/Welcome',
						position: 'left',
						label: 'Documentation',
						activeBaseRegex: '^/docs/(General|Documentation)/.+$'
					},
          {
            href: 'https://github.com/frutbits/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/general/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://frutbits.org/discord',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/frutbits',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FrutBits Organization`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
