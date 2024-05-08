<template>
  <div class="page-content">
    <Sidebar>

      <Accordion>
        <template v-slot:header>
          <div class="link-text">Components</div>
        </template>
        <template v-slot:accordion-body>
          <ul class="link-sublist">
            <li class="accordion-item">Input</li>
            <li class="accordion-item">Textarea</li>
            <li class="accordion-item">Button</li>
            <li class="accordion-item">Progressbar</li>
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

      <!--      <Dropdown-->
      <!--          :min-width="'92px'">-->
      <!--        <template v-slot:header>-->
      <!--          Dropdown-->
      <!--        </template>-->
      <!--        <template v-slot:content>-->
      <!--          <div class="select-options">-->
      <!--            <div-->
      <!--                class="option"-->
      <!--                v-for="(item, idx) in [1,2,3,4,5]"-->
      <!--                :key="idx">-->
      <!--              {{ item}}-->
      <!--              &lt;!&ndash;              <svg-icon icon="plus"&ndash;&gt;-->
      <!--              &lt;!&ndash;                        class="filter-marker"&ndash;&gt;-->
      <!--              &lt;!&ndash;                        :class="{active: item.isActive}"/>&ndash;&gt;-->

      <!--            </div>-->
      <!--          </div>-->
      <!--        </template>-->
      <!--      </Dropdown>-->
    </Sidebar>
    <main class="main">
      main content
    </main>
  </div>
</template>

<script
    setup
    lang="ts">
import Sidebar from "@/components/sidebars/Sidebar.vue";
import Dropdown from "@/components/dropdowns/Dropdown.vue";
import Accordion from "@/components/accordions/Accordion.vue";

</script>

<style lang="scss">
.accordion-item {
  line-height: 24px;
}

.link-text {
  font-size: 18px;
}
</style>
