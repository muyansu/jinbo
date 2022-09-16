<template>
    <div>
        <div class="father" @mouseover="enter" @mouseleave="leave">
                <div class="left" v-show="left" @click="Tolast"> <  </div>
                <div  class="children" v-for="(item,index) in photoList"  >
                    <img :src='item.url' v-show="cindex==index"  >
                </div>
                <div class="right" v-show="right" @click="AutoGo"> > </div>
                <span  v-for="(item,index) in photoList" :class="cindex==index?'point':'slide_page'" @click="changeIndex(index)"></span>
        </div>
    </div>
</template>

<script>
export default{
    name:"AutoPhoto",
    data(){
        return{
            timer:null,
            right:false,
            left:false,
            cindex:0,
            photoList:''
            // photoList:[{url:"https://b.zol-img.com.cn/desk/bizhi/image/10/960x600/1598319721647.jpg",index:0},{url:"https://ts1.cn.mm.bing.net/th/id/R-C.541d315de4b11e79e0bcb84f35ccf30b?rik=V96LdUGfUZJu5g&riu=http%3a%2f%2fimage.qianye88.com%2fpic%2f812f74e3a664e1c2b1e0e8cde0480e8c&ehk=o55Cw49jjhzmX%2bO%2fvYRXQsoMo3R%2f%2fuXTqpx%2bM88E63M%3d&risl=&pid=ImgRaw&r=0",index:1},{url:"https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/03/ChMkJlbKxy-IT_laAAP1DG9eVXQAALHwQC7EpUAA_Uk494.jpg",index:2},{url:"https://tse1-mm.cn.bing.net/th/id/OIP-C.j0Cbw9yFoU3bquvt47tHdQHaEo?w=296&h=185&c=7&r=0&o=5&pid=1.7",index:3}]
        }
    },
    props:{
        message:{
            type:Array,
            default:''
        }
    },
    mounted(){
        console.log(this.message)
        this.photoList=this.message
    },
    created(){
        this.AutoGoPhoto();
    },
    methods:{
        AutoGoPhoto(){
            this.timer =setInterval(this.AutoGo,3000)
        },
        AutoGo(){
            if(this.cindex>=this.photoList.length-1){
                this.cindex=0
            }else{
                 this.cindex++;
            }
           
        },
        Tolast(){
             if(this.cindex<1){
                this.cindex=this.photoList.length-1;
            }else{
                 this.cindex--;
            }
        },
        enter(){
            this.right=true;
            this.left=true;
            clearInterval(this.timer)
            this.$emit("son",this.right)
        },
        leave(){
             this.right=false;
            this.left=false;
            this.AutoGoPhoto();
              this.$emit("son",this.right)
            
        },
        changeIndex(index){
            this.cindex=index;
        }
    }
}

</script>

<style scoped>
.fater{
    max-width: 960px;
    height: 600px;
    position: relative;
}
.left{
    width: 30px;
    height: 60px;
    font-size: 40px;
    position: absolute;
    z-index: 2000;
    background: rgb(128,118,105,0.45);
    top: 50%;
    margin-top: -30px;
}
.content{
    width: 960px;
    height: 600px;
    position: relative;
}
.right{
    width: 30px;
    height: 60px;
    font-size: 40px;
    position:absolute;
    z-index: 2000;
    background: rgb(128,118,105,0.45);
    top: 50%;
    left:1138px;
    margin-top: -30px;
}
.children{
    overflow: hidden;
    /* position: relative; */
    
}
.slide_page{
    display: block;
    width: 10px;
    height: 10px;
    z-index: 2000;
    margin-right: 10px;
    background-color: rgb(128,118,105,0.85);
    border-radius: 50%;
    transform: translate(10px,10px);
    float: left;
    transform: translate(450px,-30px);
}
.point{
    background-color: #000;
    display: block;
    width: 10px;
    height: 10px;
    z-index: 2000;
    margin-right: 10px;
    border-radius: 50%;
    transform: translate(10px,10px);
    float: left;
    transform: translate(450px,-30px);
}

img{
    width: 960px;
    height: 600px;
}
</style>