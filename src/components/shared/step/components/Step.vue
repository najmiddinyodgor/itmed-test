<template>
  <section class="step">
    <div class="container">
      <h2 class="step__title">Шаг {{ step }}</h2>
      <div class="step__content">
        <slot/>
      </div>
      <footer class="step__footer">
        <template v-for="button in buttons">
          <button
              v-show="button.show"
              :key="button.label"
              :class="button.class"
              class="step__btn"
              type="button"
              @click="button.clickHandler"
          >
            <i :class="button.icon"/>
            {{ button.label }}
          </button>
        </template>
      </footer>
    </div>
  </section>
</template>

<script>
import step from "../models/step";

export default {
  name: "Step",
  mixins: [step]
}
</script>