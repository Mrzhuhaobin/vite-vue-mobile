<template>
    <div class="page page-home">
        <h1>首页</h1>
        <ul class="page-home-list">
            <li v-for="item in state.list" :key="item">{{item}}</li>
        </ul>
        <router-link to="/about">关于</router-link>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup () {
        const state = reactive({
            list: []
        });
        const fetchHomeData = () => {
            state.list = [
                '张三',
                '李四',
                '王五',
                '赵六'
            ]
        };
        fetchHomeData();
        return {
            state
        }
    }
}
</script>

<style lang="scss">
.page-home {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 20px;
        color: #333;
        font-weight: bold;
        margin-bottom: 20px;
    }
    &-list {
        background-color: #fff;
        width: 300px;
        margin-bottom: 20px;
    }
}
</style>