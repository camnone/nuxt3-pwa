<template>
  <section id="about-sec">
    <div class="container">
      <div class="sec-title">
        <h3>About this app</h3>
        <button @click="componentsFunc.showAbout" class="more_btn btn-icon">
          <i class="material-icons-outlined">arrow_forward</i>
        </button>
      </div>
      <div class="app-short-desc">
        {{ androidStore.shortDescription }}
      </div>
      <div class="app-meta">
        <span v-for="item in androidStore.tags">{{ item }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { componentsFuncStore } from "@/stores/components_func_store.ts";
import { androidAssetsStore } from "@/stores/android_store.ts";
const androidStore = androidAssetsStore();
const componentsFunc = componentsFuncStore();
</script>

<style scoped></style>
