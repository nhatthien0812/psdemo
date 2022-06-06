<template>
  <div class="container-fluid" :class="$style.bannerContainer">
    <div class="row app-width">
      <div :class="$style.banner">
        <h1>Simplifying the <b>protection of your critical assets</b> from the world’s greatest cyber threats.</h1>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
  @import "@/styles/config.styl"

  .bannerContainer
    height 820px
    background-image url("@/assets/images/company/banner.png")
    background-color: $background-1
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  .banner
    margin-left 152px

    h1
      max-width 873px
      margin-top 81px

    b
      color $brand-2

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({})
export default class CompanyBanner extends Vue {

}
</script>
