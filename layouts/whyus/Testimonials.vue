<template>
  <div class="container-fluid p-0">
    <h1 class="mb-4">Testimonials</h1>
    <carousel class="col-12"
              :nav="false"
              autoplay
              :items="3"
              :class="$style.testimonials"
    >
      <template v-for="item in testimonialsContents">
        <div class="d-flex justify-content-center">
          <div :class="$style.testimonialsBox" :key="item.text">
            <b-avatar variant="info" :size="50" :src="item.icon" :class="$style.logo"></b-avatar>
            <p class="body-2 m-0">
              {{ item.text }}
            </p>
            <p class="body-1 m-0 text-capitalize" :class="$style.name">
              {{ item.name }}
            </p>
            <p :class="$style.role">
              {{ item.role }}
            </p>
          </div>
        </div>

      </template>
      <template #prev>
        <span class="carousel-control-prev-icon" :class="$style.prevButton" aria-hidden="true"></span>
      </template>
      <template #next>
        <span class="carousel-control-next-icon" aria-hidden="true" :class="$style.nextButton"></span>
      </template>
    </carousel>
  </div>
</template>

<style module lang="stylus">
.nextButton
  position absolute
  right -20px
  top 190px

.prevButton
  position absolute
  left -20px
  top 190px

.testimonials
  position relative

:global(.owl-dots)
  margin-top 45px !important

.sliderItem
  padding 10px 22px
  background-color: $brand-2
  border-radius 8px


.logo
  margin-bottom 25px

.name
  font-weight 800 !important
  margin-top 20px !important

.role
  font-size 14px
  line-height 21px
  font-weight 400

.testimonialsBox
  width 348px
  height 412px
  border-radius 12px
  background-color #1B1C1D
  padding 30px 25px 49px 25px
  text-align left

.sliderContainer
  padding-bottom 120px
</style>


<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator';

const carousel = require('vue-owl-carousel');

@Component({
  components: {carousel}
})
export default class Testimonials extends Vue {
  testimonialsContents: any[] = [
    {
      text: `“Polaris is being used to protect work-from-home services for more than 3,500 employees and collaborators of
              VNG. The system is developed by leading experts in Vietnam and provides features that are rarely found in
              other products.”`,
      name: 'Mr. V.D.C.',
      role: 'HEAD OF SYSTEM OPERATIONS, VNG',
      icon: require('@/assets/icons/vng.png'),
    },
    {
      text: `“Currently, Polaris is being used on Sao Bac Dau’s cloud system to meet load capacity needs and provide security, and in features for important public system applications. ”`,
      name: 'Mr. N.S.T.',
      role: 'CHIEF EXCECUTIVE OFFICER, SAO BAC DAU (SOUTHERN BRANCH)',
      icon: require('@/assets/icons/sbd.png'),
    },
    {
      text: `“Polaris is a next-generation application security solution that uses machine learning to automate access analysis to accurately detect sophisticated attack patterns. Polaris is partnered with BGP.net to deploy to more than 9 locations globally.”`,
      name: '',
      role: 'Business Department, National University of Singapore, ICE71 Competition review',
      icon: require('@/assets/icons/nus.png'),
    },
    {
      text: `"Over time, I have conducted testing of Polaris and found this service to be very good as an alternative to CloudFlare in Vietnam, and can go even further in competing directly with CloudFlare in the international market."`,
      name: 'Mr. P.N.T.',
      role: 'AZDigi CORPORATION',
      icon: require('@/assets/icons/azdigi.png'),
    },
  ]
}
</script>

