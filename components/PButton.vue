<template>
  <b-button :variant="variant"
            :type="type"
            v-bind="$attrs"
            v-on="$listeners"
            :class="[$style.button, classes]">
    {{ text }} <span v-if="showIcon" class="ml-2 d-inline-flex"><img src="@/assets/icons/union.png" alt="" width="14"
                                                                     height="12"></span>
  </b-button>
</template>

<style module lang="stylus">
@import "../styles/main.styl"

.button
  font-weight 500
  font-size 14px !important
  line-height 18px
  text-align center

.gradient1
  background $gradient-1
  padding 16px 32px

.gradient2
  background $gradient-2

.gradient3
  background $gradient-3
  padding 10px 20px

</style>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";

@Component({})
export default class PButton extends Vue {
  @Prop({type: String}) variant: string | undefined;
  @Prop({type: String}) text: string | undefined;
  @Prop({type: Number, default: 1}) gradient: number;
  @Prop({type: Boolean, default: true}) showIcon: boolean;
  @Prop({type: String}) type: string;

  get classes() {
    switch (this.gradient) {
      case 1:
        return this.$style.gradient1;
      case 2:
        return this.$style.gradient2;
      case 3:
        return this.$style.gradient3;
    }
  }

}
</script>


