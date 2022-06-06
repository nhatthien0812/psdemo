<template>
  <div class="container-fluid px-0">
    <div :class="$style.bannerContainer">
      <div>
        <div :class="$style.title">Oops, something went wrong</div>
        <img src="@/assets/images/404/404.png" width="544" height="194" alt="">
        <div :class="$style.link"><nuxt-link to="/home">Go Home</nuxt-link></div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "../styles/main.styl"

.bannerContainer
  background-image url("@/assets/images/404/background.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height calc(100vh - 436px)
  display flex
  align-items center
  justify-content center

.title
  font-size 36px
  line-height 55px
  color: $text-8
  font-weight 800
  text-transform uppercase
  margin-bottom 38px
  text-align center

.link
  margin-top 50px
  font-size 32px
  line-height 42px
  text-decoration-line underline
  font-weight 600
  text-align center

  a
    color $brand-2

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class ErrorPage extends Vue {

}
</script>
