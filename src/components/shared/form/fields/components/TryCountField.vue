<template>
  <custom-select
      v-model="mutableValue"
      label="Количество заездов"
      :options="options"
  />
</template>

<script>
import CustomSelect from "../../input/components/CustomSelect";
import {mapGetters} from 'vuex'
import field from "../models/field";
import hasRelation from "../models/hasRelation";

export default {
  name: "TryCountField",
  components: {
    CustomSelect
  },
  mixins: [field, hasRelation],
  props: {
    relative: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters('fields', [
      'tries'
    ]),
    relations() {
      return this.tries
    },
    options() {
      return this.related.map(country => ({
        value: country.id,
        label: country.name,
      }))
    }
  }
}
</script>