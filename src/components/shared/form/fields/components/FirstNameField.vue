<template>
  <custom-text-input
      v-model="mutableValue"
      label="Имя"
  />
</template>

<script>
import CustomTextInput from "../../input/components/CustomTextInput";
import field from "../models/field";

export default {
  name: "FirstNameField",
  components: {
    CustomTextInput,
  },
  mixins: [field]
}
</script>