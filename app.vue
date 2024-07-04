<template>
  <NuxtPwaManifest />
  <NuxtPage />
</template>

<script setup lang="ts">
import axios from "axios";
import { androidAssetsStore } from "@/stores/android_store";
import { mainStore } from "@/stores/main_store";

const mainStoreApp = mainStore();
const androidStore = androidAssetsStore();

if (import.meta.client) {
  window.addEventListener("beforeinstallprompt", (event: any) => {
    event.preventDefault();
    mainStoreApp.prompt = event;
  });
}

onMounted(() => {
  mainStoreApp.init();

  console.log(useCookie("name").value);

  document.body.classList.add("dark");
  const link = document.createElement("link");
  link.rel = "manifest";
  link.href = "/manifest.webmanifest.json";
  document.head.appendChild(link);
});
</script>
<style lang="scss"></style>
