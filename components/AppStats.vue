<template>
  <section id="app-stats" class="container">
    <div class="item">
      <div class="icon">{{ androidStore.ratings }}<span>★</span></div>
      <div class="desc">{{ androidStore.ratingsLength }} reviews</div>
    </div>
    <div class="item">
      <div class="icon">{{ androidStore.installNumbers }}+</div>
      <div class="desc">Downloads</div>
    </div>
    <div class="item">
      <div class="icon">
        <i class="material-icons-outlined icon18">18_up_rating</i>
      </div>
      <div class="desc">Rated for 18+</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { androidAssetsStore } from "@/stores/android_store.ts";
const androidStore = androidAssetsStore();
</script>

<style scoped></style>
