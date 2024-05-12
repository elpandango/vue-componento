<template>
  <div class="page-content">
    <Sidebar>

      <Accordion height="32px">
        <template v-slot:header>
          <div class="link-text">Components</div>
        </template>
        <template v-slot:accordion-body>
          <ul class="link-sublist">
            <li>
              <router-link
               :to="{name: 'Accordions'}"
               class="accordion-item"
               active-class="active"
               tag="li">Accordions
              </router-link>
            </li>
            <li>
              <router-link
               :to="{name: 'Inputs'}"
               class="accordion-item"
               active-class="active"
               tag="li">Input
              </router-link>
            </li>
            <li class="accordion-item">Textarea</li>
            <li class="accordion-item">Button</li>
            <li class="accordion-item">Progressbar</li>
            <li class="accordion-item">Forma</li>
          </ul>
        </template>
      </Accordion>

      <Accordion>
        <template v-slot:header>
          <div class="link-text">Templates</div>
        </template>
        <template v-slot:accordion-body>
          <ul class="link-sublist">
            <li class="accordion-item">Input</li>
            <li class="accordion-item">Textarea</li>
            <li class="accordion-item">Button</li>
            <li class="accordion-item">Progressbar</li>
            <li class="accordion-item">Textarea</li>
            <li class="accordion-item">Button</li>
            <li class="accordion-item">Progressbar</li>
          </ul>
        </template>
      </Accordion>

    </Sidebar>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Sidebar from "@/components/sidebars/Sidebar.vue";
import Accordion from "@/components/accordions/Accordion.vue";
</script>

<style
    scoped
    lang="scss">
.accordion-item {
  line-height: 32px;
  display: block;
  text-decoration: none;
  border-radius: 4px;
  transition: all .3s;
  padding: 0 8px;

  &:hover {
    background-color: $neutral-400;
  }

  &.active {
    font-weight: bold;
    background-color: $neutral-500;
  }
}

.link-text {
  font-size: 18px;
  padding: 0 8px;
}
</style>
