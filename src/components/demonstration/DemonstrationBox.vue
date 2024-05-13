<template>
  <div class="demo-box">
    <div class="columns">
      <div class="col w50p">
        <div class="col-content">
          <slot name="demo-slot"></slot>
        </div>
      </div>
      <div class="col w50p">
        <div class="col-title code-title">
          HTML
        </div>
        <div class="col-content">
          <slot name="code-slot"></slot>
          <div class="copy-btn-block">
            <button type="button"
                    class="copy-btn"
            @click="onClicked">Copy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['copy-clicked']);

const onClicked = (evt) => {
  emits('copy-clicked', evt.target);
};

</script>

<style
    lang="scss" src="./styles.scss">
</style>
