import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    lists: [
        {
            key: 1,
            title: '产品经理与程序员矛盾的本质是什么？',
            description: '理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
            voteCount: 2
        },
        {
            key: 2,
            title: '热爱编程是一种怎样的体验？',
            description: '别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
            voteCount: 5
        }
    ]
};

const mutations = {
    ADD_QUESTION(state, obj){
        obj.key = state.lists.length+1;
        state.lists.push(obj);
    },
    VOTE_UP(state, key){
        let lists = state.lists;
        for(let i=0; i<lists.length; i++){
            if(lists[i].key == key){
                lists[i].voteCount++;
                break;
            }
        }
    },
    VOTE_DOWN(state, key){
        let lists = state.lists;
        for(let i=0; i<lists.length; i++){
            if(lists[i].key == key){
                lists[i].voteCount--;
                break;
            }
        }
    }
}

const actions = {
    // commit mutations
    addQuestion({commit},obj){
        commit('ADD_QUESTION',obj)
    },
    voteUp({commit},key){
        commit('VOTE_UP',key);
    },
    voteDown({commit},key){
        commit('VOTE_DOWN',key);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
