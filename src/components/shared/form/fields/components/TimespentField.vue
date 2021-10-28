<template>
  <custom-select
      v-model="mutableValue"
      label="Время обработки"
      :options="options"
  />
</template>

<script>
import CustomSelect from "../input/components/CustomSelect";
import {mapGetters} from 'vuex'
import field from "./models/field";

export default {
  name: "TimespentField",
  components: {
    CustomSelect
  },
  mixins: [field],
  computed: {
    ...mapGetters('fields', [
      'timespent'
    ]),
    options() {
      return this.timespent.map(country => ({
        value: country.id,
        label: country.name
      }))
    }
  }
}
</script>