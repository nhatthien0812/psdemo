<template>
  <div :class="$style.whyChoosePolarisPanel">
    <div :class="$style.whyChoosePolarisSection" class="app-width">
      <b-row class="d-flex justify-content-between">
        <div class="col-12 col-lg-2 col-md-2 col-sm-12">
          <h3>
            Why choose
            Polaris
          </h3>
        </div>
        <div class="col-9 d-flex justify-content-between flex-wrap">
          <div class="col-12 col-lg-5 col-md-5 col-sm-12 p-0 mb-5" v-for="item in whyChoosePolarisContent">
            <div class="d-inline">
              <img :src="item.icon" class="d-inline-block align-baseline p-0" alt="Kitten" height="48" width="48">
            </div>
            <h5 class="mt-1 col-8 p-0">
              {{ item.text }}
            </h5>
          </div>
        </div>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
.whyChoosePolarisSection
  padding 70px 60px 28px 60px

.whyChoosePolarisPanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-color #060606
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';

@Component({})
export default class WhyChoosePolaris extends Vue {

  whyChoosePolarisContent: any[] = [
    {
      icon: require("@/assets/icons/arrow.png"),
      text: 'Regionally focused with specific market expertise'
    }, {
      icon: require("@/assets/icons/chart.png"),
      text: 'Growing benefits for growing partner success'
    }, {
      icon: require("@/assets/icons/shield.png"),
      text: 'Product reliability and local support'
    }, {
      icon: require("@/assets/icons/folder.png"),
      text: 'Service First Mentality'
    },
  ]

  partnerType: any [] = [
    {
      title: 'Referral',
      content: 'Non-contracted Partners who may not necessarily specialize in cybersecurity, ' +
        'tech, or Software as a Service (SaaS) sales that refer potential customers.'
    }, {
      title: 'Resellers & Distributors',
      content: 'Partners who are signed under a Master Service Level Agreement (SLA) as being officially licensed to sell the Polaris platform direct to customers and businesses.'
    }, {
      title: 'Managed Security Service Providers (MSSPs)',
      content: 'Partners who seek to utilize and integrate the Polaris platform as a part of the services they offer their customers. '
    }, {
      title: 'Integrators',
      content: 'Partners who seek to bake the Polaris platform or its capabilities into their own services or SaaS via API.'
    },
  ]

}
</script>
