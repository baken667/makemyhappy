<script setup lang="ts">
import useAppStore from "~/store/app.store";

defineProps({
  text: {
    type: String,
    required: true,
  },
});

const store = useAppStore();

const regex: RegExp = /{name}/g;

function replaceName(match: string): string {
  return store.name as string;
}
</script>
<template>
  <div class="happy-text">
    <h1>
      {{ text.replace(regex, replaceName) }}
    </h1>
  </div>
</template>
