<template>
  <input-field :label="label">
    <el-input
        v-model="mutableValue"
        type="text"
        :placeholder="placeHolder"
    >
    </el-input>
  </input-field>
</template>

<script>
import InputField from "./InputField";
import textInput from "../models/textInput";

export default {
  name: "CustomTextInput",
  components: {
    InputField
  },
  mixins: [textInput]
}
</script>