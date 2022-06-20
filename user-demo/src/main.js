import Vue from "vue";
import App from "@/App.vue";
import router from "./router";
import store from "@/store";

store.dispatch ( "loginUser/whoAmI" );

new Vue ( {
              store,
              router,
              render: ( h ) => h ( App )
          } ).$mount ( "#app" );