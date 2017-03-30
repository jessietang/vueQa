<template>
    <form name="addQuestion" class="clearfix question-form" :class="{'formShow': isShow}">
        <div class="form-group">
            <label for="qtitle">问题</label>
            <input type="text" class="form-control" id="qtitle" placeholder="您的问题的标题" v-model="title">
        </div>
        <textarea class="form-control" rows="3" placeholder="问题的描述" v-model="description"></textarea>
        <button class="btn btn-success pull-right" @click.prevent="submit">确认</button>
        <button class="btn btn-default pull-right" @click="formDisplay">取消</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                description: ''
            }
        },
        props: ['isShow'], /*父组件可以使用props把值传给子组件*/
        methods: {
            formDisplay() {
                this.title = '';
                this.description = '';
                this.$emit('formShow');
            },
            submit() { // 记得阻止默认事件
                let self = this;
                let obj = {
                    key: 0,
                    title: '',
                    description: '',
                    voteCount: 0
                };
                self.title = self.title.trim();
                self.description = self.description.trim();
                if(self.title && self.description){
                    obj.title = self.title;
                    obj.description = self.description;
                    self.$store.dispatch('addQuestion',obj);
                    self.title = '';
                    self.description = '';
                    console.log(self.$store.state.lists);
                }

            }
        }
    }
</script>

<style>
    .question-form {
        display: none;
    }

    .formShow {
        display: block;
    }
</style>
