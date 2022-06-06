<template>
  <div>
    <company-banner/>
    <company-info/>
    <company-teams/>
    <company-certifications/>
  </div>
</template>

<style module lang='stylus'>

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import CompanyBanner from "~/layouts/company/CompanyBanner.vue";
import CompanyInfo from "~/layouts/company/CompanyInfo.vue";
import CompanyTeams from "~/layouts/company/CompanyTeams.vue";
import CompanyCertifications from "~/layouts/company/CompanyCertifications.vue";

@Component({
  components: {
    CompanyCertifications,
    CompanyTeams,
    CompanyInfo,
    CompanyBanner
  }
})
export default class Company extends Vue {
  get head() {
    return {
      title: 'Polaris Web Protection & Cyber Security | Company'
    }
  }
}
</script>
