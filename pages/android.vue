у
<template>
  <NuxtLayout>
    <ClientOnly>
      <LazyAppBar />
      <LazyAppTitle />
      <LazyAppStats />
      <LazyAppDownloads />
      <LazyAppImgGallery />
      <LazyAppAbout />
      <LazyAppFullAbout />
      <LazyAppRating />
      <LazyAppReviews />
      <LazyAppFullReviews />
      <LazyAppDeveloper />
      <LazyAppFooter />
      <LazyAppNotice />
      <LazyAppRedirectPopUp
        description="you need to go to the browser"
        title="To install the application"
        v-if="!mainStoreApp.redirectToGoogle"
      />
    </ClientOnly>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { mainStore } from "@/stores/main_store.ts";
const mainStoreApp = mainStore();
mainStoreApp.fbEvent();
//fbq("track", "ViewContent");
</script>

<style scoped></style>
