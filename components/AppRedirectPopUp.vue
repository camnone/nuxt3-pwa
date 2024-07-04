<template>
  <div class="popup">
    <div class="popup-inner" @click="openWeb()">
      <div class="img">
        <NuxtImg
          format="webp"
          :src="androidStore.iconUrl"
          :alt="androidStore.name"
        />
      </div>
      <div class="text1">{{ title }}</div>
      <div class="text2">{{ description }}</div>
      <button class="button pop-btn">Go to browser</button>
    </div>
  </div>
</template>

<script setup>
import { androidAssetsStore } from "@/stores/android_store.ts";
import { mainStore } from "@/stores/main_store";
const mainAndroidStore = mainStore();
const androidStore = androidAssetsStore();
defineProps({
  title: String,
  description: String,
});

const openWeb = () => {
  window.open(
    `intent://navigate?url=${window.location.hostname}/?page=${
      useCookie("page").value
    }#Intent;scheme=googlechrome;end;`
  );
};
</script>
