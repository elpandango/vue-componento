<template>
  <div class="text-page-content">
    <div class="container">
      <h1 class="text-page-title">Buttons</h1>
        <div class="demo-block">
          <h3 class="page-subtitle">Basic Buttons</h3>
          <div class="component-description">
            Here you can use our basic Buttons.
        </div>
        <DemonstrationBox>
        <template v-slot:demo-slot>
          <Button>
          </Button>
        </template>
        <template v-slot:code-slot>
        <pre>
        <code class="language-html" v-html="templateComponent.basic"></code>
      </pre>
        </template>
      </DemonstrationBox>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import Button from "@/components/buttons/BaseButton.vue";
import {onMounted} from "vue";
import {useStoreComponents} from "@/stores/storeComponents.js";
import {useDecodeHtmlEntities} from '@/use/useDecodeHtml.js';
import {usePrismInitialization, usePrismHighlighting} from '@/use/usePrismInitialization.js';

const storeComponents = useStoreComponents();
const components = ref([]);

let templateComponent = reactive({
  basic: null,
});

// Component types enums
const ComponentType = {
  Basic: 'Basic Button',
};

onMounted(async () => {
  components.value = storeComponents.getComponentByType('button');
  components.value.forEach(component => {
    const replacedValue = useDecodeHtmlEntities(component.content.code);

    switch (component.content.title) {
      case ComponentType.Basic:
        templateComponent.basic = replacedValue;
        break;
    }
  });

  usePrismInitialization();
  usePrismHighlighting();
});

</script>
