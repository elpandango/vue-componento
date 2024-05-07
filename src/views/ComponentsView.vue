<template>
  <div class="page-content">
    <Sidebar>
      <Dropdown></Dropdown>
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
</script>

<style>
</style>
