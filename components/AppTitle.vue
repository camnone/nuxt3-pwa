<template>
  <header
    id="app-title"
    :class="['container', { loading: mainStoreApp.installLoading }]"
  >
    <div class="img">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="img-container">
        <NuxtImg
          format="webp"
          :src="androidStore.iconUrl"
          :alt="androidStore.name"
        />
      </div>
    </div>
    <div id="app-name">
      <h2>
        {{ androidStore.name }}
        <NuxtImg
          format="webp"
          src="https://pwa-backet.fra1.cdn.digitaloceanspaces.com/RTP_SLOTS/other_images/verify.png"
        />
      </h2>
      <span v-if="!mainStoreApp.installLoading">{{
        androidStore.subtitle
      }}</span>
      <span v-if="mainStoreApp.installLoading"
        >{{ Math.round(mainStoreApp.installProcess) }}%</span
      >

      <div><span>Contains ads</span><span>In-app purchases</span></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { androidAssetsStore } from "@/stores/android_store.ts";
import { mainStore } from "@/stores/main_store.ts";
const mainStoreApp = mainStore();
const androidStore = androidAssetsStore();
</script>

<style scoped></style>
