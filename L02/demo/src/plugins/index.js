//插件就是vue对象，必须有一个install方法 ，第一个参数必须是Vue.
let myPlugins={
    install:function(Vue,options){
            //通过方法 的第一个参数Vue，去注册。 protoType属性是构造函数的原型对象，构造函数上的原型对象上添加的所有成员，构建函数的实例都将拥有。
            Vue.prototype.myName="许棕"
            Vue.prototype.sayHi=function(){
                alert('大家好')
            }

            //添加全局过滤器。
           Vue.filter('tofixed2',function(value){
               return value.toFixed(2)
           })

           //添加全局组件。
           Vue.component('b-button',{
            //    template:'<button style="background:skyblue" @click="click"><slot><slot></button>',
            //    methods:{
            //        click(){
            //            alert('点我干嘛！')
            //        }
            //    }

            render :h=>{
                    return h('button','我是自定义按钮');
            }

           })

           //全局混入。
           Vue.mixin({
               data(){
                   return {
                       goodses:['青菜','海鲜']
                   }
               },
               methods:{
                   sayHello(){
                       alert("我喜欢吃的食物包括："+this.goolses)
                   }
               },
               mounted(){
                   console.log("页面挂载完毕。。。。");
               }


           });
    }
}

export default  myPlugins