<template>
  <custom-date-picker
      v-model="mutableValue"
      label="Выезд"
  />
</template>

<script>
import CustomDatePicker from "../input/components/CustomDatePicker";
import field from "./models/field";

export default {
  name: "DepartureField",
  components: {
    CustomDatePicker
  },
  mixins: [field]
}
</script>