<template>
  <div
      class="basic-accordion"
      :class="[{'active': isActive}]">
    <div class="accordion-inner-content">
      <div
          @click="accordionTrigger"
          :style="{height: props.height}"
          class="header-block">
        <slot name="header">
          <div class="value">
            default value
          </div>
        </slot>
        <div
            class="icon-wrap">
          <SvgIcon icon="angle-right-solid"/>
        </div>
      </div>
      <div
          :style="{maxHeight: isActive ? computedHeight  + 'px' : '0px'}"
          class="content-block">
        <div
            class="content-items-list"
            ref="contentBlock">
          <div class="content-item">
            <slot name="accordion-body">default body</slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, computed, ref} from 'vue';
import SvgIcon from "@/components/SvgComponents/SvgIcon.vue";

const props = defineProps({
  height: {
    type: String,
    default: '32px'
  }
});

const isActive = ref(false);
const contentBlock = ref(null);

const computedHeight = computed(() => {
  return contentBlock.value ? contentBlock.value.offsetHeight : 0;
});

const accordionTrigger = (e) => {
  e.stopPropagation();
  isActive.value = !isActive.value;
};
</script>

<style
    src="./styles.scss"
    scoped
    lang="scss">
</style>
