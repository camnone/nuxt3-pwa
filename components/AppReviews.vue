<template>
  <section id="reviews">
    <div class="container reviews-grid">
      <div class="review-item" v-for="(item, index) in shortReview">
        <header>
          <div class="img">
            <img :src="item.imageUrl" alt="Noah" loading="lazy" />
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

      <a
        href="javascript:void(0);"
        @click="componentsFunc.showReviews()"
        id="all-reviews"
        >See all reviews</a
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { androidAssetsStore } from "@/stores/android_store.ts";
import { componentsFuncStore } from "@/stores/components_func_store.ts";
const componentsFunc = componentsFuncStore();
const androidStore = androidAssetsStore();
const shortReview = ref([]);
for (let i = 0; i < androidStore.reviews.length; i++) {
  if (i < 3) {
    shortReview.value.push(androidStore.reviews[i]);
  }
}
</script>

<style scoped></style>
