<template>
  <custom-select
      v-model="mutableValue"
      label="Время обработки"
      :options="options"
  />
</template>

<script>
import CustomSelect from "../../input/components/CustomSelect";
import {mapGetters} from 'vuex'
import field from "../models/field";
import hasRelation from "../models/hasRelation";

export default {
  name: "TimespentField",
  components: {
    CustomSelect
  },
  mixins: [field, hasRelation],
  computed: {
    ...mapGetters('fields', [
      'timespent'
    ]),
    relations() {
      return this.timespent
    },
    options() {
      return this.related.map(country => ({
        value: country.id,
        label: country.name
      }))
    }
  }
}
</script>