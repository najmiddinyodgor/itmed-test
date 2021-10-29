<template>
  <input-field :label="label">
    <el-date-picker
        v-model="mutableValue"
        type="date"
        :placeholder="placeHolder"
        format="dd.MM.yyyy"
    >
    </el-date-picker>
  </input-field>
</template>

<script>
import InputField from "./InputField";
import datepicker from "../models/datepicker";

export default {
  name: "CustomDatePicker",
  components: {
    InputField
  },
  mixins: [datepicker]
}
</script>