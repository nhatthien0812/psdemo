<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
        <div :class="$style.rowContainer" class="row">
          <div class="col-sm-7 row">
            <div class="col-sm-12 px-0" :class="$style.videoContainer">
              <div :class="$style.videoSubContainer">
                <iframe src="https://www.youtube.com/embed/J_jbDrFq4AM"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen/>
              </div>
            </div>
          </div>
          <div class="col-sm-5" :class="$style.textContainer">
            <h3 :class="$style.h3">How Polaris Helps <br/> Your Business.</h3>
            <div :class="$style.text">Polaris is the roadblock in the cyber attack killchain’s first stage - conducting
              reconnaissance on potential targets of opportunity. We monitor trends across web apps to predict and
              prevent attacks before they happen.
            </div>
            <p-button text="Watch on Youtube" @click="onClick"/>
          </div>
        </div>
      </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-image: url('@/assets/images/home/introduct-home.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

.bodyContainer
  padding 100px 139px 126px 194px

.rowContainer
  height 100%

.videoContainer
  background: linear-gradient(72.93deg, #8BDFAF 0%, #011659 49.15%, #98659E 95.2%)
  //opacity 0.75
  //filter: blur(75px)
  border-radius: 12px
  height 351px

  iframe
    border-radius 8px
    width 100%
    height inherit

.videoSubContainer
  background-color: $text-3
  border 4px solid $brand-2
  border-radius 12px
  box-sizing: border-box;
  height 100%

.textContainer
  padding-left 60px

.h3
  color $brand-2
  margin-bottom 20px

.text
  font-weight 500
  font-size 16px
  line-height 24px
  color $text-7
  margin-bottom 44px

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class HomeVideoIntroduce extends Vue {

  onClick() {
    window.open('https://www.youtube.com/watch?v=J_jbDrFq4AM', '_blank');
  }

}
</script>
