<template>
  <div>
    <h1>Accordions</h1>

    <DemonstrationBox>
      <template v-slot:demo-slot>
        <Accordion>
          <template v-slot:header>
            <div class="link-text">Components</div>
          </template>
          <template v-slot:accordion-body>
            <ul class="link-sublist">
              <router-link
                  :to="{name: 'Inputs'}"
                  class="accordion-item"
                  active-class="active"
                  tag="li">Input
              </router-link>
              <li class="accordion-item">Textarea</li>
              <li class="accordion-item">Button</li>
              <li class="accordion-item">Progressbar</li>
              <li class="accordion-item">Forma</li>
              <router-link
                  :to="{name: 'Accordions'}"
                  class="accordion-item"
                  active-class="active"
                  tag="li">Accordions
              </router-link>
            </ul>
          </template>
        </Accordion>
      </template>
      <template v-slot:code-slot>
       <pre class="language-html">
    <code>
&lt;Accordion&gt;
  &lt;template v-slot:header&gt;
    &lt;div class="link-text"&gt;Components&lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:accordion-body&gt;
    &lt;ul class="link-sublist"&gt;
      &lt;router-link
        :to="{name: 'Inputs'}"
        class="accordion-item"
        active-class="active"
        tag="li"&gt;Input
      &lt;/router-link&gt;
      &lt;li class="accordion-item"&gt;Textarea&lt;/li&gt;
      &lt;li class="accordion-item"&gt;Button&lt;/li&gt;
      &lt;li class="accordion-item"&gt;Progressbar&lt;/li&gt;
      &lt;li class="accordion-item"&gt;Forma&lt;/li&gt;
      &lt;router-link
        :to="{name: 'Accordions'}"
        class="accordion-item"
        active-class="active"
        tag="li"&gt;Accordions
      &lt;/router-link&gt;
    &lt;/ul&gt;
  &lt;/template&gt;
&lt;/Accordion&gt;
    </code>
  </pre>
      </template>
    </DemonstrationBox>
  </div>
</template>

<script setup>
import DemonstrationBox from "@/components/demonstration/DemonstrationBox.vue";
import Accordion from "@/components/accordions/Accordion.vue";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import {onMounted} from "vue"; // you can change

onMounted(() => {
  window.Prism = window.Prism || {};
  window.Prism.manual = true;
  Prism.highlightAll(); // highlight your code on mount
});
</script>

<style
    scoped
    lang="scss">

</style>
