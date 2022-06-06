<template>
  <div :class="$style.addonContainer">
    <div class="row" :class="$style.tableHeader">
      <div :class="$style.headerItem" class="col-sm-3"></div>
      <div :class="$style.headerItem" class="col">Basic</div>
      <div :class="$style.headerItem" class="col">Standard</div>
      <div :class="$style.headerItem" class="col">Professional</div>
      <div :class="$style.headerItem" class="col">Enterprise</div>
    </div>
    <template v-for="addon in addOns">
      <div class="row mt-4">
        <div class="col-sm-3 body-2 d-inline-flex align-items-start"
             :class="$style.childTitle">
          {{ addon.title }}
        </div>
        <template v-for="support in addon.supports">
          <div v-if="support.isInclude" class="col d-inline-flex align-items-start">
            <img src="@/assets/icons/done.png" alt="" width="24" height="24">
            <span :class="$style.supportInfo">Included</span>
          </div>
          <div v-else-if="support.isSupport" class="col">
            <div v-if="support.price" class="d-inline-flex align-items-start">
              <h4 :class="$style.price">${{ support.price }}</h4>
              <div :class="$style.priceDetail">
                <div>per {{addon.isPerUser ? 'user' : 'domain' }}</div>
                <div>per {{ isMonthlyType ? 'month' : 'year' }}</div>
              </div>
            </div>
            <div v-else :class="$style.customPricing">Custom Pricing</div>
            <p-button :class="$style.btn"
                      :gradient="3"
                      :show-icon="false"
                      :text="support.button_text"
                      @click="support.action"/>
          </div>
          <div v-else class="col"></div>
        </template>
        <div class="col-sm-12">
          <hr :class="$style.hr">
        </div>
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

  hr:last-child
    display none

  button:last-child
    margin-bottom 0

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
  margin-top 0
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

</style>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton}
})
export default class PricingAddOnsTable extends Vue {
  @Prop({default: true, type: Boolean, required: true}) isMonthlyType: boolean;

  get icons() {
    return {
      'close': require('@/assets/icons/close.png'),
      'info': require('@/assets/icons/info.png')
    }
  }

  goContact() {
    this.$router.push({path: '/contact'});
  }

  goPolaris() {
    window.open('https://polarisec.io/', '_blank');
  }

  get addOns() {
    return [
      {
        title: 'Professional - Managed Security Services',
        supports: [
          {
            isSupport: false,
            isInclude: false,
            price: '',
            button_text: '',
            action: () => {},
          },
          {
            isSupport: false,
            isInclude: false,
            price: '',
            button_text: '',
            action: () => {},
          },
          {
            isSupport: true,
            isInclude: false,
            price: this.isMonthlyType ? 17 : 167,
            button_text: 'Get Started',
            action: () => this.goPolaris(),
          },
          {
            isSupport: false,
            isInclude: false,
            price: '',
            button_text: '',
            action: () => {},
          },
        ],
      },
      {
        title: 'Enterprise - Managed Security Services',
        supports: [
          {
            isSupport: false,
            isInclude: false,
            price: '',
            button_text: '',
            action: () => {},
          },
          {
            isSupport: false,
            isInclude: false,
            price: '',
            button_text: '',
            action: () => {},
          },
          {
            isSupport: false,
            isInclude: false,
            price: '',
            button_text: '',
            action: () => {},
          },
          {
            isSupport: true,
            isInclude: false,
            price: '',
            button_text: 'Request a Demo',
            action: () => this.goContact(),
          },
        ],
      },
      {
        title: 'Threat Intelligence',
        supports: [
          {
            isSupport: false,
            isInclude: false,
            price: '',
            button_text: '',
            action: () => {},
          },
          {
            isSupport: true,
            isInclude: false,
            price: this.isMonthlyType ? 87 : 835,
            button_text: 'Get Started',
            action: () => this.goPolaris(),
          },
          {
            isSupport: true,
            isInclude: false,
            price: this.isMonthlyType ? 87 : 835,
            button_text: 'Get Started',
            action: () => this.goPolaris(),
          },
          {
            isSupport: true,
            isInclude: true,
            price: '',
            button_text: '',
            action: () => {},
          },
        ],
      },
      {
        title: 'Zero Trust Access',
        isPerUser: true,
        supports: [
          {
            isSupport: false,
            isInclude: false,
            price: '',
            button_text: '',
            action: () => {},
          },
          {
            isSupport: true,
            isInclude: false,
            price: this.isMonthlyType ? 4 : 42,
            button_text: 'Get Started',
            action: () => this.goPolaris(),
          },
          {
            isSupport: true,
            isInclude: false,
            price: this.isMonthlyType ? 4 : 42,
            button_text: 'Get Started',
            action: () => this.goPolaris(),
          },
          {
            isSupport: true,
            isInclude: true,
            price: '',
            button_text: '',
            action: () => {},
          },
        ],
      }
    ];
  }

}
</script>
