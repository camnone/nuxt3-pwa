<template>
  <section id="img-gallery">
    <div
      class="grid"
      :style="`grid-template-columns: 
            repeat(${androidStore.screens.length},
            max-content)`"
    >
      <a
        href="javascript:void(0);"
        class="img-item"
        v-for="item in androidStore.screens"
      >
        <NuxtImg :src="item" format="webp" loading="lazy" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { androidAssetsStore } from "@/stores/android_store.ts";
const androidStore = androidAssetsStore();
</script>

<style scoped></style>
