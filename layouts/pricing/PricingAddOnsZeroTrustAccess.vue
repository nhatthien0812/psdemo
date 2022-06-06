<template>
  <div :class="$style.addonContainer" class="row">
    <div class="col-sm-4 pl-0">
      <div :class="$style.title">Standard / Professional</div>
      <div class="d-inline-flex justify-content-center align-items-center">
        <h4 :class="$style.price">{{ isMonthlyType ? '$4' : "$52" }}</h4>
        <div :class="$style.priceDetail">
          <div>per user</div>
        </div>
      </div>
      <p-button :class="$style.btn"
                :show-icon="false"
                :gradient="3"
                text="Get Started"
                @click="onClick"/>
    </div>
    <div class="col" :class="$style.detailContainer">
      <template v-for="item in zeroTrustAccessAddOns">
        <div :key="item.title">
          <div :class="$style.itemTitle" class="body-2 color-text-8">{{ item.title }}</div>
          <template v-for="child in item.child">
            <div class="d-inline-flex justify-content-between align-items-center w-100">
              <div :class="$style.childTitle">{{ child.title }}</div>
              <img v-if="child.info" :src="child.isExpand ? icons.close : icons.info" @click="child.isExpand = !child.isExpand"
                   alt="" width="24" height="24">
            </div>
            <hr :class="$style.hr">
            <div v-if="child.info && child.isExpand" :class="$style.childInfo">{{child.info}}</div>
          </template>
        </div>
      </template>
    </div>
    <div :class="$style.comingsoon" class="col-sm-12 px-0">*Coming Soon</div>
    <div :class="$style.comingsoon" class="col-sm-12 px-0">*First 15 active users are free</div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.addonContainer
  padding 24px
  border-radius 12px
  background linear-gradient(0deg, #1B1C1D, #1B1C1D)
  margin-top 35px

  img
    cursor pointer

.itemTitle
  margin-top 20px

.price
  color $text-8
  margin-bottom 0
  margin-right: 10px

.priceDetail
  font-size 12px
  line-height 16px
  color $text-6

.detailContainer
  padding-left 35px
  padding-right 26px
  margin-top -20px

.btn
  width 100%
  margin-top 15px

.title
  font-size 20px
  line-height 32px
  font-weight 700
  color $text-8
  margin-bottom 15px

.comingsoon
  font-size 12px
  line-height 16px
  font-weight 300
  font-style italic
  color $text-4
  margin-top 10px

.childTitle
  color $text-5
  font-size 13px
  line-height 21px
  font-weight 400
  margin-top 15px

.childInfo
  color $text-5
  font-size 12px
  line-height 20px
  margin-top 10px

.hr
  margin-top 7px
  margin-bottom 0
  border: 0.5px solid $text-6

</style>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class PricingAddOnsZeroTrustAccess extends Vue {
  @Prop({default: true, type: Boolean, required: true}) isMonthlyType: boolean;

  get icons() {
    return {
      'close': require('@/assets/icons/close.png'),
      'info': require('@/assets/icons/info.png')
    }
  }

  zeroTrustAccessAddOns: any = [
    {
      title: 'Device Management',
      child: [
        {
          title: 'Endpoint Control',
          info: 'To secure their endpoints, users can set up applications that apply providers over specific user groups. Providers and groups can be used in all applications within their organizations. Tt also supports subdomains and paths which makes it easy for users to classify user groups.',
          isExpand: false,
        }
      ],
    },
    {
      title: 'Vendor Management',
      child: [
        {
          title: 'Service Provider Control',
          info: 'Allows users to use 3rd-party providers to manage user authentication and authorization. These providers are pre-configured OAuth 2.0 applications. Users only need OAuth credentials to set up a new provider. Currently, we only support Azure Active Directory and Google Cloud Platform.',
          isExpand: false,
        },
        {
          title: 'Single-Sign On (SSO)',
          info: '',
          isExpand: false,
        }
      ],
    },
    {
      title: 'Identity Access Management',
      child: [
        {
          title: 'User Roles',
          info: '',
          isExpand: false,
        },
        {
          title: 'Group Creation',
          info: '',
          isExpand: false,
        }
      ],
    },
    {
      title: 'Customization',
      child: [
        {
          title: 'Login Page Configuration',
          info: 'We made a simple and elegant login page for users. In case of customization, we offer you an on-demand theme editor. You also can preview your login page before making any changes.',
          isExpand: false,
        },
        {
          title: 'Custom Access Domain',
          info: 'You have to visit our domain polarisaccess.com to be verified by default. But you absolutely can replace it with your own domain. Remember that you need to change a few settings to use your custom access domain.',
          isExpand: false,
        }
      ],
    },
    {
      title: 'Bots Management',
      child: [
        {
          title: 'Customizable Captcha*',
          info: '',
          isExpand: false,
        }
      ],
    },
  ];

  onClick() {
    window.open('https://polarisec.io/', '_blank');
  }
}
</script>
