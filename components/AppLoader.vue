<template>
  <div class="preloader">
    <nuxt-icon name="loading" filled />
  </div>
</template>

<style lang="scss">
.preloader {
  .nuxt-icon {
    display: flex;
    height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #46404041;
    width: 10rem;
    height: 10rem;
    border-radius: 10px;
    svg {
      height: 100%;
      width: 50px;
    }
  }
}
</style>
