<template>
  <div :class="$style.questionsPanel" id="questions">
    <div :class="$style.questionsSection" class="d-flex app-width">
      <introduction :class="$style.introduction"/>
      <question v-if="step === 1" class="col-8" :step="step" :answers="question1.answers" :question="question1.question"
                @nextStep="nextStep" @previousStep="previousStep"/>
      <question v-if="step === 2" class="col-8" :step="step" :answers="question2.answers" :question="question2.question"
                @nextStep="nextStep" @previousStep="previousStep"/>
      <question v-if="step === 3" class="col-8" :step="step" :answers="question3.answers" :question="question3.question"
                @nextStep="nextStep" @previousStep="previousStep"/>
    </div>
  </div>
</template>
<style module lang="stylus">
.introduction
  max-width 354px

.questionsSection
  padding-left 152px
  box-sizing border-box
  min-height 761px

.questionsPanel
  background-color #0F0F0F

</style>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import Introduction from "~/layouts/question/Introduction.vue";
import Question from "~/layouts/question/Question.vue";

@Component({
  components: {Question, Introduction}
})
export default class Questions extends Vue {
  step: number = 1;
  question1: any = {
    question: 'How many domains (webpages) does your organization manage?',
    answers: [
      'Just 1', '2-5', 'I have a lot!'
    ]
  }

  question2: any = {
    question: 'Do you have your own IT team?',
    answers: [
      'Yep.', 'No, but maybe one day...', 'What’s an IT team?'
    ]
  }

  question3: any = {
    question: 'How critical is your website to your operations?',
    answers: [
      'It’s mostly personal', 'It’s mostly for information and promotions', 'It’s important for business operations', 'It’s absolutely vital to my business operations'
    ]
  }

  nextStep(step: number) {
    this.step = step;
  }

  previousStep(step: number) {
    this.step = step;
  }
}
</script>

