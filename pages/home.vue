<template>
  <div>
    <home-banner/>
    <home-introduce/>
    <home-video-introduce/>
    <home-web-application-security/>
    <home-artificial-intelligence/>
    <home-threat-intelligence/>
    <home-slider/>
    <home-newsletter/>
  </div>
</template>

<style module lang='stylus'>

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import HomeBanner from "@/layouts/home/HomeBanner.vue";
import HomeIntroduce from "~/layouts/home/HomeIntroduce.vue";
import HomeVideoIntroduce from "~/layouts/home/HomeVideoIntroduce.vue";
import HomeWebApplicationSecurity from "~/layouts/home/HomeWebApplicationSecurity.vue";
import HomeArtificialIntelligence from "~/layouts/home/HomeArtificialIntelligence.vue";
import HomeThreatIntelligence from "~/layouts/home/HomeThreatIntelligence.vue";
import HomeSlider from "~/layouts/home/HomeSlider.vue";
import HomeNewsletter from "~/layouts/home/HomeNewsletter.vue";

@Component({
  components: {
    HomeNewsletter,
    HomeSlider,
    HomeThreatIntelligence,
    HomeArtificialIntelligence,
    HomeWebApplicationSecurity,
    HomeVideoIntroduce,
    HomeIntroduce,
    HomeBanner
  }
})
export default class HomePage extends Vue {
  get head() {
    return {
      title: 'Polaris Web Protection & Cyber Security',
      meta: [
        {
          name: 'keywords',
          content: 'cyber security, cybersecurity, web protection, api protection, waap, polaris, web security, web firewall, application firewall'
        },
        {
          name: 'description',
          content: 'Polaris is your trusted cyber security partner providing web protection through proprietary artificial intelligence and machine learning. Deter attacks before damage is done.'
        }
      ]
    }
  }

}
</script>
