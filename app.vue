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

onMounted(() => {
  mainStoreApp.init();
  document.body.classList.add("dark");
  const link = document.createElement("link");
  link.rel = "manifest";
  link.href = "/manifest.webmanifest.json";
  document.head.appendChild(link);
});
</script>
<style lang="scss"></style>
