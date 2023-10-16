<script setup lang="ts">
import useAppStore from "@/store/app.store";
import { GenderType } from "~/types/gender.type";

const store = useAppStore();

const config = useRuntimeConfig();

const text = ref<string | null>(null);

const dataFetching = ref(false);

async function fetchData() {
  dataFetching.value = true;
  const { data } = await useFetch<{
    value: string;
    gender: GenderType;
  }>(`${config.public.api}/content/item/rand/words`, {
    headers: {
      "Api-Key": config.public.apiKey,
    },
    params: {
      filter: {
        gender: store.gender,
      },
    },
  }).finally(() => {
    dataFetching.value = false;
  });

  if (data.value) {
    text.value = data.value.value;
  } else {
    text.value = null;
  }
}
</script>
<template>
  <ClientOnly>
    <ShowText :text="text" v-if="text !== null" />
    <SetGootPersonData
      v-if="!store.hiddenForm || store.name === null || store.gender === null"
    />
    <button
      class="makemehappy-button"
      v-else
      :disabled="dataFetching"
      @click="fetchData"
    >
      Получить дневную норму
    </button>
  </ClientOnly>
</template>
