<template>
  <SvgSprite/>

  <template v-if="requestFinished">
    <RouterView/>
  </template>
</template>

<script setup>
import SvgSprite from "@/components/svgComponents/SvgSprite.vue";
import {watch, ref, onMounted} from "vue";
import {useStoreComponents} from "@/stores/storeComponents.js";

const storeComponents = useStoreComponents();
const requestFinished = ref(false);

onMounted(async () => {
  await storeComponents.getComponents();
});

watch(() => storeComponents.componentsLoaded, (newValue, oldValue) => {
  if (storeComponents.componentsLoaded) {
    requestFinished.value = true;
  }
});
</script>
