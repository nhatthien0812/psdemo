<template>
  <div>
    <p-navbar :class="$style.nav" class="col-12"/>
    <main>
      <Nuxt/>
    </main>
    <p-footer/>
  </div>
</template>

<style module lang='stylus'>
.nav
  position sticky
  top 0
  z-index 2
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PNavbar from "~/components/PNavbar.vue";
import PFooter from "~/components/PFooter.vue";

@Component({
  components: {PFooter, PNavbar}
})
export default class MainLayouts extends Vue {

  get scale() {
    const viewWidth = window.screen.width;
    if (viewWidth < 1280.0) {
      return viewWidth / 1280.0;
    }
    return 1;
  }

  get head() {
    return {
      meta:  [
        {
          name: 'viewport',
          content: `width=device-width, initial-scale=${this.scale}`
        },
      ],
    }
  };

}
</script>
