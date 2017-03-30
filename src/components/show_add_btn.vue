<template>
    <button id="add-question-btn" class="btn btn-success" @click="formDisplay">添加问题</button>
</template>

<script>
    export default {
        methods: {
            formDisplay() {
                //子组件可以使用$emit触发父组件的自定义事件
                this.$emit('formShow')
            }
        }
    }
</script>
