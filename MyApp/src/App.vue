<template>
  <div>
    <Header></Header>
    <!-- <AutoPhoto :message="photoList" style="margin-left: 200px;" @son="see"></AutoPhoto> -->
    <Footer v-show="$route.meta.show"></Footer> 
    
  </div>
</template>

<script >
// import AutoPhoto from './components/AutoPhoto.vue';
import Footer from './components/Footer/index.vue';
import Header from './components/Header/index.vue';
export default{
    name: "",
    components: { Header, Footer},
    data(){
      return{
        //  photoList:[{url:"https://b.zol-img.com.cn/desk/bizhi/image/10/960x600/1598319721647.jpg"},{url:"https://ts1.cn.mm.bing.net/th/id/R-C.541d315de4b11e79e0bcb84f35ccf30b?rik=V96LdUGfUZJu5g&riu=http%3a%2f%2fimage.qianye88.com%2fpic%2f812f74e3a664e1c2b1e0e8cde0480e8c&ehk=o55Cw49jjhzmX%2bO%2fvYRXQsoMo3R%2f%2fuXTqpx%2bM88E63M%3d&risl=&pid=ImgRaw&r=0"},{url:"https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/03/ChMkJlbKxy-IT_laAAP1DG9eVXQAALHwQC7EpUAA_Uk494.jpg"},{url:"https://tse1-mm.cn.bing.net/th/id/OIP-C.j0Cbw9yFoU3bquvt47tHdQHaEo?w=296&h=185&c=7&r=0&o=5&pid=1.7"}]
      }
     
    },
    methods:{
      // see(data){
      // console.log(data,"子组件传的值")
      // }
    }
  
}

</script>

<style scoped>


</style>