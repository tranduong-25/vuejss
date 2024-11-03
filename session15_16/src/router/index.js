import HomeView from "@/views/HomeView.vue"
import ContactView from "@/views/ContactView.vue"
import AboutView from "@/views/AboutView.vue"
import ProductDetail from "@/views/ProductDetail.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/product/:id",
        name: "productDetail",
        component: ProductDetail,
    },
]
const router  = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;