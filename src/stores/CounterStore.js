import { defineStore } from "pinia";

export const useCounterStore = defineStore({
    id: "counter",
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    },
    getters: {
        oddOrEven() {
            return this.count % 2 === 0 ? "even" : "odd";
        }
    }
});