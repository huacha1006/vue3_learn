<template>
  <h2 class="hello">我是son组件</h2>
  <el-button type="success" @click="login">登录</el-button>
  <el-button type="primary" @click="($event) => check()">测试节流</el-button>
  <el-card> 名字 {{ perosnName }} </el-card>
  <Child></Child>
</template>

<script>
import Child from "@/components/Child";
import { onMounted, reactive, toRef } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { throttle } from "@/utils/common";
export default {
  name: "HelloWorld",
  components: { Child },
  setup() {
    const person = reactive({
      name: "张666三",
      age: 18,
    });

    let perosnName = toRef(person, "name");

    const login = () => {
      ElMessageBox.confirm("确定登录嘛?", "提示", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "登录成功",
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "取消登录",
          });
        });
      // ElMessage.success("提示一下");
    };
    const consoleSomething = () => {
      console.log("提交事件");
    };
    const check = throttle(consoleSomething, 1000);

    onMounted(() => {});

    return {
      login,
      check,
      perosnName,
    };
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.triangle {
  height: 0;
  width: 0;
  border: 50px solid;
  border-color: transparent transparent red transparent;
}
</style>
