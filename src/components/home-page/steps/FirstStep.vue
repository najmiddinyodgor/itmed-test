<template>
  <step
      :step="1"
      @nextStep="submitHandler"
      has-next-step
  >
    <el-row class="mb-30">
      <el-col :lg="8">
        <country-field v-model="form.country"/>
      </el-col>
      <el-col :lg="8">
        <visa-type-field v-model="form.type"/>
      </el-col>
    </el-row>
    <el-row class="mb-30">
      <el-col :lg="8">
        <el-row>
          <el-col :lg="12">
            <entry-field v-model="form.entry"/>
          </el-col>
          <el-col :lg="12">
            <departure-field v-model="form.departure"/>
          </el-col>
        </el-row>
      </el-col>
      <el-col :lg="8">
        <try-count-field
            v-model="form.try"
            :relative="form.country"
        />
      </el-col>
      <el-col :lg="8">
        <timespent-field
            v-model="form.timespent"
            :relative="form.country"
        />
      </el-col>
    </el-row>
    <info-box>
      <h2>Предварительная стоимость: <b class="warning">€{{ price }}</b></h2>
    </info-box>
  </step>
</template>

<script>
import Step from "../../shared/step/components/Step";
import CountryField from "../../shared/form/fields/components/CountryField";
import VisaTypeField from "../../shared/form/fields/components/VisaTypeField";
import EntryField from "../../shared/form/fields/components/EntryField";
import DepartureField from "../../shared/form/fields/components/DepartureField";
import TryCountField from "../../shared/form/fields/components/TryCountField";
import TimespentField from "../../shared/form/fields/components/TimespentField";
import {mapActions, mapGetters} from 'vuex';
import InfoBox from "../InfoBox";
import visaInfo from "../models/visaInfo";
import validator from "../../shared/form/models/validator";

export default {
  name: "FirstStep",
  components: {
    InfoBox,
    TimespentField,
    TryCountField,
    DepartureField,
    EntryField,
    VisaTypeField,
    CountryField,
    Step,
  },
  mixins: [visaInfo, validator],
  data() {
    return {
      requiredFields: [
        'country',
        'type',
        'entry',
        'departure',
        'try',
        'timespent'
      ]
    }
  },
  computed: {
    ...mapGetters('visaForm', [
      'form'
    ])
  },
  methods: {
    ...mapActions('visaForm', [
      'saveForm',
    ]),
    submitHandler() {
      if (this.validate(this.form)) {
        this.saveForm(this.form)
        this.$emit('submit')
      }
    }
  }
}
</script>