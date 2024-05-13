<template>
  <div>
    <h1>Inputs</h1>
    <div class="demo-block">
      <h3 class="page-subtitle">Basic Input</h3>
      <div class="component-description">
        Here you can use our basic Inputs.
      </div>
      <DemonstrationBox v-if="storeComponents.componentsLoaded"
                        @copy-clicked="copyClicked">
        <template v-slot:demo-slot>
          <input type="text">
        </template>
        <template v-slot:code-slot>
        <pre>
        <code class="language-html" v-html="input.basic"></code>
      </pre>
        </template>
      </DemonstrationBox>
    </div>

  </div>
</template>

<script setup>
import {reactive, watch} from "vue";
import {onMounted} from "vue";
import {useStoreComponents} from "@/stores/storeComponents.js";
import {useDecodeHtmlEntities} from '@/use/useDecodeHtml.js';
import {usePrismInitialization} from '@/use/usePrismInitialization.js';
import {useCopyClickedHandler} from "@/use/useCopyClicked.js";

const storeComponents = useStoreComponents();

let input = reactive({
  basic: null,
});

usePrismInitialization();

onMounted(async () => {
  await storeComponents.getComponents('input');
});

const ComponentType = {
  Basic: 'Basic Input',
};

const copyClicked = (target) => {
  useCopyClickedHandler(target);
};

watch(() => storeComponents.componentsLoaded, (newValue, oldValue) => {
  if (storeComponents.componentsLoaded) {
    storeComponents.components.forEach(component => {
      const tempValue = useDecodeHtmlEntities(component.content.code);
      const replacedValue = tempValue.replace(/</g, '&lt;').replace(/>/g, '&gt;');

      switch (component.content.title) {
        case ComponentType.Basic:
          input.basic = replacedValue;
          break;
      }
    });

    setTimeout(() => {
      Prism.highlightAll();
    }, 100);

  }
});
</script>