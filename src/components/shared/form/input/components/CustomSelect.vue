<template>
  <input-field :label="label">
    <div class="form-group__select">
      <el-select
          v-model="mutableValue"
          :id="label"
          :placeholder="placeHolder"
          :filterable="filterable"
      >
        <el-option
            v-for="option in options"
            :key="option.label"
            :label="option.label"
            :value="option.value"
        >
          {{ option.label }}
        </el-option>
      </el-select>
    </div>
  </input-field>
</template>

<script>
import InputField from "./InputField";
import select from "../models/select";

export default {
  name: "CustomSelect",
  components: {
    InputField
  },
  mixins: [select],
}
</script>