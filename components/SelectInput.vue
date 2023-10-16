<script setup lang="ts">
import { useField } from "vee-validate";
import { PropType } from "vue";
import { SelectInputOption } from "@/types/select-input-option.type";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array as PropType<SelectInputOption[]>,
    requried: true,
  },
});

const { value, errorMessage } = useField(() => props.name);
</script>
<template>
  <div class="form-group">
    <label class="form-group__container">
      <span class="form-group__label">{{ label }}</span>
      <select v-model="value" class="form-group__input">
        <option v-for="(option, i) in options" :value="option.value" :key="i">
          {{ option.text }}
        </option>
      </select>
      <span v-if="errorMessage" class="form-group__error">{{
        errorMessage
      }}</span>
    </label>
  </div>
</template>
