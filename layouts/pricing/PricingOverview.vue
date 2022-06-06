<template>
  <div class="container-fluid px-0">
    <div :class="$style.container" class="row">
      <div class="px-0 col-sm-12">
        <h2 class="pl-4">Pricing</h2>
        <div class="body-2 pl-4">Save 20% with our Yearly payment plan</div>
        <div :class="$style.pricingContainer" class="p-4">
          <div class="row" :class="$style.tableHeader">
            <div @click="onChangeExpand(!isExpandAll)" :class="$style.headerItem" class="col-sm-3 body-2 d-inline-flex align-items-center justify-content-between">
              <div>Billing cycle</div>
              <img :src="isExpandAll ? iconExpand.collapse : iconExpand.expand" alt="" width="24" height="24">
            </div>
            <div :class="$style.headerItem" class="col">Basic</div>
            <div :class="$style.headerItem" class="col">Standard</div>
            <div :class="$style.headerItem" class="col">Professional</div>
            <div :class="$style.headerItem" class="col">Enterprise</div>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <div class="d-inline-flex align-items-center">
                <div @click="onChangeType(true)" :class="[$style.selectType, isMonthlyType && $style.active]"
                     class="mr-1">
                  Monthly
                </div>
                <div @click="onChangeType(false)" :class="[$style.selectType, !isMonthlyType && $style.active]">
                  Yearly
                </div>
              </div>
            </div>
            <template v-for="type in billingCycle">
              <div :key="type.type" class="col">
                <div class="d-inline-flex align-items-center">
                  <h4 :class="$style.price">{{ !isNaN(type.price) ? '$' : '' }}{{ type.price }}</h4>
                  <div :class="$style.priceDetail" v-if="!isNaN(type.price)">
                    <div>per domain</div>
                    <div>per {{ isMonthlyType ? 'month' : 'year' }}</div>
                  </div>
                </div>
                <p-button :gradient="3"
                          :class="$style.btn"
                          :text="type.button_text"
                          :show-icon="false"
                          @click="type.action"/>
              </div>
            </template>
          </div>
          <template v-for="type in functionTypes">
            <div :class="$style.typeContainer" :key="type.title">
              <div class="row">
                <div @click="type.isExpand = !type.isExpand" :class="$style.typeTitle"
                     class="body-2 d-inline-flex align-items-center justify-content-between col-sm-3">
                  <div>{{ type.title }}</div>
                  <img :src="type.isExpand ? iconExpand.collapse : iconExpand.expand" alt="" width="24" height="24">
                </div>
                <div class="col"/>
                <div class="col"/>
                <div class="col"/>
                <div class="col"/>
              </div>
              <template v-if="type.isExpand" v-for="child in type.child">
                <div :key="child.title" class="row" :class="$style.childContainer">
                  <div class="col col-sm-3 caption d-inline-flex align-items-center justify-content-between"
                       :class="$style.childTitle">
                    <div>{{ child.title }}</div>
                    <img v-if="child.info" :class="$style.img" :src="child.isExpand ? icons.close : icons.info"
                         @click="child.isExpand = !child.isExpand"
                         alt="" width="24" height="24">
                  </div>
                  <template v-for="support in child.supports">
                    <div class="col d-inline-flex align-items-center">
                      <img v-if="support.isSupport" src="@/assets/icons/done.png" alt="" width="24" height="24">
                      <span :class="$style.supportInfo">{{ support.info }}</span>
                    </div>
                  </template>
                  <div class="col-sm-12">
                    <hr :class="$style.hr">
                  </div>
                </div>
                <div v-if="child.isExpand" class="row">
                  <div class="col col-sm-3" :class="$style.childInfo">{{ child.info }}</div>
                  <div class="col"/>
                  <div class="col"/>
                  <div class="col"/>
                  <div class="col"/>
                </div>
              </template>
              <div v-if="type.isComingSoon && type.isExpand" :class="$style.comingsoon">*Coming Soon</div>
            </div>
          </template>
        </div>
        <div class="d-inline-flex align-items-center justify-content-between" :class="$style.needHelpContainer">
          <div>
            <h5>Need help with choosing a package?</h5>
            <h5>Get a personalized recommendation</h5>
          </div>
          <p-button text="Answer 3 Easy Questions" @click="onClick"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.container
  background-color: $background-1

.img
  cursor pointer

.pricingContainer
  background $background-2
  border-radius 12px
  margin-top 35px

  .typeContainer:last-child
    margin-bottom 4px

.childContainer
  margin-top 15px

