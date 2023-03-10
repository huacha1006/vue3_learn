<template>
  <TopBar />
  <h2 ref="h2">我是祖先组件</h2>
  <h2>我是祖先组件的age ：{{ infomation.age }}</h2>
  <el-button @click="infomation.age++">aaa</el-button>
  <HelloWorld> </HelloWorld>
</template>

<script>
import { reactive, provide, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TopBar from "./components/TopBar.vue";
export default {
  name: "App",
  components: { HelloWorld, TopBar },
  setup() {
    let infomation = reactive({
      name: "章三",
      age: "18",
    });
    provide("info", infomation);

    let h2 = ref(null);
    console.log("h2", h2);
    return {
      infomation,
      h2,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
