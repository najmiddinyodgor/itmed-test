<template>
  <custom-select
      v-model="mutableValue"
      label="Выберите страну"
      :options="options"
  />
</template>

<script>
import CustomSelect from "../input/components/CustomSelect";
import {mapGetters} from 'vuex'
import field from "./models/field";

export default {
  name: "CountryField",
  components: {
    CustomSelect
  },
  mixins: [field],
  computed: {
    ...mapGetters('fields', [
      'countries'
    ]),
    options() {
      return this.countries.map(country => ({
        value: country.id,
        label: country.name
      }))
    }
  }
}
</script>