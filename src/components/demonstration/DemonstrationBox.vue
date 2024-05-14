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
  // emits('copy-clicked', evt.target);

  const copyButton = evt.target;
  const demoParent = evt.target.closest('.demo-box');
  const preBlock = demoParent.querySelector('pre');

  const range = document.createRange();
  range.selectNode(preBlock);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  document.execCommand('copy');
  copyButton.classList.add('active');

  setTimeout(() => {
    window.getSelection().removeAllRanges();
    copyButton.classList.remove('active');
  }, 2000);
};

</script>

<style
    lang="scss" src="./styles.scss">
</style>
