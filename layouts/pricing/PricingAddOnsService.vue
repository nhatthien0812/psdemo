<template>
  <div :class="$style.addonContainer">
    <div class="row" :class="$style.tableHeader">
      <div :class="$style.headerItem" class="col-sm-3"></div>
      <div :class="$style.headerItem" class="col">Professional</div>
      <div :class="$style.headerItem" class="col">Enterprise</div>
    </div>
    <div class="row">
      <div class="col-sm-3"/>
      <template v-for="type in billingCycle">
        <div :key="type.type" class="col">
          <div v-if="!isNaN(type.price)" class="d-inline-flex align-items-center">
            <h4 :class="$style.price">${{ type.price }}</h4>
            <div :class="$style.priceDetail">
              <div>per domain</div>
              <div>per {{ isMonthlyType ? 'month' : 'year' }}</div>
            </div>
          </div>
          <div v-else :class="$style.customPricing">Custom Pricing</div>
          <p-button :gradient="3"
                    :class="$style.btn"
                    text="Get Started"
                    :show-icon="false"
                    @click="onClick"/>
        </div>
      </template>
    </div>
    <template v-for="type in serviceTypes">
      <div :class="$style.typeContainer" :key="type.title">
        <div class="row">
          <div @click="type.isExpand = !type.isExpand" :class="$style.typeTitle" class="body-2 col-sm-3 d-inline-flex align-items-end justify-content-between">
            <div>{{ type.title }}</div>
            <img :src="type.isExpand ? iconExpand.collapse : iconExpand.expand" alt="" width="24" height="24">
          </div>
          <div class="col"/>
          <div class="col"/>
        </div>
        <template v-if="type.isExpand" v-for="child in type.child">
          <div :key="child.title" class="row" :class="$style.childContainer">
            <div class="col-sm-3 caption d-inline-flex align-items-end justify-content-between"
                 :class="$style.childTitle">
              <div>{{ child.title }}</div>
            </div>
            <template v-for="support in child.supports">
              <div class="col d-inline-flex align-items-end">
                <img v-if="support.isSupport" src="@/assets/icons/done.png" alt="" width="24" height="24">
                <span :class="$style.supportInfo">{{ support.info }}</span>
              </div>
            </template>
            <div class="col-sm-12">
              <hr :class="$style.hr">
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"

.addonContainer
  padding 24px
  border-radius 12px
  background linear-gradient(0deg, #1B1C1D, #1B1C1D)
  margin-top 35px

  .typeContainer:last-child
    margin-bottom 0

.childContainer
  margin-top 15px

.customPricing
  font-size 14px
  line-height 32px !important
  color $text-8
  font-weight 500
  padding 3px 0

.tableHeader
  margin-bottom 15px

.headerItem
  color $text-8
  align-items center

  &:not(:first-child)
    font-size 20px
    line-height 32px
    font-weight bold

.childTitle
  color $text-5

.hr
  margin-bottom 5px
  margin-top 8px
  border 0.5px solid #93A1B4

.supportInfo
  font-size 14px
  line-height 22px
  color $text-8
  margin-left 8px

.btn
  width 100%
  padding-top 10px
  padding-bottom 10px
  margin-top 15px
  margin-bottom 20px

.price
  color $text-8
  margin-bottom 0
  margin-right: 10px

.priceDetail
  font-size 12px
  line-height 16px
  color $text-6

.customPricing
  font-size 14px
  line-height 22px
  color $text-8

.typeContainer
  margin-bottom 40px

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

</style>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class PricingAddOnsService extends Vue {
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
        type: 'Professional',
        price: this.isMonthlyType ? 17 : 167,
      },
      {
        type: 'Enterprise',
        price: 'Custom Pricing',
      },
    ];
  }

  @Watch('isExpandAll', {deep: true, immediate: true})
  onExpandChange() {
    this.serviceTypes.forEach((type: any) => type.isExpand = this.isExpandAll);
  }

  serviceTypes: any = [
    {
      title: 'Active Monitoring',
      isExpand: true,
      child: [
        {
          title: '24/7 real-time monitoring by SOC analysts',
          supports: [
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
          title: 'Vulnerability management',
          supports: [
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
          title: 'Customized threat detection',
          supports: [
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
          title: 'Log management',
          supports: [
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
      ],
    },
    {
      title: 'False Positives Management',
      isExpand: true,
      child: [
        {
          title: 'Incident validation to filter real threats',
          supports: [
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
          title: 'Selective customer notification',
          supports: [
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
      ],
    },
    {
      title: 'Incident Handling',
      isExpand: true,
      child: [
        {
          title: 'Automatic response to threats',
          supports: [
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
          title: 'Remote containment and eradication of confirmed breaches',
          supports: [
            {
              isSupport: true,
              info: '1/year',
            },
            {
              isSupport: true,
              info: '2/year',
            },
          ],
        },
        {
          title: 'Malware sandbox analysis',
          supports: [
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
          title: 'IOC validation',
          supports: [
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
          title: 'Custom rule updates based on analysis',
          supports: [
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
      ],
    },{
      title: 'Summary Reports',
      isExpand: true,
      child: [
        {
          title: 'Customized reporting with recommendations for remediation',
          supports: [
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
          title: 'Targeted Threat Intelligence reporting',
          supports: [
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
      ],
    },
    {
      title: 'Trusted Advisory',
      isExpand: true,
      child: [
        {
          title: 'Dedicated Polaris technical advisor for day-to-day issues',
          supports: [
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
          title: 'Support for Executive Management meetings',
          supports: [
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
          title: 'Consultation on implementation of new security devices',
          supports: [
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
          title: 'Scheduled Consultations',
          supports: [
            {
              isSupport: true,
              info: 'Quarterly',
            },
            {
              isSupport: true,
              info: 'Upon Request',
            },
          ],
        },
      ],
    },
  ];

  onClick() {
    window.open('https://polarisec.io/', '_blank');
  }
}
</script>
