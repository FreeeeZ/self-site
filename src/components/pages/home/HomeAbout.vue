<template>
  <div id="about" class="home-about">
    <div class="container">
      <h2 class="home-about__title">About me</h2>
      <p class="home-about__description">
        My name is Vladislav Shell, and I am a Web Developer with experience leading a development team, specialized in frontend.<br><br>
        I have come a long way from being a frontend developer intern to the position of Teamlead frontend developer. I have 5 years of software development experience. I have been leading the Frontend department. I solved the problems of the department and the company, drew up individual development plans, I have experience in developing assessment grades for frontend department employees, held meetings of the CAF (Club of Anonymous Frontenders) to exchange experiences and communicate on various topics related to the frontend community. I also have experience in interviewing and evaluating candidates.
      </p>
      <div class="home-about__bottom">
        <RouterLink to="/experience" class="button button-primary button-uppercase">
          See my experience
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'styles/home-about';
</style>
