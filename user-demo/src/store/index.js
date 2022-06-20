import Vuex from "vuex";
import Vue from "vue";
import counter from "@/store/counter";
import loginUser from "@/store/loginUser";

Vue.use ( Vuex );

const store = new Vuex.Store ( {
                                   modules: {
                                       counter,
                                       loginUser
                                   },
                                   strict : true
                               } );

window.store = store;

export default store;