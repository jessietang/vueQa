<template>
    <div>
        <div class="media" v-for="list in getLists">
            <div class="media-left">
                <button class="btn btn-default" @click="voteUp(list.key)">
                    <span class="glyphicon glyphicon-chevron-up"></span>
                    <span class="vote-count">{{list.voteCount}}</span>
                </button>
                <button class="btn btn-default" @click="voteDown(list.key)">
                    <span class="glyphicon glyphicon-chevron-down"></span>
                </button>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{list.title}}</h4>
                <p>{{list.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            getLists() {
                let lists = this.$store.state.lists;
                lists.sort(function(a,b){
                    return b.voteCount - a.voteCount;
                });
                return lists;
            }
        },
        methods: {
            voteUp(key) {
                console.log(key);
                this.$store.dispatch('voteUp',key);
            },
            voteDown(key){
                this.$store.dispatch('voteDown',key);
            }
        }

    }
</script>
