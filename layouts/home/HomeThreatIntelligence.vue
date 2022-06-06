<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <img :class="$style.img" src="@/assets/images/home/threat-intelligence.png" alt="">
        </div>
        <div :class="$style.textContainer" class="col-sm-6">
          <h2>Threat Intelligence.</h2>
          <div class="body-1 color-text-7 fw-400 py-4">
            Polaris utilizes a variety of trusted cyber intelligence sources to aggregate, compare, and analyze threat
            data to form a more comprehensive detection and defense strategy in real time as events happen.
          </div>
          <div class="body-1 color-text-7 fw-400">
            Our threat intelligence capabilities grow alongside evolving enemy threats to stay up to date, forming <b>a
            more comprehensive advance warning system</b>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-color: $background-1;

.bodyContainer
  padding 162px 60px 98px 108px

  h2
    color #F9FAFC

.img
  width inherit

.textContainer
  padding-left 152px

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class HomeThreatIntelligence extends Vue {


}
</script>
