<template>
  <div>
    <h1>Inputs</h1>
    <div class="demo-block">
      <h3 class="page-subtitle">Basic Input</h3>
      <div class="component-description">
        Here you can use our basic Inputs.
      </div>
      <DemonstrationBox v-if="storeComponents.componentsLoaded">
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
import {decodeHtmlEntities} from '@/use/useDecodeHtml.js';
import {usePrismInitialization} from '@/use/usePrismInitialization.js';

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

watch(() => storeComponents.componentsLoaded, (newValue, oldValue) => {
  if (storeComponents.componentsLoaded) {

    console.log(storeComponents.components);

    storeComponents.components.forEach(component => {
      const tempValue = decodeHtmlEntities(component.content.code);
      const replacedValue = tempValue.replace(/</g, '&lt;').replace(/>/g, '&gt;');

      console.log(component.content.title);
      if (component.content.title === ComponentType.Basic) {
        input.basic = replacedValue;
      }
    });

    setTimeout(() => {
      Prism.highlightAll();
    }, 100);

  }
});
</script>