.btn
  width 100%
  padding-top 10px
  padding-bottom 10px
  margin-top 15px
  margin-bottom 10px

.price
  color $text-8
  margin-bottom 0
  margin-right: 10px

.priceDetail
  font-size 12px
  line-height 16px
  color $text-6

.selectType
  font-size 13px
  line-height 13px
  width 82px
  padding-top: 6px;
  padding-bottom 6px
  text-align center
  cursor pointer

  a
    color $text-8

.active
  border-radius 2px
  background-color: #3D3F44

.tableHeader
  margin-bottom 15px

.headerItem
  color $text-8
  align-items center

  &:first-child
    font-size 16px
    line-height 26px
    cursor pointer

  &:not(:first-child)
    font-size 20px
    line-height 32px
    font-weight bold

.typeTitle
  color $text-8
  cursor pointer

.childTitle
  color $text-5

.childInfo
  font-size 12px
  line-height 20px
  color $text-5
  margin-top 10px

.hr
  margin-bottom 0
  margin-top 12px
  border 0.5px solid #93A1B4

.typeContainer
  margin-bottom 40px

.supportInfo
  font-size 14px
  line-height 22px
  color $text-8
  margin-left 8px

.needHelpContainer
  padding 22px 29px
  background-color: #3D3F44
  border-radius 8px
  margin-top 70px
  margin-bottom 70px
  width 100%

  h5
    color $text-8
    margin-bottom 0

.comingsoon
  font-size 12px
  line-height 16px
  font-weight 300
  font-style italic
  color $text-4
  margin-top 15px

