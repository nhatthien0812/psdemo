<template>
  <div :class="$style.contactMain">
    <div :class="$style.contactSection" class="app-width">
      <div class="pb-4">
        <h1>Contact us</h1>
      </div>
      <div class="pt-1">
        <p class="text-6">
          Get in touch with us about our products and services.
        </p>
      </div>
      <div class="pl-3" :class="$style.form">
        <b-form @submit="onSubmit">
          <b-row>
            <b-col cols="4" class="p-0 pr-20px">
              <b-form-input v-model="name" placeholder="Your Name *" required class="input-normal"></b-form-input>
            </b-col>
            <b-col cols="4" class="p-0">
              <b-form-input v-model="website" required placeholder="Your Website *" class="input-normal"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4" class="p-0 pr-20px">
              <b-form-input v-model="email" placeholder="Your Email *" type="email" required
                            class="input-normal"></b-form-input>
            </b-col>
            <b-col cols="4" class="p-0">
              <b-form-input v-model="phone" placeholder="Your Phone" class="input-normal"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4" class="p-0 pr-20px">
              <b-form-input v-model="company" placeholder="Your Company" class="input-normal"></b-form-input>
            </b-col>
            <b-col cols="4" class="p-0">
              <b-form-input v-model="role" placeholder="Your Role" class="input-normal"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="8" class="p-0">
              <b-form-select v-model="topic" :options="options" required class="input-normal"
                             :class="placeHolderSelect">
                <template #first>
                  <b-form-select-option value="" disabled hidden>Your Topic *
                  </b-form-select-option>
                </template>
              </b-form-select>
            </b-col>
            <b-col cols="8" class="p-0">
              <b-form-textarea
                id="textarea"
                v-model="message"
                required
                placeholder="Your Message *"
                rows="3"
                max-rows="6"
                class="input-normal"
                :class="$style.messageInput"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-row>
            <p-button :class="$style.sendMessageBtn" :gradient="1" type="submit" text="Send Message"
                      variant="primary"></p-button>
          </b-row>
          <b-row>
            <div :class="$style.comingsoon" class="col-sm-12 px-0 mt-3">* Required</div>
            <div :class="$style.comingsoon" class="col-sm-12 px-0 mt-1">** All personal data is safeguarded under
              privacy and support policies.
            </div>
          </b-row>
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
@import "../styles/main.styl"
.placeHolderSelect
  color #6c757a !important
  option
    color white !important

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

.comingsoon
  font-size 12px
  line-height 16px
  font-weight 300
  font-style italic
  color $text-4
  margin-top 10px

.sendMessageBtn
  height 54px
  width 199px
  font-size 16px
  line-height 21px
  font-weight 600

.messageInput
  height 245px !important

.contactSection
  padding 120px 98px 0 122px
  height 1081px

.contactMain
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: center
  background-size cover
  background-image url("assets/background/contact-bg.png")
</style>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import PButton from "~/components/PButton.vue";

@Component({
  components: {
    PButton
  }
})
export default class Contact extends Vue {
  name: string = '';
  website: string = '';
  email: string = '';
  phone: string = '';
  company: string = '';
  role: string = '';
  topic: string = '';
  message: string = '';

  dismissSecs: number = 5;
  dismissCountDown: number = 0;
  alert: string = '';
  statusType: string = '';

  get options() {
    return [
      {
        value: 'Request a demo',
        text: 'Request a demo'
      }, {
        value: 'Technical support',
        text: 'Technical support'
      }, {
        value: 'Contact sales',
        text: 'Contact sales'
      }, {
        value: 'Others',
        text: 'Others'
      },
    ]
  }


  countDownChanged(dismissCountDown: any) {
    this.dismissCountDown = dismissCountDown
  }

  showAlert() {
    this.dismissCountDown = this.dismissSecs
  }

  get head() {
    return {
      title: 'Polaris Web Protection & Cyber Security | Contact Us'
    }
  }

  showButton() {
    return !!this.name && !!this.website && !!this.email && !!this.phone && !!this.company && !!this.role && !!this.topic && !!this.message;
  }

  async onSubmit(event: any) {
    event.preventDefault();
    if (!this.showButton) return;

    const response = await this.$axios.$post('https://polarisec.io/api/contact-us', {
      'name': this.name,
      'email': this.email,
      'phone': this.phone,
      'company': this.company,
      'position': this.role,
      'topic': this.topic,
      'website': this.website,
      'message': this.message,
    });

    if (response.success) {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.company = '';
      this.role = '';
      this.topic = '';
      this.website = '';
      this.message = '';
      this.alert = 'Thanks, message received. We will get back to you soon';
      this.statusType = 'success';
    } else {
      this.alert = response.message;
      this.statusType = 'error';
    }

    this.showAlert();
  }

  get placeHolderSelect() {
    if (!this.topic) {
      return this.$style.placeHolderSelect;
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
