<template>
  <div>
    <h1>Accordions</h1>
    <div class="demo-block">
      <h3 class="page-subtitle">Basic Accordion</h3>
      <div class="component-description">
        Here you can use our basic Accordion component with its default styling.
        Also you can set the Accordion to be opened by default, just adding
        is-active-on-init="true" parameter.
      </div>
      <DemonstrationBox v-if="storeComponents.componentsLoaded"
                        @copy-clicked="copyClicked">
        <template v-slot:demo-slot>
          <div class="accordions-block">
            <Accordion type="basic"
                       class="mar-b-1">
              <template v-slot:header>
                <div class="link-text">Accordion Title</div>
              </template>
              <template v-slot:accordion-body>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias aspernatur assumenda dolorum iure mollitia
                  nemo tempora? Alias amet cupiditate,
                  dicta earum eum maiores nemo repellat?</p>
              </template>
            </Accordion>
            <Accordion type="basic"
                       class="mar-b-1"
                       is-active-on-init="true">
              <template v-slot:header>
                <div class="link-text">Accordion Title 2</div>
              </template>
              <template v-slot:accordion-body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur dicta esse mollitia! Labore, quae,
                similique?
              </template>
            </Accordion>
            <Accordion type="basic"
                       class="mar-b-1">
              <template v-slot:header>
                <div class="link-text">Accordion Title 3</div>
              </template>
              <template v-slot:accordion-body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur dicta esse mollitia! Labore, quae,
                similique?
              </template>
            </Accordion>
          </div>
        </template>
        <template v-slot:code-slot>
        <pre>
        <code class="language-html" v-html="accordion.group"></code>
      </pre>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block">
      <h3 class="page-subtitle">Basic Accordion without caret</h3>
      <div class="component-description">
        Here you can use our basic Accordion component with its default styling,
        but without caret.
        Also you can add aligning of header text.
      </div>
      <DemonstrationBox v-if="storeComponents.componentsLoaded"
                        @copy-clicked="copyClicked">
        <template v-slot:demo-slot>
          <div class="accordions-block">
            <Accordion type="basic"
                       no-caret="true"
                       align="center"
                       class="mar-b-1">
              <template v-slot:header>
                <div class="link-text">Accordion Title</div>
              </template>
              <template v-slot:accordion-body>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias aspernatur assumenda dolorum iure mollitia
                  nemo tempora? Alias amet cupiditate,
                  dicta earum eum maiores nemo repellat?</p>
              </template>
            </Accordion>
            <Accordion type="basic"
                       no-caret="true"
                       class="mar-b-1">
              <template v-slot:header>
                <div class="link-text">Accordion Title 2</div>
              </template>
              <template v-slot:accordion-body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur dicta esse mollitia! Labore, quae,
                similique?
              </template>
            </Accordion>
            <Accordion type="basic"
                       no-caret="true"
                       align="right"
                       class="mar-b-1">
              <template v-slot:header>
                <div class="link-text">Accordion Title 3</div>
              </template>
              <template v-slot:accordion-body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur dicta esse mollitia! Labore, quae,
                similique?
              </template>
            </Accordion>
          </div>
        </template>
        <template v-slot:code-slot>
        <pre>
          <code class="language-html" v-html="accordion.noCaret"></code>
        </pre>
        </template>
      </DemonstrationBox>
    </div>
  </div>
</template>

<script setup>
import {reactive, watch} from "vue";
import Accordion from "@/components/accordions/Accordion.vue";
import {onMounted} from "vue";
import {useStoreComponents} from "@/stores/storeComponents.js";
import {useDecodeHtmlEntities} from '@/use/useDecodeHtml.js';
import {usePrismInitialization} from '@/use/usePrismInitialization.js';
import {useCopyClickedHandler} from '@/use/useCopyClicked.js';

const storeComponents = useStoreComponents();

let accordion = reactive({
  noCaret: null,
  group: null,
});

usePrismInitialization();

onMounted(async () => {
  await storeComponents.getComponents('accordion');
});

// Component types enums
const ComponentType = {
  AccordionWithoutCaret: 'Accordion without caret',
  AccordionGroup: 'Accordion Group'
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
        case ComponentType.AccordionWithoutCaret:
          accordion.noCaret = replacedValue;
          break;
        case ComponentType.AccordionGroup:
          accordion.group = replacedValue;
          break;
      }
    });

    setTimeout(() => {
      Prism.highlightAll();
    }, 100);

  }
});
</script>