</style>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class PricingOverview extends Vue {
  @Prop({default: true, type: Boolean, required: true}) isMonthlyType: boolean;
  @Prop({default: true, type: Boolean, required: true}) isExpandAll: boolean;


  get icons() {
    return {
      'close': require('@/assets/icons/close.png'),
      'info': require('@/assets/icons/info.png')
    }
  }

  get iconExpand() {
    return {
      'expand': require('@/assets/icons/expand.png'),
      'collapse': require('@/assets/icons/collapse.png')
    }
  }

  get billingCycle() {
    return [
      {
        type: 'Basic',
        price: 0,
        button_text: 'Get Started',
        action: () => this.goPolaris(),
      },
      {
        type: 'Standard',
        price: this.isMonthlyType ? 17 : 163,
        button_text: 'Get Started',
        action: () => this.goPolaris(),
      },
      {
        type: 'Professional',
        price: this.isMonthlyType ? 185 : 1776,
        button_text: 'Get Started',
        action: () => this.goPolaris(),
      },
      {
        type: 'Enterprise',
        price: 'Contact us',
        button_text: 'Request a Demo',
        action: () => this.goContact(),
      },
    ];
  }

  goContact() {
    this.$router.push({path: '/contact'});
  }

  goPolaris() {
    window.open('https://polarisec.io/', '_blank');
  }

  @Watch('isExpandAll', {deep: true, immediate: true})
  onExpandChange() {
    this.functionTypes.forEach((type: any) => type.isExpand = this.isExpandAll);
  }

  functionTypes: any = [
    {
      title: 'API Security',
      isExpand: true,
      child: [
        {
          title: 'API Specification Protection',
          info: 'Protect connections that other applications and platforms use to connect to your domain',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '5',
            },
            {
              isSupport: true,
              info: 'Custom',
            },
          ],
        },
      ]
    },
    {
      title: 'App Security',
      isExpand: true,
      child: [
        {
          title: 'IP Geolocation',
          info: 'Block or allow IP addresses from certain countries',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'IP Blacklist/Whitelist',
          info: 'List specific IP addresses that are blocked or allowed',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Custom Rules',
          info: 'Customize your security rules for specific threats or actions',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '5 Rules',
            },
            {
              isSupport: true,
              info: '50 Rules',
            },
            {
              isSupport: true,
              info: 'Custom',
            },
          ],
        },
        {
          title: 'OWASP Top 10 Attack Protection',
          info: 'Attack protection against the globally recognized top 10 attack risks',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'New Attack Vectors - Zero One Day',
          info: 'Protection against the latest vulnerabilities that were previously unknown',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'NDay Rules - Application Rules',
          info: 'Protection against known vulnerabilities that have already been exposed, vulnerabilities that may or may not have been patched already',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Static Content Caching',
          info: 'Depending on where users are accessing your page from, a copy of your site is stored on servers for faster loading',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Security Header / CORS Policy',
          info: 'Control what data and resources can be shared with other 3rd parties',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'CSP Header',
          info: 'Restrict how resources such as Javascript load on your page',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'HTTP/2',
          info: 'Utilize the latest version of the HTTP protocol which allows web users to connect to web servers',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
    {
      title: 'BOT Management',
      isExpand: true,
      isComingSoon: true,
      child: [
        {
          title: 'Anti-bot protection',
          info: 'Use hCaptcha to determine whether users are bots or humans',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: 'Advanced',
            },
          ],
        },
        {
          title: 'Advanced Bot Management*',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: 'Custom',
            },
          ],
        },
        {
          title: 'Whitelist Good Bots',
          info: 'Allow the use of bots that may have legitimate reasons for roaming your site',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
    {
      title: 'DDoS',
      isExpand: true,
      child: [
        {
          title: 'DDoS Mitigation (L7 & L3/4)',
          info: 'Protection against attacks on multiple network layers that reduce site operability',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: 'Up to 1.5 Gbps',
            },
            {
              isSupport: true,
              info: 'Up to 7.5 Gbps',
            },
            {
              isSupport: true,
              info: 'Custom Pricing (Up to 2 Tbps)',
            },
          ],
        },
        {
          title: 'Enterprise DDoS Mitigation (Hybrid)',
          info: 'Protection against DDoS attacks in both the cloud and on-premise server environments',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
    {
      title: 'Small Business Expertise',
      isExpand: true,
      child: [
        {
          title: 'CNAME support',
          info: 'Support for all domain aliases that point to your original domain name',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'DNS Management',
          info: 'Manage your own DNS records, choosing what servers are used to support your website for a better user experience and operational efficiency',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'DNSSEC',
          info: 'Attach digital signature records to your DNS information for added security',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'SSL Auto-generation',
          info: 'Automatically create authenticated and encrypted links between network systems',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Custom SSL',
          info: 'Customize the digital document that binds the identity of a website to a cryptographic key pair and that provides your website\'s identifying information',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
    {
      title: 'Management - Monitoring Reporting',
      isExpand: true,
      child: [
        {
          title: 'Reporting',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: 'Basic',
            },
            {
              isSupport: true,
              info: 'Basic',
            },
            {
              isSupport: true,
              info: 'Advanced',
            },
            {
              isSupport: true,
              info: 'Custom',
            },
          ],
        },
        {
          title: 'Polaris API Access',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Realtime Dashboard',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Multi-User Management',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Incident Management Ticket System',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Email/browser Alert Notifications',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Request Logs',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Audit Logs',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
    {
      title: 'Scalability & Geographic Presence',
      isExpand: true,
      child: [
        {
          title: 'BGP Anycast Network',
          info: 'Always have your web traffic routed through the nearest server',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'China Mainland Access',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Regional PoPs',
          info: 'Utilize edge servers located all over the globe',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Dedicated Edge',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: 'Custom Pricing',
            },
          ],
        },
      ]
    },
    {
      title: 'Service Level Agreement',
      isExpand: true,
      child: [
        {
          title: 'Emergency Hotline',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Chat',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Email',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: '8 x 5 x Next Business Day',
          info: 'Response 8 hours a day, 5 days a week by the Next Business Day',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: '24 x 7 x 4',
          info: 'Response 24 hours a day, 7 days a week within 4 hours',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: '24 x 7 x 365 x 4',
          info: 'Full 24/7, 365 days coverage within 4 hours',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: '99.99% Uptime',
          info: 'Only applicable to Cloud deployments',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
    {
      title: 'Technical Architecture',
      isExpand: true,
      child: [
        {
          title: 'Cloud Deployment',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'On-premise Deployment',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Hybrid Cloud and On-premise Deployment',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Threat Intelligence',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: 'Paid Add-on',
            },
            {
              isSupport: true,
              info: 'Paid Add-on',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
        {
          title: 'Zero Trust Access',
          info: '',
          isExpand: false,
          supports: [
            {
              isSupport: false,
              info: '',
            },
            {
              isSupport: true,
              info: 'Paid Add-on',
            },
            {
              isSupport: true,
              info: 'Paid Add-on',
            },
            {
              isSupport: true,
              info: '',
            },
          ],
        },
      ]
    },
  ];

  onChangeType(isMonthly: boolean) {
    this.$nuxt.$emit('update-type', isMonthly);
  }

  onChangeExpand(isExpandAll: boolean) {
    this.$nuxt.$emit('update-expand', isExpandAll);
  }

  onClick() {
    this.$router.push({path: '/questions'});
  }

}
</script>
