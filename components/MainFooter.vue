<script setup lang="ts">
import useAppStore from "@/store/app.store";

const store = useAppStore();
</script>
<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__left footer__content">
        <a href="https://instagram.com/bakkka.wws" target="_blank"
          >@bakkka.wws</a
        >
      </div>
      <div class="footer__right footer__content">
        <ClientOnly>
          <a @click="store.setFormVisibilaty(false)" v-show="store.hiddenForm"
            >Изменить данные</a
          >
          <a
            @click="
              $colorMode.value === 'dark'
                ? ($colorMode.preference = 'light')
                : ($colorMode.preference = 'dark')
            "
          >
            {{ $colorMode.value === "dark" ? "Светлый режим" : "Темный режим" }}
          </a>
        </ClientOnly>
      </div>
    </div>
  </footer>
</template>
