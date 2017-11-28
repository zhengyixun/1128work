Vue.use(save);
const routes = [
    {path:"/",component:index},
    {path:"/Info",component:Info,children:[
        {path:"",component:InfoSon},
        {path:"List/:id",component:con},
    ]},
    {path:"/Doc",component:Doc,children:[
        {path:"",components:{
            left:left,right:right
        }}
    ]},
    {path:"/Logins",component:Logins},
    {path:"*",redirect:"/"},
];
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});
new Vue({
    el:"#root",
    router:router,
});