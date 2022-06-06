<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <h2>An experience you'd expect from a professional tool.</h2>
      <div class="row">
        <template v-for="introduce in introduces">
          <div :class="$style.introduceContainer" :key="introduce.img" class="col">
            <img :class="$style.img" :src="introduce.img" alt="">
            <h5 :class="$style.introduceTitle">{{ introduce.title }}</h5>
            <div :class="$style.introduceText" class="body-2">{{ introduce.text }}</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-color $background-1

.bodyContainer
  padding 100px 140px

  h2
    max-width 877px
    text-align center
    margin 0 auto 99px

.img
  width 150px
  height 150px
  position absolute
  top -50px
  left 50%
  transform: translate(-50%);

.introduceContainer
  background-color: #1B1C1D
  border-radius 12px
  margin 0 18px
  padding 0 29px 46px
  position relative
  width fit-content

.introduceTitle
  font-weight bold
  color $brand-2
  margin-top 112px
  margin-bottom 15px

.introduceText
  color $text-7

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class HomeIntroduce extends Vue {

  get introduces() {
    return [
      {
        img: require('@/assets/images/home/cutting-edge-technology.png'),
        title: 'Cutting Edge Technology',
        text: 'We’re powered by a proprietary Artificial Intelligence (AI) and Machine Learning (ML) engine that ensures attacks are stopped before they can affect your business.',
      },
      {
        img: require('@/assets/images/home/easy-to-deploy.png'),
        title: 'Easy to Deploy',
        text: 'Deploying Polaris only requires a simple change to the the domain’s name servers or CNAME before it begins protecting your website immediately.',
      },
      {
        img: require('@/assets/images/home/easy-to-use.png'),
        title: 'Easy to Use',
        text: 'The intuitive dashboard makes information easy to access, interpret, and act upon, even for those who are new to cybersecurity. Security rules are easy to customize with just a few clicks.',
      },
    ];
  }

}
</script>
