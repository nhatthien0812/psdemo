<template>
  <div>
    <div :class="$style.introPanel">
      <div class="app-width" :class="$style.introSection">
        <h2>Here’s your personalized recommendation</h2>
        <p class="text-6">
          Based on the type of website you have and your needs, we recommend the following plan and add-ons.
        </p>
        <nuxt-link to="/questions">
          <p :class="$style.action" class="brand-2">
            Start over ->
          </p>
        </nuxt-link>
      </div>
    </div>

    <div :class="$style.recommendedPlanPanel">
      <div class="app-width d-flex" :class="$style.recommendedPlanSection">
        <div class="col-3 mr-5">
          <p class="text-6">
            Recommended Plan
          </p>
          <div class="mb-4 mt-4 divide"></div>
          <p class="text-8 pt-2">
            {{ planLeftAttribute }} <span v-if="planRightAttribute">+</span> {{ planRightAttribute }}
          </p>
          <p class="text-6 pb-3">
            Advanced features and dedicated support.
          </p>
          <div class="mb-4 mt-4 divide"></div>
          <h5 class="fw-800">
            Contact sales
          </h5>
          <p-button class="col-12 mt-5" :gradient="1" text="Next" @click="onClick"/>
        </div>
        <div v-if="planRightAttribute === 'Add-On'" class="col-5 ml-5">
          <p class="text-6 pb-3">
            ADD-ONS AND PRODUCT RECOMMENDATIONS
          </p>
          <div :class="$style.box">
            <p class="body-1 font-weight-bold">
              {{ addOn }}
            </p>
            <nuxt-link to="/cyber-security-web-protection-pricing">
              <p class="brand-2" :class="$style.action">
                Learn more ->
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style module lang="stylus">
.box
  width 353px
  height 154px
  border 0.25px solid #8BDFAF
  border-radius 12px
  box-sizing border-box
  left: 41.67%;
  right: 33.82%;
  top: 35.17%;
  bottom: 54.64%;
  background-color #1B1C1D
  padding 16px 0 0 18px

.action
  font-weight 600
  font-size 16px
  line-height 21px

.introSection
  padding 76px 0 82px 166px

.introPanel
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-image url("assets/background/recommendation-bg.png")

.recommendedPlanSection
  padding 59px 0 185px 152px

.recommendedPlanPanel
  background-color #0F0F0F

</style>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import Introduction from "~/layouts/question/Introduction.vue";
import Question from "~/layouts/question/Question.vue";
import PButton from "~/components/PButton.vue";

@Component({
  components: {PButton, Question, Introduction}
})
export default class Recommendation extends Vue {
  planLeftAttribute: string = '';
  planRightAttribute: string = '';
  addOn: string = '';

  created() {
    const question1 = localStorage.getItem('question1');
    const question2 = localStorage.getItem('question2');
    const question3 = localStorage.getItem('question3');

    if (!question1 || !question2 || !question3) {
      return this.$router.push({path: '/questions'})
    }

    this.recommendation(question1, question2, question3);
  }

  recommendation(question1: string, question2: string, question3: string) {
    if (question1 === 'I have a lot!') {
      this.planLeftAttribute = 'Enterprise';
      this.planRightAttribute = 'Add-On';
      this.addOn = 'Enterprise - Managed Security Services - Zero Trust'
    } else {
      switch (question3) {
        case 'It’s mostly personal':
          this.planLeftAttribute = 'Basic';
          break;
        case 'It’s mostly for information and promotions':
          this.planLeftAttribute = 'Standard';
          break;
        case 'It’s important for business operations':
          this.planLeftAttribute = 'Professional';
          break;
        case 'It’s absolutely vital to my business operations':
          this.planLeftAttribute = 'Enterprise';
          break;
      }

      if (question2 === 'No, but maybe one day...' || question2 === 'What’s an IT team?') {
        this.planRightAttribute = 'Add-On';
        switch (this.planLeftAttribute) {
          case 'Enterprise':
            this.addOn = 'Managed Security Services';
            break;
          case 'Standard':
            this.addOn = 'Zero Trust';
            break;
          case 'Professional':
            this.addOn = 'Managed Security Services - Zero Trust';
            break;
          default:
            this.planRightAttribute = '';
            this.addOn = 'None'
        }
      }
    }
  }

  onClick() {
    this.$router.push({path: '/contact'});
  }
}
</script>

