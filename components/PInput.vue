<template>
  <div>
    <b-form-input :type="type"
                  :required="required"
                  :value="value"
                  :placeholder="placeholder"
                  class="input-normal"
                  @input="$emit('input', $event)"/>
    <small style="color: #8d8989">{{ hint }}</small>
  </div>
</template>

<style module lang="stylus">

</style>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";

@Component({})
export default class PInput extends Vue {
  @Prop({type:String, default: ''}) value: string;
  @Prop({type:String}) type: string;
  @Prop({type:String}) placeholder: string;
  @Prop({type:String}) hint: string;
  @Prop({type:Boolean, default: false}) required: boolean;

}
</script>


