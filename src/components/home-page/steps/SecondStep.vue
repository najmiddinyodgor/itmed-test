<template>
  <step
      :step="2"
      @nextStep="submitHandler"
      @prevStep="cancelHandler"
      has-next-step
      has-prev-step
  >
    <h2 class="username mb-30">{{ username }}</h2>
    <el-row class="mb-30">
      <el-col :lg="6">
        <first-name-field v-model="form.firstname"/>
      </el-col>
      <el-col :lg="6">
        <last-name-field v-model="form.lastname"/>
      </el-col>
      <el-col :lg="6">
        <birthdate-field v-model="form.birthdate"/>
      </el-col>
      <el-col :lg="6">
        <country-field v-model="form.citizenship"/>
      </el-col>
    </el-row>
    <info-box v-show="showInfo">
      <div class="mb-30">
        <h3>Виза</h3>
        <ul class="info-box__list">
          <li>
            Страна: {{ country.name }}
          </li>
          <li>
            Въезд: {{ visaType.name }}
          </li>
          <li>
            Вид визы: {{ visaType.name }}
          </li>
          <li>
            Время обработки: {{ days.name }}
          </li>
        </ul>
      </div>
      <h2>Предварительная стоимость: <b class="warning">€{{ price }}</b></h2>
    </info-box>
  </step>
</template>

<script>
import Step from "../../shared/step/components/Step";
import {mapActions, mapGetters} from 'vuex';
import FirstNameField from "../../shared/form/fields/components/FirstNameField";
import LastNameField from "../../shared/form/fields/components/LastNameField";
import BirthdateField from "../../shared/form/fields/components/BirthdateField";
import CountryField from "../../shared/form/fields/components/CountryField";
import InfoBox from "../InfoBox";
import visaInfo from "../models/visaInfo";
import validator from "../../shared/form/models/validator";

export default {
  name: "SecondStep",
  components: {
    InfoBox,
    CountryField,
    BirthdateField,
    LastNameField,
    FirstNameField,
    Step
  },
  mixins: [visaInfo, validator],
  data() {
    return {
      requiredFields: [
        'firstname',
        'lastname',
        'birthdate',
        'citizenship',
      ],
      prevFields: [
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
    ]),
    username() {
      return `${this.form.firstname} ${this.form.lastname.substr(0, 1)}`
    },
    showInfo() {
      return this.validateFields(this.form, this.prevFields)
    }
  },
  methods: {
    ...mapActions('visaForm', [
      'saveForm'
    ]),
    submitHandler() {
      this.saveForm(this.form)
      this.$emit('submit')
    },
    cancelHandler() {
      this.$emit('cancel')
    },
  }
}
</script>

<style scoped lang="scss">
.username {
  display: inline-block;
  border-bottom: 2px solid #FFFFFF;
}
</style>