import VueRouter from "vue-router";
import routes from "@/router/routes";
import Vue from "vue";
import store from "@/store";

Vue.use ( VueRouter );
const router = new VueRouter ( {
                                   routes,
                                   mode: "history"
                               } );
router.beforeEach ( ( to,
                      from,
                      next ) => {
    if ( to.meta.auth ) {
        // 需要鉴权, 进入鉴权流程
        const status = store.getters[ "loginUser/status" ];
        if ( status === "loading" ) {
            next ( {
                       path : "/loading",
                       query: {
                           returnurl: to.fullPath
                       }
                   } );
        } else if ( status === "login" ) {
            // 登陆过了
            next ();
        } else {
            // 未登录
            alert ( "请先登录" );
            next ( {
                       path : "/login",
                       query: {
                           returnurl: to.fullPath
                       }
                   } );
        }
    } else {
        next ();
    }
} );
export default router;