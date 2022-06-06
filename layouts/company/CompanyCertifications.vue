<template>
  <div class="container-fluid px-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <div class="row">
        <div class="col-sm-3 px-0">
          <h2>Company Certifications</h2>
        </div>
        <div class="col-sm-1 px-0"/>
        <div class="col-sm-8 px-0" :class="$style.certContainer">
          <div class="row justify-content-center">
            <template v-for="certification in certifications">
              <div :key="certification.img"
                   class="col-sm-3 col-lg-2  d-inline-flex align-items-center justify-content-center mr-4"
                   :class="$style.leaderContainer">
                <img :src="certification.img" alt="" :width="certification.width" :height="certification.height">
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background $background-2

.bodyContainer
  padding 73px 169px 105px 145px

  h2
    color $text-8

.leaderContainer
  margin-bottom 14px
  padding 18px 16px

.certContainer
  margin 0 auto

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({})
export default class CompanyCertifications extends Vue {

  get certifications() {
    return [
      {
        img: require('@/assets/images/company/gsec.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/gpen.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/gcfa.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/gcih.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/giac.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/csslp.png'),
        width: 65,
        height: 65,
      },
      {
        img: require('@/assets/images/company/iso.png'),
        width: 170,
        height: 170,
      },
      {
        img: require('@/assets/images/company/cissp.png'),
        width: 65,
        height: 65,
      },
    ];
  }

}
</script>
