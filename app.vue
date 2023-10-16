<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import useAppStore from "@/store/app.store";
import { GenderType } from "~/types/gender.type";

useHead({
  htmlAttrs: {
    lang: "ru",
  },
  title: "Make Me Happy | @bakkka.wws",
});

const store = useAppStore();

const nameCookie = useCookie<string | undefined>("_name");
const genderCookie = useCookie<GenderType | undefined>("_gender");

if (nameCookie.value !== undefined) {
  store.setName(nameCookie.value);
}
if (genderCookie.value !== undefined) {
  store.setGender(genderCookie.value);
}

watch(
  () => store._name,
  (value) => {
    nameCookie.value = value !== null ? value : undefined;
  }
);

watch(
  () => store._gender,
  (value) => {
    genderCookie.value = value !== null ? value : undefined;
  }
);
</script>
