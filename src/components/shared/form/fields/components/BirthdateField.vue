<template>
  <custom-date-picker
      v-model="mutableValue"
      label="Въезд"
  />
</template>

<script>
import CustomDatePicker from "../../input/components/CustomDatePicker";
import field from "../models/field";

export default {
  name: "EntryField",
  components: {
    CustomDatePicker
  },
  mixins: [field]
}
</script>