<template>
  <div class="form-group">
    <label
        :for="`#${label}`"
        class="form-group__label"
    >
      {{ label }}
    </label>
    <div>
      <slot :id="label"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>