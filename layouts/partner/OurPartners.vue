<template>
  <div :class="$style.ourPartnersPanel">
    <div :class="$style.ourPartnersSection" class="app-width">
      <b-row class="d-flex justify-content-between">
        <div class="col-5 d-flex flex-wrap align-content-center">
          <h1>
            Our Partners
          </h1>
          <p class="text-6 col-10 p-0">
            We need your help in providing security solutions
            to our communities
          </p>
        </div>
        <carousel class="col-6"
                  :autoplay="partners.length > 3"
                  autoWidth
                  :dots="false"
                  :margin="22"
                  :items="3"
                  :nav="false"
                  :class="$style.ourPartners"
        >
          <template v-for="item in partners">
            <div :class="$style.box" :key="item.text">
              <div :class="$style.subBox"
                   class="d-flex flex-wrap justify-content-center align-content-center p-0 col-12">
                <b-avatar :class="$style.logo" variant="info" :size="115" :src="item.icon"></b-avatar>
              </div>
              <span
                class="body-1 col-12 font-weight-bold d-flex flex-wrap justify-content-center mt-3">
                   {{ item.text }}
          </span>
            </div>
          </template>
          <template #prev>
            <span class="carousel-control-prev-icon" :class="$style.prevButton" aria-hidden="true"></span>
          </template>
          <template #next>
            <span class="carousel-control-next-icon" aria-hidden="true" :class="$style.nextButton"></span>
          </template>
        </carousel>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
.nextButton
  position absolute
  right -33px
  top 150px

.prevButton
  position absolute
  left -33px
  top 150px

.ourPartners
  position relative

.logo
  margin 0
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)


.subBox
  width 221px
  height 251px
  background-color #000001
  position relative

  img
    width auto !important

.box
  width 228px
  height 329px
  border-radius 16px
  background-color #141414
  padding 13px

.ourPartnersSection
  height 513px
  padding 92px 22px 0 152px

.ourPartnersPanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-color #060606
  background-image url("assets/background/partner-bg.png")
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';

const carousel = require('vue-owl-carousel');

@Component({
  components: {
    carousel
  }
})
export default class ContactSale extends Vue {

  partners: any [] = [
    {
      icon: require("@/assets/partners/vng.png"),
      text: 'VNG'
    }, {
      icon: require("~/assets/partners/group8.png"),
      text: 'Group 8'
    }, {
      icon: require("@/assets/icons/sbd.png"),
      text: 'Sao Bac Dau'
    },
    {
      icon: require("@/assets/partners/vnsec.png"),
      text: 'VNSEC'
    },
    {
      icon: require("@/assets/partners/cylon.png"),
      text: 'CYLON'
    },
    {
      icon: require("@/assets/partners/ice71.png"),
      text: 'ICE71'
    },

  ]
}
</script>
