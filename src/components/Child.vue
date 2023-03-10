<script setup>
import { inject, ref } from "vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

const info = inject("info");
const store = useUserStore();
const divDom = ref(null);

const { name, salary, salaryShow } = storeToRefs(store);

const addBtn = () => {
  salary.value++;
};

const resetBtn = () => {
  store.$reset();
};

const getDom = () => {
  console.log("divDom", divDom);
};
</script>
<script>
export default {
  name: "Child",
};
</script>

<template>
  <h2>我是child组件</h2>
  <h2>姓名：{{ name }}</h2>
  <h2>工资：{{ salaryShow }}</h2>
  <h2>{{ info.age }}</h2>
  <el-button type="primary" @click="addBtn">涨工资</el-button>
  <el-button type="danger" @click="resetBtn">重置工资</el-button>
  <el-button type="primary" @click="getDom">获取dom</el-button>
  <h2 ref="divDom">我是h2</h2>
</template>

<style></style>
