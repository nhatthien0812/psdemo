<template>
  <div>
    <our-partners/>
    <our-join-mission/>
    <why-choose-polaris/>
    <partner-types/>
    <contact-sale/>
  </div>
</template>

<style module lang='stylus'>
@import "../styles/main.styl"

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import OurJoinMission from "~/layouts/partner/OurJoinMission.vue";
import WhyChoosePolaris from "~/layouts/partner/WhyChoosePolaris.vue";
import PartnerTypes from "~/layouts/partner/PartnerTypes.vue";
import ContactSale from "~/layouts/partner/ContactSale.vue";
import OurPartners from "~/layouts/partner/OurPartners.vue";


@Component({
  components: {OurPartners, ContactSale, PartnerTypes, WhyChoosePolaris, OurJoinMission}
})
export default class Partner extends Vue {
  get head() {
    return {
      title: 'Polaris Web Protection & Cyber Security | Partners'
    }
  }
}
</script>
