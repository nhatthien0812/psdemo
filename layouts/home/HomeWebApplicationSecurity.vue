<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <img :class="$style.img" src="@/assets/images/home/web-application-security.png" alt="">
        </div>
        <div :class="$style.textContainer" class="col-sm-6">
          <h2>Web application security.</h2>
          <div class="body-1 color-text-7 fw-400 py-4">
            <b>Protects your website from cyber attacks</b> such as Distributed Denial of Service (DDoS), SQL
            Injection, Zero-Day attacks, and other OWASP Top 10 vulnerabilities before your application server is
            exploited.
          </div>
          <div class="body-1 color-text-7 fw-400">
            Comes pre-configured with default expert-crafted protection rules, which means once enrolled, <b>you’re
            defended immediately</b>. If needed, you can also customize rules to easily fit your security policy
            requirements.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-color: $background-1;

.bodyContainer
  padding 100px 60px 98px 108px

  h2
    color #F9FAFC

.img
  width inherit

.textContainer
  padding-left 152px

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class HomeWebApplicationSecurity extends Vue {


}
</script>
