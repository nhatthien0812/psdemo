<template>
  <div>
    <pricing-banner/>
    <pricing-details/>
  </div>
</template>

<style module lang='stylus'>

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PricingBanner from "~/layouts/pricing/PricingBanner.vue";
import PricingDetails from "~/layouts/pricing/PricingDetails.vue";

@Component({
  components: {PricingDetails, PricingBanner}
})
export default class PolarisCyberSecurityWebProtectionWaapPricing extends Vue {
  get head() {
    return {
      title: 'Polaris Web Protection & Cyber Security | Pricing',
      meta: [
        {
          name: 'keywords',
          content: 'cyber security, cybersecurity, web protection, api protection, waap, polaris, web security, web firewall, application firewall'
        },
        {
          name: 'description',
          content: 'Polaris is your trusted cyber security partner providing web protection for businesses of all sizes and industries. Try our FREE Basic plan before deciding on an upgrade.'
        }
      ]
    }
  }
}
</script>
