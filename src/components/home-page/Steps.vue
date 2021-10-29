<template>
  <el-carousel
      ref="carousel"
      trigger="click"
      direction="horizontal"
      arrow="never"
      height="100vh"
      :autoplay="false"
  >
    <el-carousel-item>
      <first-step
          @submit="$refs.carousel.next()"
      />
    </el-carousel-item>
    <el-carousel-item>
      <second-step
          @cancel="$refs.carousel.prev()"
          @submit="sendForm"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import {mapGetters} from "vuex";

export default {
  name: "Steps",
  components: {
    SecondStep,
    FirstStep
  },
  computed: {
    ...mapGetters('visaForm', [
      'form'
    ])
  },
  methods: {
    sendForm() {
      console.log(this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-carousel .el-carousel--horizontal {
  display: none;
}
</style>