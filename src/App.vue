<template>
  <div id="app"><br>
  <nav>
     <a @click="$router.replace('/blog')"> Blog </a>
     <a @click="$router.replace('/admin')"> Admin </a>

  </nav>
            <router-view></router-view>
        
  </div>
</template>

<script>


export default {
  name: 'app',
  
}
</script>

<style>
   #app{
    background-color: bisque;
    height: 900px;
  
    width: 90%;
    margin: auto;
    } 
    nav{
      font-size: 25px;
      

    }
</style>