<template>
  <div class="container-fluid px-0">
    <div :class="$style.container">
      <div :class="$style.section" class="row app-width">
        <div class="col-sm-2"/>
        <div class="col-sm-10">
          <h2 class="color-text-8 ml-4">Add-ons</h2>
          <div class="body-2 color-text-8 ml-4">
            Value added services allow you to further customize and enhance your web application protection
            capabilities.
          </div>
          <pricing-add-ons-table :is-monthly-type="isMonthlyType"/>
          <h5 class="color-text-6 ml-4 font-weight-bold">Managed Security Services Add-on</h5>
          <div class="body-2 ml-4 color-text-6">Take your proactive posture one step further by having Polaris stand
            watch over your web security. Our Security Operations Center (SOC) analysts will monitor your web activity
            for you, automatically mitigating threats in real-time. Allow us to monitor your web presence and serve as
            your guard so you can focus on what really matters - your people and your business.
          </div>
          <pricing-add-ons-service :is-monthly-type="isMonthlyType" :is-expand-all="isExpandAll"/>
          <div class="row">
            <div class="col mr-4">
              <h5 class="color-text-6 mx-4 font-weight-bold">Threat Intelligence Add-On</h5>
              <div class="body-2 color-text-6 mx-4">Increase your oversight into what is going on with your domain and
                the risks it faces. Real time intelligence let’s you know who is doing what, when they’re doing it, and
                where they’re doing it so that you can take action immediately.
              </div>
              <pricing-add-ons-threat-intelligence :is-monthly-type="isMonthlyType"/>
            </div>
            <div class="col ml-4">
              <h5 class="color-text-6 mx-4 font-weight-bold">Zero Trust Access Add-On</h5>
              <div class="body-2 color-text-6 mx-4">Maintain greater control over your security posture by detailing who
                has access to your platform and what they can do with it.
              </div>
              <pricing-add-ons-zero-trust-access :is-monthly-type="isMonthlyType"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.section
  padding 70px 60px

  h5
    margin-top 70px
    margin-bottom 13px

.container
  background $background-2

</style>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import PricingAddOnsTable from "~/layouts/pricing/PricingAddOnsTable.vue";
import PricingAddOnsService from "~/layouts/pricing/PricingAddOnsService.vue";
import PricingAddOnsThreatIntelligence from "~/layouts/pricing/PricingAddOnsThreatIntelligence.vue";
import PricingAddOnsZeroTrustAccess from "~/layouts/pricing/PricingAddOnsZeroTrustAccess.vue";

@Component({
  components: {PricingAddOnsZeroTrustAccess, PricingAddOnsThreatIntelligence, PricingAddOnsService, PricingAddOnsTable}
})
export default class PricingAddOns extends Vue {
  @Prop({default: true, type: Boolean, required: true}) isMonthlyType: boolean;
  @Prop({default: true, type: Boolean, required: true}) isExpandAll: boolean;

}
</script>
