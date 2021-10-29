<template>
  <custom-date-picker
      v-model="mutableValue"
      label="Дата рождения"
  />
</template>

<script>
import CustomDatePicker from "../../input/components/CustomDatePicker";
import field from "../models/field";

export default {
  name: "BirthdateField",
  components: {
    CustomDatePicker
  },
  mixins: [field]
}
</script>