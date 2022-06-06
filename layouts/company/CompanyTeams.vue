<template>
  <div class="container-fluid px-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <div class="row">
        <div class="col-sm-3 px-0">
          <h2>Leadership</h2>
        </div>
        <div class="col-sm-1 px-0"/>
        <div class="col-sm-8 px-0">
          <div class="row justify-content-center">
            <template v-for="leader in leaderships">
              <div :key="leader.name" class="col-sm-6 col-lg-5  d-inline-flex align-items-center mr-4"
                   :class="$style.leaderContainer">
                <img :src="leader.img" alt="" width="87" height="87">
                <div class="ml-3">
                  <div :class="$style.name" class="body-1 mb-1">{{ leader.name }}</div>
                  <div :class="$style.position">{{ leader.position }}</div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="row" :class="$style.advisorContainer">
        <div class="col-sm-3 px-0">
          <h2>Strategic Advisors</h2>
        </div>
        <div class="col-sm-1 px-0"/>
        <div class="col-sm-8 px-0">
          <div class="row justify-content-center">
            <template v-for="advisor in advisors">
              <div :key="advisor.name" class="col-sm-5  d-inline-flex align-items-center mr-4"
                   :class="$style.leaderContainer">
                <img :src="advisor.img" alt="" width="87" height="87">
                <div class="ml-3">
                  <div :class="$style.name" class="body-1 mb-1">{{ advisor.name }}</div>
                  <div :class="$style.position">{{ advisor.position }}</div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-image url("@/assets/images/company/team-background.png")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

.bodyContainer
  padding 93px 152px 121px 145px

  h2
    color $text-8

.leaderContainer
  margin-bottom 30px
  border-radius 18px
  background: #141414;
  box-shadow: 0 0 19.5012px rgba(0, 0, 0, 0.25);
  padding 18px 16px

.advisorContainer
  margin-top 69px

.position
  color $text-3
  font-size 14px
  line-height 25px

.name
  color $text-8

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({})
export default class CompanyTeams extends Vue {

  get leaderships() {
    return [
      {
        name: 'Tin Nguyen',
        position: 'CEO, Co-Founder',
        img: require('@/assets/images/company/tin-nguyen.png'),
      },
      {
        name: 'Thanh Nguyen',
        position: 'Chairman, Co-Founder',
        img: require('@/assets/images/company/thanh-nguyen.png'),
      },
      {
        name: 'Heng Yu Lee',
        position: 'Head of Business Development, APAC',
        img: require('@/assets/images/company/heng-yu-lee.png'),
      },
      {
        name: 'Chuan Kai Toh',
        position: 'Head of Sales, APAC',
        img: require('@/assets/images/company/chuan-kai-toh.png'),
      },
      {
        name: 'Van Hoa Nguyen',
        position: 'Head of Product Development',
        img: require('@/assets/images/company/van-hoa-nguyen.png'),
      },
      {
        name: 'Vinh Nguyen',
        position: 'Head of Engineering',
        img: require('@/assets/images/company/vinh-nguyen.png'),
      },
      {
        name: 'Thuan Le',
        position: 'Product Development Manager',
        img: require('@/assets/images/company/thuan-le.png'),
      },
      {
        name: 'Nhu Le',
        position: 'Business Development Manager',
        img: require('@/assets/images/company/nhu-le.png'),
      },
    ];
  }

  get advisors() {
    return [
      {
        name: 'Michael Smith',
        position: 'Advisor',
        img: require('@/assets/images/company/michael-smith.png'),
      },
      {
        name: 'Quynh Anh Nguyen',
        position: 'Advisor',
        img: require('@/assets/images/company/quynh-anh-nguyen.png'),
      }
    ];
  }

}
</script>
