export default function useExperienceList () {
  const experienceArray = [
    {
      yearInterval: 'July 2017 — March 2019',
      name: 'GEOS LLC',
      position: 'Frontend Developer',
      description:
        '— Development of internal resources (websites) of the company using CMS technologies: WordPress, Joomla, Tilda, Opencart.<br>' +
        '— Development landing pages for projects pre-sale.<br>' +
        '— Development projects of company on technologies: Yii2 (PHP), JavaScript, jQuery, CSS, SASS, Bootstrap (2, 3).<br>' +
        '— Markup of cross-browser and adaptive interfaces.<br>' +
        '— Work with designs/layouts.<br>',
    },
    {
      yearInterval: 'March 2019 — June 2022',
      name: 'SmartWorld LLC',
      position: 'Frontend Supervisor',
      description:
        '— Development projects of company on technologies: Yii2 (PHP), React.js, Vue.js (Nuxt.js), JavaScript, TypeScript, jQuery, CSS, SASS, Bootstrap (3, 4, 5), Material UI, Vuetify.<br>' +
        '— Web3 (work with smart contracts, ABI, connection of software wallets).<br>' +
        '— Technical audit and optimization of web applications (Google Lighthouse).<br>' +
        '— SEO optimization of web-projects.<br>' +
        '— Setting up project builders Webpack, Gulp.<br>' +
        '— Creation and support of extensions for browsers (Chrome extensions).<br>' +
        '— Conducting Code Review.<br>' +
        '— Writing own npm packages.<br>' +
        '— Working with the marketing department on improvements to the company\'s corporate websites.<br>' +
        '— Working with designs/layouts, as well as interacting with designers to implement layouts.<br><br>' +
        'Lead tasks:<br>' +
        '— Drawing up individual development plans for employees.' +
        '— Drawing up and updating department grades.' +
        '— Development of the frontend department in the company.<br>' +
        '— Conducting reports on Frontend topics.<br>' +
        '— One-to-one communication with employees.<br>' +
        '— Working with conflict situations in a team.<br>' +
        '— Organization of activities and events in the department.<br>' +
        '— Control and updating of documentation for the department in Atlassian Confluence.<br>' +
        '— Holding meetings of the CAF (Club of Anonymous Frontenders) to exchange experiences and communicate on various topics related to the frontend community.<br>' +
        '— Conducting interviews for recruitment of staff in the frontend department.<br>',
    },
    {
      yearInterval: 'July 2022 — October 2022',
      name: 'red_mad_robot',
      position: 'Frontend Developer',
      description:
        '— Participation in development of the decentralized NFT platform (Markup, API integration, Implement solidity contracts, Write unit tests with Vitest/Jest).<br>' +
        '— Speeches and lectures with presentations for frontend developers of company.<br>' +
        '— Participation in frontend developers code review, discussion and adoption of architectural decisions.<br>' +
        '— Optimization to improve system performance and improve the quality of UI interaction.<br>' +
        '— Technical audits of the frontend part of applications.'
    },
    {
      yearInterval: 'October 2022 — Now',
      name: 'red_mad_robot',
      position: 'Team Lead',
      description:
        'More info will be added little bit later...'
    },
  ];

  return {
    experienceArray
  };
}
