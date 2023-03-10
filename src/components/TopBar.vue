<script setup>
import { ref } from "vue";

const currentIndex = ref(0);
</script>

<script>
export default {
  name: "TopBar",
};
</script>
<template>
  <header class="top_box" :class="currentIndex === 1 ? 'active' : ''">
    <div
      class="left item_box"
      :class="currentIndex === 0 ? 'active' : ''"
      @click="currentIndex = 0"
    >
      左边
    </div>
    <div
      class="right item_box"
      :class="currentIndex === 1 ? 'active' : ''"
      @click="currentIndex = 1"
    >
      右边
    </div>
  </header>
</template>

<style>
.top_box {
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 6px;
  border-radius: 10px;
  margin: 0 20px;
  position: relative;
}
.item_box {
  padding: 10px 16px;
  flex: 1;
  border-radius: 10px;
  transition: all 0.5s;
  z-index: 1;
}
.left {
  margin-right: 20px;
}
.active {
  color: blue;
}
.top_box::before {
  content: "";
  height: calc(80%);
  width: calc(50% - 10px);
  position: absolute;
  background-color: #fff;
  z-index: 0;
  transition: all 0.4s;
  border-radius: 10px;
}

.top_box.active::before {
  content: "";
  height: calc(80%);
  width: calc(50% - 10px);
  position: absolute;
  background-color: #fff;
  z-index: 0;
  transform: translateX(calc(100% + 8px));
  border-radius: 10px;
}
</style>
