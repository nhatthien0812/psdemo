<template>
  <div class="container-fluid" :class="$style.container">
    <div class="row app-width" :class="$style.bodyContainer">
      <div class="col-sm-3 px-0">
        <img src="@/assets/images/polaris-logo.png" alt="Kitten" height="42" width="250">
        <hr>
      </div>
      <div class="col-sm-1 px-0"/>
      <div class="col-sm-8 px-0">
        <h4 class="font-weight-normal mb-0">
          We believe in making cybersecurity a priority as the world becomes increasingly dangerous due to the threat of
          malicious actors. We believe in educating our community, spreading awareness on why we need to shield our
          digital assets in order to protect our people. We believe in teaming up with every one of our customers in
          proactively deterring and defending against those looking to take advantage of others.
        </h4>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background: $background-2

.bodyContainer
  padding 85px 130px 99px 145px

  h4
    color $text-8

  hr
    width 250px
    background-color: $text-8
    border: 0.5px solid $text-8;
    margin-left 0
    margin-top 24px

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({})
export default class CompanyInfo extends Vue {

}
</script>
