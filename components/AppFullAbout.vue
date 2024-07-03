<template>
  <div :ref="componentsFunc.aboutRef" id="full-desc" class="fixed-screen">
    <header>
      <button @click="componentsFunc.showAbout" class="back_btn btn-icon">
        <i class="material-icons-outlined">arrow_back</i>
      </button>
      <div class="img">
        <img :src="androidStore.iconUrl" :alt="androidStore.name" />
      </div>
      <div class="name">
        <div class="title-aps">{{ androidStore.name }}</div>
        <span>Details</span>
      </div>
    </header>
    <div class="container">
      <h3 class="title-aps">About this app</h3>
      <div
        class="text"
        id="description"
        v-html="androidStore.description"
      ></div>
    </div>
    <div class="about-app">
      <div class="container">
        <div class="title-aps">App info</div>
        <div class="details-grid">
          <div class="row">
            <div class="name">Version</div>
            <span>{{ androidStore.version }}</span>
          </div>
          <div class="row">
            <div class="name">Updated on</div>
            <span>{{ androidStore.updatedTime }}</span>
          </div>
          <div class="row">
            <div class="name">Downloads</div>
            <span>{{ androidStore.installNumbers }}+ downloads</span>
          </div>
          <div class="row">
            <div class="name">Download size</div>
            <span>{{ androidStore.size }}</span>
          </div>
          <div class="row">
            <div class="name">Developer</div>
            <span>{{ androidStore.developer }}</span>
          </div>
          <div class="row">
            <div class="name">Released on</div>
            <span>{{ androidStore.releasedTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { androidAssetsStore } from "@/stores/android_store.ts";
import { componentsFuncStore } from "@/stores/components_func_store.ts";
const componentsFunc = componentsFuncStore();
const androidStore = androidAssetsStore();
</script>

<style scoped></style>
