<template>
  <custom-text-input
      v-model="mutableValue"
      label="Фамилия"
  />
</template>

<script>
import CustomTextInput from "../../input/components/CustomTextInput";
import field from "../models/field";

export default {
  name: "LastNameField",
  components: {
    CustomTextInput,
  },
  mixins: [field]
}
</script>