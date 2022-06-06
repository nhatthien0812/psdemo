<template>
  <div class="container-fluid px-0">
    <div :class="$style.bannerContainer">
      <div :class="$style.bannerSection" class="row app-width">
        <div class="col-sm-6">
          <h1>Web Protection Plan</h1>
          <div :class="$style.pricingSubTitle" class="body-1">Try Polaris free - forever</div>
          <p-button text="Request a Demo" @click="onClick"/>
        </div>
        <div :class="$style.pricingContainer" class="col-sm-6"/>
      </div>
    </div>

    <div :class="$style.contactSaleContainer">
      <div :class="$style.contactSaleSection"
           class="d-flex justify-content-between align-items-center app-width">
        <div>
          <h4 class="mb-1">Polaris for Enterprises</h4>
          <div class="body-2">Need enterprise-grade scalability, security, and support - contact our sales team</div>
        </div>
        <nuxt-link to="/contact">
          <div :class="$style.contact">
            Contact sales <span class="ml-2"><img src="@/assets/icons/call_made.png" alt="" width="24"
                                                  height="24"></span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.bannerSection
  padding 112px 160px 118px 153px
  align-items center

.bannerContainer
  background-image url("@/assets/images/pricing/pricing-banner-background.png")
  background-color: $background-1
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1
    color $text-8

.pricingSubTitle
  margin-top 20px
  margin-bottom 50px
  color $text-8

.pricingContainer
  background-image url("@/assets/images/pricing/pricing-banner.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height 286px

.contactSaleSection
  padding 27px 64px 20px 59px
  color $text-1

.contactSaleContainer
  background-color: $brand-2

.contact
  font-size 16px
  line-height 21px
  font-weight 600
  color $text-1

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class CompanyBanner extends Vue {

  onClick() {
    this.$router.push({path: '/contact'});
  }

}
</script>
