<template>
  <div class="container-fluid px-0">
    <div :class="$style.container">
      <div :class="$style.section" class="row app-width">
        <div class="col-sm-2"/>
        <div class="col-sm-10">
          <h2 class="color-text-8 ml-4">FAQ</h2>
          <hr>
          <div :class="$style.faqContainer" class="row">
            <div class="col mr-4">
              <div class="body-2 color-text-8 font-weight-bold">How long can we use the Free version for?</div>
              <div :class="$style.faqAnswer">Forever. We mean that. Use it for as long as you like or until you feel
                like it’s time for an upgrade.
              </div>
            </div>
            <div class="col ml-4">
              <div class="body-2 color-text-8 font-weight-bold">How is billing done?</div>
              <div :class="$style.faqAnswer">We can automatically bill you month to month or via a one time annual
                payment. Reminder that the annual payment option comes with a 20% discount! You can pay by card or bank
                transfer, up to you.
              </div>
            </div>
          </div>
          <div :class="$style.faqContainer" class="row">
            <div class="col mr-4">
              <div class="body-2 color-text-8 font-weight-bold">I’m not sure which package I should get?</div>
              <div :class="$style.faqAnswer">You can always just send us a message <nuxt-link
                to="/contact">here</nuxt-link> or you can answer a few simple <nuxt-link
                to="/questions">questions</nuxt-link> for a recommendation.
              </div>
            </div>
            <div class="col ml-4">
              <div class="body-2 color-text-8 font-weight-bold">Does this mean that I’ll be protected from all cyber
                attacks?
              </div>
              <div :class="$style.faqAnswer">No solution can guarantee your 100% safety from all forms of cyber attacks
                as they are constantly evolving and changing, but this is the perfect first step in protecting you from
                the most common and latest types.
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end col-12 pr-4 pt-2">
          <b-dropdown
            text="Find more..."
            class="m-2 mr-3"
            :no-flip="true"
            no-caret
            :class="$style.findMoreDropdown"
          >
            <b-dropdown-item href="https://polarisec.medium.com/" target="_blank"><span class="black-text">Blog</span></b-dropdown-item>
            <b-dropdown-item href="https://support.polarisec.com/portal/en/home" target="_blank"><span class="black-text">Support Center</span></b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.findMoreDropdown
  button
    background $gradient-3 !important

.section
  padding 70px 60px

  hr
    border: 0.5px solid $text-8
    margin 19px 24px 28px

  a
    color $brand-2

.container
  background $background-1

.faqContainer
  padding 15px 24px

.faqAnswer
  font-size 16px
  line-height 26px
  color $text-8

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class PricingFAQ extends Vue {

}
</script>
