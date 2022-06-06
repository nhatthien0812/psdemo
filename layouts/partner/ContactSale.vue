<template>
  <div :class="$style.contactSalePanel" class="col-12">
    <div :class="$style.contactSaleSection" class="app-width">
      <b-row class="d-flex justify-content-between">
        <div class="black-text d-inline-flex justify-content-between align-items-center"
             :class="$style.contactSaleContainer">
          <h5 class="fw-500 col-7 p-0">
            Contact us at <span><a href="mailto:hello@polarisec.com" class="black-text">hello@polarisec.com</a></span>
            for more information on how
            we can combine efforts in bringing cybersecurity solutions to APAC
          </h5>
          <nuxt-link to="/contact" class="mr-5 p-0">
            <div :class="$style.contact" class="fw-500">
              Contact sales <span class="ml-2"><img src="@/assets/icons/call_made.png" alt="" width="24"
                                                    height="24"></span>
            </div>
          </nuxt-link>
        </div>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.contactSaleContainer
  background-color: $brand-2

.contact
  font-size 16px
  line-height 21px
  font-weight 600
  color $text-1

.contactSaleSection
  padding 27px 64px 20px 59px

.contactSalePanel
  min-height 115px
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-color #8BDFAF
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';

@Component({})
export default class ContactSale extends Vue {


}
</script>
