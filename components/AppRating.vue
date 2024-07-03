<template>
  <section id="ratings">
    <div class="container">
      <div class="sec-title">
        <h3>
          Ratings and reviews<a
            href="https://play.google.com/about/comment-posting-policy/"
            target="_blank"
            ><i class="material-icons-outlined">info</i></a
          >
        </h3>
        <button @click="showReviews" class="more_btn btn-icon">
          <i class="material-icons-outlined">arrow_forward</i>
        </button>
      </div>
      <div class="rating">
        <div class="left">
          <h2>{{ androidStore.ratings }}</h2>
          <div class="stars">
            <span class="color">★</span><span class="color">★</span
            ><span class="color">★</span><span class="color">★</span
            ><span class="half">★</span>
          </div>
          <p>{{ androidStore.ratingsLength.replace("k", "00") }}</p>
        </div>
        <div class="right">
          <div class="row">
            <span>5</span>
            <div class="line">
              <i style="width: 95%"></i>
            </div>
          </div>
          <div class="row">
            <span>4</span>
            <div class="line">
              <i style="width: 80%"></i>
            </div>
          </div>
          <div class="row">
            <span>3</span>
            <div class="line">
              <i style="width: 48%"></i>
            </div>
          </div>
          <div class="row">
            <span>2</span>
            <div class="line">
              <i style="width: 24%"></i>
            </div>
          </div>
          <div class="row">
            <span>1</span>
            <div class="line">
              <i style="width: 10%"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { androidAssetsStore } from "@/stores/android_store.ts";

const androidStore = androidAssetsStore();
</script>

<style scoped></style>
