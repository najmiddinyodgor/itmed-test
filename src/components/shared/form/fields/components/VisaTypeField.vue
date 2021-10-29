<template>
  <custom-select
      v-model="mutableValue"
      label="Тип визы"
      :options="options"
  />
</template>

<script>
import CustomSelect from "../../input/components/CustomSelect";
import {mapGetters} from 'vuex'
import field from "../models/field";

export default {
  name: "VisaTypeField",
  components: {
    CustomSelect
  },
  mixins: [field],
  computed: {
    ...mapGetters('fields', [
      'types'
    ]),
    options() {
      return this.types.map(country => ({
        value: country.id,
        label: country.name
      }))
    }
  }
}
</script>