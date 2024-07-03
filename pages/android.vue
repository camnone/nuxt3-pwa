у
<template>
  <NuxtLayout>
    <ClientOnly>
      <AppBar />
      <AppTitle />
      <AppStats />
      <AppDownloads />
      <AppImgGallery />
      <AppAbout />
      <AppFullAbout />
      <AppRating />
      <AppReviews />
      <AppFullReviews />
      <AppDeveloper />
      <AppFooter />
      <AppNotice />
      <AppRedirectPopUp
        description="you need to go to the browser"
        title="To install the application"
        v-if="mainStore.redirectToGoogle"
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
