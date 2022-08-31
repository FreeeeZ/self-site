<template>
  <div class="experience-list">
    <div class="container">
      <div class="experience-list__items">
        <div
          class="experience-list__items-point"
          v-for="(company, index) in experienceArray"
          :key="index"
        >
          <div class="list-item__info">
            <p class="list-item__info-years">
              {{company?.yearInterval}}
            </p>
            <p class="list-item__info-name">
              {{company?.name}}
            </p>
            <p class="list-item__info-position">
              {{company?.position}}
            </p>
            <p class="list-item__info-description" v-html="company?.description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const experienceArray = [
  {
    yearInterval: 'July 2017 — March 2019',
    name: 'GEOS LLC',
    position: 'Frontend Developer',
    description: '— Development of internal resources (websites) of the company using CMS technologies: WordPress, Joomla, Tilda, Opencart.<br>' +
      '— Development landing pages for projects pre-sale.<br>' +
      '— Development projects of company on technologies: Yii2 (PHP), JavaScript, jQuery, CSS, SASS, Bootstrap (2, 3).<br>' +
      '— Markup of cross-browser and adaptive interfaces.<br>' +
      '— Work with designs/layouts.<br>',
  },
  {
    yearInterval: 'March 2019 — June 2022',
    name: 'SmartWorld LLC',
    position: 'Frontend Supervisor',
    description: '— Development projects of company on technologies: Yii2 (PHP), React.js, Vue.js (Nuxt.js), JavaScript, TypeScript, jQuery, CSS, SASS, Bootstrap (3, 4, 5), Material UI, Vuetify.<br>' +
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
    yearInterval: 'July 2022 — Now',
    name: 'red_mad_robot',
    position: 'Frontend Developer',
    description: '— NFT marketplace for the international market. Product development in a large distributed team, preparing the system for release, project support.<br>' +
      '— Development of the frontend department in the company.<br>' +
      '— More will be added little bit later...',
  },
]
</script>

<style lang="scss" scoped>
@use './styles/experience-list.scss';
</style>
