<template>
  <div class="container-fluid p-0" :class="$style.container">
    <div class="app-width" :class="$style.bodyContainer">
      <h2>Sign up for our newsletter</h2>
      <h5>Be the first to receive new feature and product updates.</h5>
      <div class="row justify-content-center mx-0 col-12">
        <b-form
          @submit="onSubmit"
          class="d-flex justify-content-center col-12">
          <b-form-input v-model="email" placeholder="Your Email *" type="email" required
                        class="input-normal"></b-form-input>
          <p-button :class="$style.sendMessageBtn" :gradient="1" type="submit" text="Subscribe"
                    variant="primary"></p-button>
        </b-form>
      </div>

      <div class="d-flex justify-content-center">
        <b-alert
          :show="dismissCountDown"
          dismissible
          variant="warning"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
          :class="[$style.message, status]"
        >
          {{ alert }}
        </b-alert>
      </div>
    </div>
  </div>
</template>

<style module lang='stylus'>
@import "@/styles/config.styl"
.success
  background-color #8BDFAF
  border-color #8BDFAF

.error
  background-color red
  border-color red

.message
  position fixed
  bottom 0
  z-index 2
  color white

.container
  background-color: #0F0F0F;

.bodyContainer
  padding 58px 0 101px
  text-align center

  h2
    color $text-8

  h5
    font-weight normal
    color $text-6
    margin-top 19px
    margin-bottom 49px

  button
    height fit-content
    margin-left 24px

  input
    background: #374b61 !important
    font-size: 1.125rem
    border-radius: 4px;
    width: 280px
    height 52px
    color white !important

.textContainer
  padding-right 60px

</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from "~/components/PButton.vue";
import PInput from "~/components/PInput.vue";

@Component({
  components: {PInput, PButton}
})
export default class HomeNewsletter extends Vue {
  email: string = '';
  dismissSecs: number = 5;
  dismissCountDown: number = 0;
  alert: string = '';
  statusType: string = '';

  countDownChanged(dismissCountDown: any) {
    this.dismissCountDown = dismissCountDown
  }

  showAlert() {
    this.dismissCountDown = this.dismissSecs
  }

  async onSubmit(event: any) {
    event.preventDefault();

    try {
      const ACTION_URL = 'https://polarisec.io/api/subscribe';
      let response = await this.$axios.$post(ACTION_URL, {
        email: this.email
      });

      if (response.success) {
        this.alert = 'Subscription successful!';
        this.statusType = 'success';
        this.email = '';
      } else {
        this.alert = response.message;
        this.statusType = 'error';
      }
      this.showAlert();
    } catch (e) {
      await this.$router.replace('/error-page')
    }
  }

  get status() {
    switch (this.statusType) {
      case 'success':
        return this.$style.success;
      case 'error':
        return this.$style.error;
    }
  }

}
</script>
