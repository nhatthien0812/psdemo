<template>
  <b-container fluid :class="$style.footer">
    <div :class="$style.footerSection" class="app-width">
      <b-row class="d-flex justify-content-between flex-row">
        <b-col lg="3" md="3" sm="12" class="p-0">
          <nuxt-link to="/home">
            <img src="~/assets/images/polaris-logo.png" class="d-inline-block align-baseline mt-2" alt="Kitten"
                 height="30"
                 width="175">
          </nuxt-link>
          <div class="mt-4 body-3">
            <a href="mailto:hello@polarisec.com"><p class="brand-2 mb-3">hello@polarisec.com</p></a>
            <p class="mb-1">
          <span class="brand-2">
            Singapore:
          </span>
              12 Marina View #11-01
            </p>
            <p class="m-0 mb-1">
           <span class="brand-2">
            Vietnam:
           </span>
              H3 Building - CirCo, 384 Hoang Dieu St, District 4, HCMC
            </p>
            <p>
           <span class="brand-2">
            Contact number:
           </span>
              +84.287.101.7755
            </p>
          </div>
        </b-col>
        <b-col col lg="7" class="mr-3 p-0">
          <b-row class="d-flex justify-content-between">
            <div class="body-6 col-lg-3 col-5 mt-mb-36px">
              <div>SOLUTION</div>
              <div class="d-flex flex-column mt-4 body-5">
                <a href="https://polarisec.io" target="_blank">
                <span class="color-text-7">
                  Platform Access
                </span>
                </a>
                <a href="https://support.polarisec.com" target="_blank">
                  <span class="color-text-7">
                    Support Center
                  </span>
                </a>
              </div>
            </div>

            <div class="body-6 col-lg-3 col-5 mt-mb-36px">
              COMPANY
              <div class="d-flex flex-column mt-4 body-5">
                <nuxt-link to="/company">
                <span class="color-text-7">
                    Company
                </span>
                </nuxt-link>
                <nuxt-link to="/whyus">
                <span class="color-text-7">
                    Why us
                </span>
                </nuxt-link>
                <nuxt-link to="/partner">
                <span class="color-text-7">
                    Partners
                </span>
                </nuxt-link>
                <a href="https://polarisec.medium.com/" target="_blank">
                  <span class="color-text-7">
                    Blog
                  </span>
                </a>
              </div>
            </div>

            <div class="body-6 col-lg-3 col-5 mt-mb-36px">
              RESOURCES
              <div class="d-flex flex-column mt-4 body-5">
                <nuxt-link to="/cyber-security-web-protection-pricing">
                <span class="color-text-7">
                    Pricing
                </span>
                </nuxt-link>
                <nuxt-link :to="{path: '/cyber-security-web-protection-pricing', hash: '#faq'}">
                <span class="color-text-7">
                    FAQ
                </span>
                </nuxt-link>
                <nuxt-link to="/contact">
                <span class="color-text-7">
                    Contact
                </span>
                </nuxt-link>
              </div>
            </div>

            <div class="body-6 col-lg-2 p-0 col-5 mt-mb-36px" :class="$style.socialContact">
              CONNECT WITH US
              <div class="d-flex flex-column justify-content-between mt-4 body-5 pl-3">
                <b-row class="mb-2 d-flex">
                  <a href="https://www.facebook.com/polarisinfosec" target="_blank" class="mr-3">
                    <img src="~/assets/icons/facebook.png" class="d-inline-block align-baseline" alt="Kitten"
                         height="24"
                         width="24">
                  </a>
                  <a href="https://twitter.com/polarisinfosec" target="_blank" class="mr-3">
                    <img src="~/assets/icons/twitter.png" class="d-inline-block align-baseline" alt="Kitten" height="24"
                         width="24">
                  </a>
                  <a href="https://www.youtube.com/channel/UChjg05_AKIRTg8ZXgwhroYw" target="_blank">
                    <img src="~/assets/icons/youtube.png" class="d-inline-block align-baseline" alt="Kitten" height="24"
                         width="24">
                  </a>
                </b-row>

                <b-row class="d-flex">
                  <a href="https://polarisec.substack.com/" target="_blank" class="mr-3">
                    <img src="~/assets/icons/substack.png" class="d-inline-block align-baseline" alt="Kitten"
                         height="24"
                         width="24">
                  </a>
                  <a href="https://linkedin.com/company/polarisec" target="_blank">
                    <img src="~/assets/icons/linked-in.png" class="d-inline-block align-baseline" alt="Kitten"
                         height="24"
                         width="24">
                  </a>
                </b-row>
              </div>
            </div>
          </b-row>
        </b-col>
      </b-row>

      <b-row :class="$style.divide" class="mb-3 mt-4"></b-row>

      <b-row class="d-flex justify-content-between align-content-center p-0">
        <b-col class="col-12 col-lg-3 p-0 text-mobile-center">
        <span class="body-4">
          @ Polaris Infosec Pte. Ltd.
        </span>
        </b-col>
        <b-col class="col-12 col-lg-3 d-flex justify-content-end justify-content-mobile-center p-0">
          <nuxt-link to="/terms">
            <div class="pr-2 text-center" style="border-right: 0.03em solid #A9B7C6; color: white">
              <span class="body-4">
                Terms of Service
              </span>
            </div>
          </nuxt-link>
          <a href="docs/polaris_privacy_notice.pdf" download>
            <div class="pl-2 white-text text-center">
              <span class="body-4">
                 Privacy and Support
               </span>
            </div>
          </a>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<style module lang="stylus">
@media only screen and (max-width: 1020px)
  .socialContact
    padding-left 16px !important

@media only screen and (max-width: 600px)
  .socialContact
    padding-left 16px !important

  .footerSection
    padding 24px !important

.divide
  border-bottom 0.03em solid #A9B7C6

.footerSection
  padding 40px 60px 24px 60px

.footer
  background-color black
</style>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";

@Component({})
export default class PFooter extends Vue {
  title: string[] = [
    'SOLUTION', 'COMPANY', 'RESOURCES', 'CONNECT WITH US'
  ]
}
</script>


