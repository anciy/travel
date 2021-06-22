import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        city:localStorage.city || '北京'
    },
    //没有异步操作，可以省略，不用转发
    // actions:{    
    //     changCity(ctx,city){    //ctx可以拿到commit方法。
    //         ctx.commit('changCity',city)
    //     }
    // },
    mutations:{
        changCity(state,city){
            this.state.city=city
            localStorage.city=city
        }
    }
})