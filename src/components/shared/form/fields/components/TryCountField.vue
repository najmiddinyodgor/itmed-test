<template>
  <custom-select
      v-model="mutableValue"
      label="Количество заездов"
      :options="options"
  />
</template>

<script>
import CustomSelect from "../input/components/CustomSelect";
import {mapGetters} from 'vuex'
import field from "./models/field";

export default {
  name: "TryCountField",
  components: {
    CustomSelect
  },
  mixins: [field],
  props: {
    relative: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters('fields', [
      'try'
    ]),
    options() {
      return this.try.map(country => ({
        value: country.id,
        label: country.name
      }))
    }
  }
}
</script>