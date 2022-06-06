<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <h2 :class="$style.sliderTitle" class="text-sm-center">Featured by:</h2>
      <carousel :class="$style.sliderContainer"
                autoplay
                autoWidth
                :nav="false"
                :dots="false"
                :autoplayTimeout="3000"
                :margin="60">
        <template v-for="feature in listFeature">
          <div :key="feature.img" :class="$style.sliderItem">
            <img height="48" :src="feature.img" alt="">
          </div>
        </template>

        <template #prev>
          <span class="carousel-control-prev-icon" :class="$style.prevButton" aria-hidden="true"></span>
        </template>
        <template #next>
          <span class="carousel-control-next-icon" aria-hidden="true" :class="$style.nextButton"></span>
        </template>

      </carousel>
      <div :class="$style.seeItContainer" class="row">
        <div class="col-sm-6">
          <h2>See it in action</h2>
          <h5 :class="$style.actionText">Request a free demo today and stay ahead of <br> the cyberthreat evolution.
          </h5>
          <p-button text="Request a Demo" @click="onClick"/>
        </div>
        <div class="col-sm-6 px-0" :class="$style.dashboardImg">
          <img src="@/assets/images/home/dashboard-lg.png" height="333" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.nextButton
  position absolute
  top 50%
  right -30px
  transform translateY(-50%)

.prevButton
  position absolute
  left -30px
  top 50%
  transform translateY(-50%)

.container
  background-image url("@/assets/images/home/feature-home.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

.bodyContainer
  padding 90px 60px 0

  .sliderTitle
    margin-bottom 65px

.sliderItem
  padding 10px 22px
  background-color: white
  border-radius 8px

.sliderContainer
  margin-bottom 115px
  position relative

.seeItContainer
  padding 84px 0 0 60px
  border-top-left-radius 10px
  border-top-right-radius 10px
  background-image url("@/assets/images/home/see-it-in-action.png")
  background-position center
  background-repeat no-repeat
  background-size cover
  overflow hidden !important

.actionText
  margin-top 19px
  margin-bottom: 39px;
  font-weight 500

.dashboardImg
  border-top-left-radius 12px
  border-top 15px solid #ffffff33
  border-left 15px solid #ffffff33

  img
    border-top-left-radius 12px
    margin-right 10px
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

const carousel = require('vue-owl-carousel');

@Component({
  components: {
    PButton,
    carousel,
  }
})
export default class HomeSlider extends Vue {

  get listFeature() {
    return [
      {img: require('@/assets/images/home/gartner-peerinsights.png'),},
      {img: require('@/assets/images/home/the-business-time.png'),},
      {img: require('@/assets/images/home/yahoo.png'),},
      {img: require('@/assets/images/home/asiaone.png'),},
      {img: require('@/assets/images/home/kaspersky.png'),},
      {img: require('@/assets/images/home/NCSC.png'),},
      {img: require('@/assets/images/home/channelnewsasia.png'),},
    ];
  }

  onClick() {
    this.$router.push({path: '/contact'});
  }

}
</script>
