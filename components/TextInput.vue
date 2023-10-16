<script setup lang="ts">
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const { value, errorMessage } = useField(() => props.name);
</script>
<template>
  <div class="form-group">
    <label class="form-group__container">
      <span class="form-group__label">{{ label }}</span>
      <input
        class="form-group__input"
        type="text"
        v-model="value"
        :name="name"
      />
      <span v-if="errorMessage" class="form-group__error">{{
        errorMessage
      }}</span>
    </label>
  </div>
</template>
