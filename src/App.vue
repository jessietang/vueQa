<template>
    <div id="app">
        <div class="jumbotron text-center">
            <div class="container">
                <h1>Vue问答</h1>
                <!--使用v-on绑定自定义事件formShow-->
                <!--<show-add-btn v-on:formShow="formDisplay"></show-add-btn>-->
                <show-add-btn @formShow="formDisplay"></show-add-btn>
            </div>
        </div>
        <div class="main container">
            <question-form v-bind:is-show="formShow" @formShow="formDisplay"></question-form>
            <div id="questions" class="">
                <question-list></question-list>
            </div>
        </div>
    </div>
</template>

<script>
    import showAddBtn from './components/show_add_btn.vue';
    import questionForm from './components/question_form.vue';
    import questionList from './components/question_list.vue';

    import '../bower_components/bootstrap/dist/css/bootstrap.min.css';

    export default {
        data() {
            return {
                formShow: false
            }
        },
        components: {
            showAddBtn,
            questionForm,
            questionList
        },
        methods: {
            formDisplay() {
                this.formShow = !this.formShow;
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .container{
        max-width: 800px;
    }
    .jumbotron .container{
        position: relative;
        max-width: 800px;
    }
    #add-question-btn{
        position: absolute;
        bottom: -20px;
        right: 20px;
    }
    form[name="addQuestion"] .btn{
        margin: 20px 0 0 15px;
    }
    .media-left{
        text-align: center;
        width:70px;
        float: left;
    }
    .media-left .btn{
        margin-bottom: 10px;
    }
    .vote-count{
        display: block;
    }


</style>
