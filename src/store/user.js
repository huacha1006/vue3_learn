import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      name: "张三",
      salary: 20,
    };
  },
  getters: {
    addSalary: (state) => state.salary++,
    salaryShow: (state) => state.salary + "元",
  },
  actions: {
    increment() {
      this.salary += 10;
    },
  },
});
