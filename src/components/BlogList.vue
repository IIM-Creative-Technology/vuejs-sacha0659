<template>
  <div id="BlogList">

    <h1>Tous les blogs</h1>

    <section id="blog" v-for="(blog, index) in blogs" :key="(blog, index)">
        <img v-bind:src="blog.img"  alt="">
        <p>{{blog.title}}</p>
        <p>{{blog.content}}</p>
    </section>

    

  </div>
</template>


<script>
 import {  mapState } from "vuex"
export default {
  
  name: 'BlogList',


  computed: {
      ...mapState(['blogs'])
     
    },

};


</script>
    
<style scoped>

li{
  height: 50px;
}

#blog{
  display: flex;
  width:80%;
  background-color: aliceblue;
}
p{
  padding: 2% 5%;
}
img{
  max-height: 360px;
  max-height: 360px;
}
h1{
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  color: burlywood;
}
</style>