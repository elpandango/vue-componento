<template>
  <div class="demo-box">
    <div class="columns">
      <div class="col w50p">
        <div class="col-title">
          Demo
        </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style
    lang="scss">
.demo-box {
  pre[class*=language-] {
    margin: 0;
  }
}
.columns {
  display: flex;
}

.col.w50p {
  width: 50%;
  padding: 0 12px;
}

.code-title {
  background-color: #2d2d2d;
  color: #ffffff;
  display: inline-block;
  padding: 6px;
  border-radius: 4px 4px 0 0;
  font-size: 14px;
}
</style>
