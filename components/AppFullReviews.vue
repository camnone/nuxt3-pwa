<template>
  <div ref="fullReviewsRef" id="full-reviews" class="fixed-screen">
    <header>
      <button @click="componentsFunc.showReviews()" class="back_btn btn-icon">
        <i class="material-icons-outlined">arrow_back</i>
      </button>
      <div class="img">
        <NuxtImg
          format="webp"
          loading="lazy"
          :src="androidStore.iconUrl"
          :alt="androidStore.name"
        />
      </div>
      <div class="name">
        <div class="title-aps">
          {{ androidStore.name }}
          <div class="rating"><span></span></div>
        </div>
        <span>Ratings and reviews</span>
      </div>
    </header>
    <div class="filter">
      <div class="container">
        <div class="left">All</div>
        <div class="right">
          Most relevant<i class="material-icons-outlined">sort</i>
        </div>
      </div>
    </div>
    <div class="container reviews-grid">
      <div class="review-item" v-for="item in androidStore.reviews">
        <header>
          <div class="img">
            <NuxtImg
              format="webp"
              loading="lazy"
              :src="item.imageUrl"
              alt="Noah"
            />
          </div>
          <div class="name">{{ item.name }}</div>
          <button class="btn-icon">
            <i class="material-icons-outlined">more_vert</i>
          </button>
        </header>
        <div class="meta">
          <div class="stars">
            <span class="color">★</span><span class="color">★</span
            ><span class="color">★</span><span class="color">★</span
            ><span class="color">★</span>
          </div>
          <div class="date">{{ item.date }}</div>
        </div>
        <div class="text">
          {{ item.reviews.review }}
        </div>
        <div class="developer-answer" v-if="item.reviews.answer">
          <div class="title-aps">
            Casino Club <span>{{ item.reviews.answer.date }}</span>
          </div>
          <div class="text">
            {{ item.reviews.answer.text }}
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
const fullReviewsRef = ref();
</script>
<style scoped></style>
