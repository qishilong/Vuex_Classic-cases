import Home from "../views/Home";
import Loading from "@/views/Loading";
import Login from "@/views/Login";
import News from "@/views/News";
import User from "@/views/User";

export default [
    { path       : "/",
        component: Home
    },
    { path       : "/loading",
        component: Loading
    },
    { path       : "/news",
        component: News,
        meta     : { auth: true }
    },
    { path       : "/login",
        component: Login
    },
    { path       : "/user",
        component: User,
        meta     : { auth: true }
    }
];