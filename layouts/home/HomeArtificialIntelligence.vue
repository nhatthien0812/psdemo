<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <div class="row align-items-center">
        <div :class="$style.textContainer" class="col-sm-6">
          <h2>Artificial Intelligence.</h2>
          <div class="body-1 color-text-7 fw-400 py-4">
            We use application specific machine and behavioral learning techniques such as “fingerprinting” to <b>differentiate
            between legitimate and malicious web requests</b>.
          </div>
          <div class="body-1 color-text-7 fw-400">
            Constantly evolving, our AI can identify and act upon cyber attacks targeting web applications that are
            woven into innocent looking traffic - traffic that slips right through traditional cyber security defenses.
          </div>
        </div>
        <div class="col-sm-6">
          <img :class="$style.img" src="@/assets/images/home/artificial-intelligence.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-color: #0F0F0F;

.bodyContainer
  padding 162px 60px 98px 108px

  h2
    color #F9FAFC

.img
  width inherit

.textContainer
  padding-right 60px

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class HomeArtificialIntelligence extends Vue {


}
</script>
