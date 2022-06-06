<template>
  <b-navbar :class="$style.navigationBar" toggleable="xl" type="dark" variant="dark">
    <b-navbar-brand class="mr-4 pr-4">
      <nuxt-link to="/home">
        <img src="@/assets/images/polaris-logo.png" class="d-inline-block align-baseline mt-2" alt="Kitten" height="24"
             width="140">
      </nuxt-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown id="dropdown-1" text="Solutions" class="mr-4 pr-3 active">
          <b-dropdown-item href="https://polarisec.io/" target="_blank">Platform Access</b-dropdown-item>
          <b-dropdown-item href="https://support.polarisec.com/portal/en/home" target="_blank">Support Center
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/whyus" class="active mr-4 pr-3">Why us</b-nav-item>
        <b-nav-item to="/partner" class="active mr-4 pr-3">Partners</b-nav-item>
        <b-nav-item to="/company" class="active mr-4 pr-3">Company</b-nav-item>
        <b-nav-item to="/cyber-security-web-protection-pricing" class="active mr-4 pr-3">Pricing</b-nav-item>
        <b-nav-item to="/contact" class="active mr-4 pr-3">Contact Us</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://polarisec.io/" target="_blank" class="active mr-4 pr-2">Login</b-nav-item>
        <p-button :gradient="3" text="Get Started" :show-icon="false" @click="onClick"/>
        <!--        <div class="d-lg-flex justify-content-center align-items-center ml-2 pl-1">-->
        <!--          <b-avatar variant="info" :size="24" src="@/assets/icons/eng.png"></b-avatar>-->
        <!--        </div>-->
        <!--        <b-nav-item-dropdown id="dropdown-right" right class="active" :class="$style.languageSelect">-->
        <!--          <b-dropdown-item>English</b-dropdown-item>-->
        <!--        </b-nav-item-dropdown>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style module lang="stylus">
@import "../styles/main.styl"
@media (min-width: 1200px)
  .navigationBar
    height 72px !important
    padding 24px 60px !important

.languageSelect
  ul
    padding-left 10px !important

  a
    padding-left 2px !important

.navbarFont
  font-weight 400
  font-family "Inter"
  font-style normal
  font-size 16px
  line-height 26px

:global(.bg-dark)
  background-color black !important

</style>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class PNavbar extends Vue {

  onClick() {
    window.open('https://polarisec.io/', '_blank');
  }

}
</script>

