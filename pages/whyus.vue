<template>
  <div class="container-fluid body-1 p-0">
    <div :class="$style.container">
      <div :class="$style.section" class="app-width">
        <div>
          <h1>Why us</h1>
        </div>
        <div class="d-flex justify-content-between mt-5 col-12 p-0 row mx-0">
          <div class="col-lg-4 col-md-4 col-sm-12 col-12 p-0 pr-5 pl-1 mt-mb-36px">
            Polaris is your <span class="highlight-text">premier local solution</span> with local support, dedicated to
            providing users with a first rate security service.
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-12 p-0 pr-5 pl-1 mt-mb-36px">
            We understand that cyber security can sometimes be overly complex and seek to simplify the process, <span
            class="highlight-text">making it accessible to anyone, anywhere.</span>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-12 p-0 pr-5 pl-1 mt-mb-36px">
            We’re <span class="highlight-text">scalable at every level</span> from the first time cyber user to the
            seasoned veteran, addressing the concerns of small businesses and enterprises alike.
          </div>
        </div>

        <div :class="$style.divide" class="mb-3 mt-5"></div>

        <div class="d-flex justify-content-center p-0 body-1 flex-wrap">
          <div v-for="item in serviceContent" :key="item.icon" class="p-0 col-sm-4 pr-5 pl-1 mt-5">
            <div class="d-inline">
              <img :src="item.icon" class="d-inline-block align-baseline p-0" alt="Kitten" height="48" width="48">
            </div>
            <p class="mt-1">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div :class="$style.analyticPanel">
      <div :class="$style.analyticSection" class="d-flex row app-width">
        <div v-for="item in analyticContent" :key="item.title"
             class="p-0 col-sm-12 col-12 col-lg-4 col-md-4 pr-5 pl-1 black-text mt-mb-36px">
          <h1 class="p-0 mb-2">
            {{ item.title }}
          </h1>
          <p v-html="item.text" class="m-0">
          </p>
          <i>
            {{ item.source }}
          </i>
        </div>
      </div>
    </div>

    <div :class="$style.testimonialsPanel">
      <div :class="$style.testimonialsSection" class="app-width">
        <testimonials/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import Testimonials from "~/layouts/whyus/Testimonials.vue";

@Component({
  components: {
    Testimonials
  }
})
export default class WhyUs extends Vue {

  get head() {
    return {
      title: 'Polaris Web Protection & Cyber Security | Why Us'
    }
  }

  analyticContent: any[] = [
    {
      title: '800%',
      text: 'In 2021, Web Application attacks are up <b>800%</b>.',
      source: '(source: CDNetworks)',
    },
    {
      title: '30,000',
      text: 'On average, <b>30,000</b> new websites are hacked a day.',
      source: '(source: Forbes)',
    },
    {
      title: '73%',
      text: '<b>73%</b> of black hat hackers say traditional firewall and antivirus security solutions are now obsolete.',
      source: '(source: Thycotic.com)',
    },
  ]

  serviceContent: any [] = [
    {
      text: '24/7 premium support to ensure your business operations are always up and running',
      icon: require("@/assets/icons/availability.png")
    },
    {
      text: 'The ability to manage services on your behalf so you don’t ever have to think about it',
      icon: require("@/assets/icons/folder.png")
    },
    {
      text: 'Real-time threat management capabilities to ensure timely and decisive response to unwanted actions',
      icon: require("@/assets/icons/clock.png")
    },
    {
      text: 'Growing intelligence capabilities to provide even greater insight into your business’ web presence',
      icon: require("@/assets/icons/chart.png")
    },
    {
      text: 'Monitor your entire organization via one simple dashboard',
      icon: require("@/assets/icons/file.png")
    },
    {
      text: 'Flexible payment options and terms - monthly or annual, pay via card or bank transfer',
      icon: require("@/assets/icons/card.png")
    },
    {
      text: 'Try our free version for as long as you like before deciding on any upgrade',
      icon: require("@/assets/icons/device.png")
    }
  ]
}
</script>

<style module lang="stylus">
@import "@/styles/config.styl"
.testimonialsSection
  padding 71px 65px 104px 102px

.testimonialsPanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-color #0F0F0F

.analyticSection
  min-height 271px
  padding 35px 98px 63px 153px

.analyticPanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-color $brand-2

.divide
  width 100%
  border-bottom 0.03em solid #55677E
  margin-bottom 16px

.section
  padding 119px 98px 104px 153px
  min-height 1081px

.container
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-image url("assets/background/why-us-bg.png")

</style>
