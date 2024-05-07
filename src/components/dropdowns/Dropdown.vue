<template>
  <div class="dropdown">
    <div
        class="dropdown-toggle"
        @click="toggleDropdown">{{ selectedOption.label }}
    </div>
    <div
        class="dropdown-menu"
        :class="{active: isOpen}">
      <div
          class="dropdown-item"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)">
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const isOpen = ref(false);
let selectedOption = ref({value: null, label: 'Please select one'});

const options = ref([
  {value: 'option1', label: 'Option 1'},
  {value: 'option2', label: 'Option 2'},
  {value: 'option3', label: 'Option 3'}
]);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption = {...option};
  isOpen.value = false;
}

</script>

<style
    scoped
    lang="scss">
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  display: none;
}

.dropdown-menu.active {
  display: block;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
