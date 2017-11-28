Vue.component("Navs",{
    template:`
    <div class="nav">
    <ul>
    <li v-for="(item,key) in navData" :key="key" >
   <router-link :to="item.url" exact>{{item.title}}</router-link>
   </li>
   <li>
   <router-link to="/Logins" v-if="!islogin">登录</router-link>
   
   <span v-if="islogin" class="info" @click="show">
   {{name}}
    <span class="loginout" v-show="isshow" @click="loginout">退出</span>
   </span>
   </li>
</ul>
</div>
    `,
    data(){
        return {
            navData:[
                {title:"首页",url:"/"},
                {title:"简介",url:"/Info"},
                {title:"文档",url:"/Doc"},
            ],
            islogin:false,
            name:"",
            isshow:false

        }
    },
    created(){
        this.name=this.get("login","name");
        this.islogin=this.get("login","name");
    },
    methods:{
        show(){
            this.isshow=!this.isshow;
        },
        loginout(){
            this.del("login");
            router.push("/")
        }
    }
});

var index = Vue.component("index",{
    template:`
    <div>
    <Navs></Navs>
    首页
    </div>
    `
});
var Logins=Vue.component("Logins",{
   template:`
<div>
<header class="mui-bar mui-bar-nav">
     <a class="mui-icon mui-icon-undo" @click="back"></a>
			<h1 class="mui-title">登录</h1>
</header>
        <div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='names' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>
			</div>
			<div class="mui-content-padded oauth-area">

			</div>
		</div>
</div>`,
    methods:{
        back(){
            router.push("/")
        },
        submit(){
            var obj={"name":document.querySelector("#names").value};
            this.save("login",obj);
            router.push("/Doc")
            // console.log(obj)
        }
    }
});
var Info=Vue.component("Info",{
    template:`
    <div class="Info">
    <Navs></Navs>
    <transition name="opa" mode="out-in">
    <router-view></router-view>
    </transition>
</div>
    `
});
var InfoSon=Vue.component("InfoSon",{
    template:`

<ul class="mui-table-view" >
    <li class="mui-table-view-cell mui-media">
        <router-link to="/Info/List/1" tag="a">
            <img class="mui-media-object mui-pull-left" src="img/img1.jpg">
            <div class="mui-media-body">
                幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="/Info/List/2" tag="a">
            <img class="mui-media-object mui-pull-left" src="img/img2.jpg">
            <div class="mui-media-body">
                木屋
                <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="/Info/List/3" tag="a">
            <img class="mui-media-object mui-pull-left" src="img/img3.png">
            <div class="mui-media-body">
                CBD
                <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
        </router-link>
    </li>
</ul>
`
})
var con=Vue.component("con",{
    template:`<div>
00000000000000000000000000<br>
{{$route.params.id}}<br>
{{$route.params.id}}<br>
{{$route.params.id}}<br>
{{$route.params.id}}<br>
{{$route.params.id}}<br>

</div>`
});
var Doc=Vue.component("Doc",{
    template:`
    <div class="box">
    <Navs></Navs>
    <router-view name="left" class="left">leftc</router-view>
    <router-view name="right" class="right">RIGHT</router-view>
    </div>
    `
});
var left=Vue.component("left",{
    template:`<div>
    <ul class="ul"> 
    <router-link to="#one" tag="li">one</router-link>
    <router-link to="#two" tag="li">two</router-link>
    <router-link to="#three" tag="li">three</router-link>
    </ul>
</div>`,
    watch:{
        $route(){
            var hash=this.$route.hash.slice(1);

            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber: document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: document.querySelector("#"+hash).offsetTop }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop = this.tweeningNumber.toFixed(0)
                })
                .start();
            animate()
        }
    }
});
var right=Vue.component("right",{
    template:`
<div>
    <div id="one" class="pads">one</div>
    rightC<br>
    rightC<br>
    rightC<br>
    <div id="two" class="pads">two</div>
    rightC<br>
    rightC<br>
    rightC<br>
    rightC<br>
    <div id="three" class="pads">three</div>
    rightC<br>
    rightC<br>
    rightC<br>
    rightC<br>
    rightC<br>
    </div>
    `,

});