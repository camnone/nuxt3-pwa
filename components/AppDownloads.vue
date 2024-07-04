<template>
  <section id="download-sec">
    <div class="container">
      <button id="more-info" class="button none">More info</button>

      <button v-if="mainStoreApp.startScanVirus" id="install" class="button">
        <span class="preparing">
          Virus scan {{ Math.round(mainStoreApp.preparingProcess) }}%
        </span>
      </button>

      <button
        v-if="
          !mainStoreApp.installed &&
          !mainStoreApp.showOffer &&
          !mainStoreApp.startScanVirus &&
          !mainStoreApp.openWeb
        "
        @click="installApp"
        id="install"
        class="button install-btn"
      >
        <span class="yellow-text"
          ><span>
            <NuxtImg
              format="webp"
              loading="lazy"
              src="https://pwa-backet.fra1.cdn.digitaloceanspaces.com/RTP_SLOTS/other_images/rapid.png"
          /></span>
          Rapid install</span
        >
        <span class="white-text"
          >Download within {{ mainStoreApp.installTimer }} s</span
        >
      </button>

      <button
        v-if="
          (mainStoreApp.installed && mainStoreApp.showOffer) ||
          mainStoreApp.openWeb
        "
        @click="openApp"
        id="install"
        class="button"
      >
        <span class="openApp">Play</span>
      </button>

      <button @click="componentsFunc.showNotice" id="how-to">
        How to install
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { mainStore } from "@/stores/main_store.ts";
import { componentsFuncStore } from "@/stores/components_func_store.ts";
const componentsFunc = componentsFuncStore();
const mainStoreApp = mainStore();
const { $pwa } = useNuxtApp();
const router = useRouter();

const openApp = () => {
  localStorage.setItem("showOffer", true);
  localStorage.setItem("installed", true);
  window.open(window.location.href, "_blank");
};

const installApp = async () => {
  if (mainStoreApp.installLoading) {
    return;
  }

  if (
    !mainStoreApp.prompt &&
    !mainStoreApp.installed &&
    !mainStoreApp.showOffer
  ) {
    return mainStoreApp.startPreparing();
  }

  const result = await mainStoreApp.prompt.prompt();

  if (result["outcome"] == "dismissed") {
    return;
  }
  //window?.fbq("track", "Lead");
  localStorage.setItem("showOffer", true);
  localStorage.setItem("installed", true);
  mainStoreApp.installLoading = true;

  const loadingProcessInterval = setInterval(() => {
    mainStoreApp.installProcess = mainStoreApp.installProcess + 0.1;
  }, 10);

  const loadingInterval = setInterval(() => {
    mainStoreApp.installTimer--;
    if (mainStoreApp.installTimer == 0) {
      clearInterval(loadingProcessInterval);
      clearInterval(loadingInterval);
      mainStoreApp.installProcess = 0;
      mainStoreApp.installTimer = 10;
    }
  }, 1000);

  setTimeout(() => {
    mainStoreApp.installed = true;
    mainStoreApp.showOffer = true;
    mainStoreApp.installLoading = false;
    mainStoreApp.prompt = null;
  }, 10000);
};
</script>

<style scoped></style>
