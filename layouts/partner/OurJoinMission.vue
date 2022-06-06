<template>
  <div :class="$style.missionPanel">
    <div :class="$style.missionSection" class="app-width">
      <b-row>
        <p class="body-2 brand-2 col-12">
          Our Joint Mission
        </p>
        <h2 class="col-11 mb-2">
          “Collaborating to protect our community through <span class="brand-2">raising cybersecurity awareness and capabilities.</span>”
        </h2>
      </b-row>
      <div :class="$style.divide" class="mb-4 mt-5 col-12"></div>

      <b-row class="d-flex justify-content-between">
        <h3 class="col-12 col-sm-10 col-lg-2 col-md-2 mb-3">
          Program Goals
        </h3>
        <h3 class="col-12 col-lg-4 col-md-4 col-sm-12 mb-3">
          Provide <span class="brand-2">reliable</span> and <span class="brand-2">knowledgeable</span> support to
          partners
          and customers
        </h3>
        <h3 class="col-12 col-lg-4 col-md-4 col-sm-12 mb-3">
          Expand <span class="brand-2">networks</span> and <span class="brand-2">capabilities</span> to grow service and
          value
        </h3>
      </b-row>
    </div>
  </div>
</template>

<style module lang='stylus'>
.divide
  border-bottom 0.03em solid #55677E
  margin-bottom 16px

.missionSection
  padding 70px 60px 76px 60px

.missionPanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-color #0F0F0F
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';

@Component({})
export default class OurJoinMission extends Vue {

}
</script>
