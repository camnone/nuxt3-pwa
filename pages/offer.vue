<template></template>

<script setup lang="ts">
import { mainStore } from "@/stores/main_store.ts";
import { androidAssetsStore } from "@/stores/android_store.ts";
const mainStoreApp = mainStore();
const androidStore = androidAssetsStore();
mainStoreApp.generateLink();
await navigateTo(androidStore.offerLink, { open: { target: "_self" } });
</script>

<style scoped></style>
