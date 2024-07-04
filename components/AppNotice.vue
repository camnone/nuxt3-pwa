<template>
  <div :ref="componentsFunc.noticeRef" id="notice" class="">
    <div @click="componentsFunc.showNotice" class="overlay"></div>
    <div class="wrap">
      <button @click="componentsFunc.showNotice" class="btn-icon">
        <i class="material-icons-outlined">close</i>
      </button>
      <div class="container">
        <header>
          <div class="img">
            <NuxtImg
              format="webp"
              :src="androidStore.iconUrl"
              :alt="androidStore.name"
              loading="lazy"
            />
          </div>
          <div class="meta">
            <h2>{{ androidStore.name }}</h2>
            <p>
              {{ androidStore.shortDescription }}
            </p>
          </div>
        </header>
        <div class="details-grid">
          <div class="title-aps">App info</div>
          <div class="row">
            <div class="name">Version</div>
            <span> {{ androidStore.version }}</span>
          </div>
          <div class="row">
            <div class="name">Updated on</div>
            <span>{{ androidStore.updatedTime }}</span>
          </div>
          <div class="row">
            <div class="name">Downloads</div>
            <span
              >{{ androidStore.installNumbers.replace("k", "+") }}+
              downloads</span
            >
          </div>
          <div class="row">
            <div class="name">Downloads size</div>
            <span>{{ androidStore.size }}</span>
          </div>
          <div class="row">
            <div class="name">Developer</div>
            <span>{{ androidStore.subtitle }}</span>
          </div>
          <div class="row">
            <div class="name">Released on</div>
            <span>{{ androidStore.releasedTime }}</span>
          </div>
        </div>
        <div class="content">
          <p>
            If you have some problems with installation, you can install this
            app by adding this page to home screen. You need to select 'Add to
            Home Screen' in your browser settings
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen#how_do_you_use_it"
              target="_blank"
              >More info</a
            >
          </p>
        </div>
      </div>
      <button @click="installApp" class="button">
        Add this website to home screen by pressing 'Add to Homescreen'
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { androidAssetsStore } from "@/stores/android_store.ts";
import { componentsFuncStore } from "@/stores/components_func_store.ts";
const componentsFunc = componentsFuncStore();
const androidStore = androidAssetsStore();
const installApp = () => {};
</script>

<style scoped></style>
