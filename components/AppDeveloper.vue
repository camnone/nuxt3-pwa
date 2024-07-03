<template>
  <section id="developer" class="">
    <div class="container">
      <div class="sec-title">
        <h3>Developer contact</h3>
        <button class="more_btn btn-icon">
          <i class="material-icons-outlined">expand_more</i>
        </button>
      </div>
      <div class="grid">
        <a :href="androidStore.website" target="_blank" class="row"
          ><i class="material-icons-outlined">public</i>
          <div class="name">Website</div></a
        ><a :href="`mailto:${androidStore.website}`" class="row"
          ><i class="material-icons-outlined">mail</i>
          <div class="name">
            Email<span
              >support@{{ androidStore.website.replace("https://", "") }}</span
            >
          </div> </a
        ><a
          :href="androidStore.website + '/privacy-policy'"
          target="_blank"
          class="row"
          ><i class="material-icons-outlined">shield</i>
          <div class="name">Privacy Policy</div></a
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { androidAssetsStore } from "@/stores/android_store.ts";
const androidStore = androidAssetsStore();
</script>

<style scoped></style>
