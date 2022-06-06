<template>
  <div class="container-fluid" :class="$style.bannerContainer">
    <div class="row align-items-center app-width h-100">
      <div :class="$style.banner">
        <h1>Web Protection that Never Sleeps</h1>
        <h3>Always On Guard</h3>
        <div :class="$style.bannerText" class="body-1">
          Polaris’ Web Application & API Protection (WAAP) applies <b>next-generation Artificial Intelligence (AI)</b>
          to actively detect and deter cyber attacks against your business. <b>Robust</b>, <b>adaptable</b>, and <b>accurate</b>,
          it greatly reduces the level of risk to your most critical asset - your data.
        </div>
        <p-button text="Request a Demo" @click="onClick"/>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.bannerContainer
  height 820px
  background-image url("@/assets/images/home/banner-home.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

.banner
  margin-left 152px

  h1
    margin-bottom 16px
    max-width 997px

  h3
    margin-bottom 45px

.bannerText
  max-width 878px
  color $text-7
  margin-bottom 45px

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class HomeBanner extends Vue {

  onClick() {
    this.$router.push({path: '/contact'});
  }

}
</script>
