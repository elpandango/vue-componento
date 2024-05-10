<template>
  <div>
    <h1>Accordions</h1>
    <DemonstrationBox v-if="storeComponents.componentsLoaded">
      <template v-slot:demo-slot>
        <Accordion>
          <template v-slot:header>
            <div class="link-text">Accordion Title</div>
          </template>
          <template v-slot:accordion-body>
            <ul class="link-sublist">
              <li class="accordion-item">Item 1</li>
              <li class="accordion-item">Item 2</li>
              <li class="accordion-item">Item 3</li>
              <li class="accordion-item">Item 4</li>
            </ul>
          </template>
        </Accordion>
      </template>
      <template v-slot:code-slot>
        <pre>
        <code class="language-html" v-html="accordion"></code>
      </pre>
      </template>
    </DemonstrationBox>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";
import DemonstrationBox from "@/components/demonstration/DemonstrationBox.vue";
import Accordion from "@/components/accordions/Accordion.vue";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import {onMounted} from "vue";
import {useStoreComponents} from "@/stores/storeComponents.js";

const storeComponents = useStoreComponents();

let accordion = ref('');

function decodeHtmlEntities(encodedString) {
  return encodedString.replace(/&amp;/g, '&')
   .replace(/&lt;/g, '<')
   .replace(/&gt;/g, '>')
   .replace(/&quot;/g, '"')
   .replace(/&#39;/g, "'");
}

onMounted(async () => {
  window.Prism = window.Prism || {};
  window.Prism.manual = true;
  await storeComponents.getComponents('accordion');
});

watch(() => storeComponents.componentsLoaded, (newValue, oldValue) => {
  if (storeComponents.componentsLoaded) {
    const tempValue = decodeHtmlEntities(storeComponents.components[0].content.code);
    accordion.value = tempValue.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    setTimeout(() => {
      Prism.highlightAll();
    }, 100);

  }
});
</script>