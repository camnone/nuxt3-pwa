<template>
  <div ref="topBar" class="topbar" id="topbar">
    <NuxtImg
      format="webp"
      loading="lazy"
      class="left"
      src="https://pwa-backet.fra1.cdn.digitaloceanspaces.com/RTP_SLOTS/other_images/google-play.png"
    />

    <NuxtImg
      format="webp"
      class="right"
      loading="lazy"
      src="https://pwa-backet.fra1.cdn.digitaloceanspaces.com/RTP_SLOTS/other_images/top-developer.png"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.topbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #202020;
  position: fixed;
  z-index: 100;
  top: 0;
  max-width: 680px;
  //box-shadow: 0px 0px 6px 4px rgb(32, 32, 32);
  padding: 0.8rem 1.5rem;
  img {
    max-width: 8rem;
  }
  .left {
    max-width: 10rem;
  }
}
</style>
