<template>
  <div :class="$style.panel">
    <p :class="$style.introduction">
      Some quick  questions for
      personalized recommendations
    </p>
    <nuxt-link to="/cyber-security-web-protection-pricing">
    <p class="brand-2 mt-5 pt-3" :class="$style.action">
      Skip questions and see all plans ->
    </p>
    </nuxt-link>
  </div>
</template>
<style module lang="stylus">
.panel
  background-color #1B1C1D
  padding 138px 28px 0 19px

.action
  font-weight 600
  font-size 16px
  line-height 21px

.introduction
  font-weight 800
  font-size 32px
  line-height 48px
  word-break break-word
</style>

<script lang="ts">
import {Vue,Component} from "nuxt-property-decorator";

@Component({})
export default class Introduction extends Vue{

}
</script>

