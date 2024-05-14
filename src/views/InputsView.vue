<template>
  <div>
    <h1>Inputs</h1>
    <div class="demo-block">
      <h3 class="page-subtitle">Basic Input</h3>
      <div class="component-description">
        Here you can use our basic Inputs.
      </div>
      <DemonstrationBox>
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
import {reactive, ref} from "vue";
import {onMounted} from "vue";
import {useStoreComponents} from "@/stores/storeComponents.js";
import {useDecodeHtmlEntities} from '@/use/useDecodeHtml.js';
import {usePrismInitialization, usePrismHighlighting} from '@/use/usePrismInitialization.js';

const storeComponents = useStoreComponents();
const components = ref([]);

let input = reactive({
  basic: null,
});

// Component types enums
const ComponentType = {
  Basic: 'Basic Input',
};

onMounted(async () => {
  components.value = storeComponents.getComponentByType('input');
  components.value.forEach(component => {
    const replacedValue = useDecodeHtmlEntities(component.content.code);

    switch (component.content.title) {
      case ComponentType.Basic:
        input.basic = replacedValue;
        break;
    }
  });

  usePrismInitialization();
  usePrismHighlighting();
});
</script>