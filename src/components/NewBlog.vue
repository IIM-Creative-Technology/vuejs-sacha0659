<template>
  <div id="NewBlog">

    <input v-model="blog.title" type="text" class="input" placeholder="Titre"/>
    <input v-model="blog.meta_title" type="text" class="input" placeholder="Méta title"/>
    <input v-model="blog.meta" type="text" class="input" placeholder="meta"/>
    <input v-model="blog.img" type="text" class="input" placeholder="image"/>
    <textarea v-model="blog.content" cols="45" rows="10"></textarea>
    <br>
    <button v-on:click="postBlog" class="button">
      <i class="fa fa-plus"></i> Ajouter
    </button>

  </div>
</template>

<script>
    export default {
  name: 'NewBlog',
  data() {
    return {
      blog: {
        title:'',
        meta_title:'',
        meta:'',
        img:'',
        content:'',
        }
    };
  },

  methods: {
    postBlog(){
      this.$emit("postBlog", this.blog)
    }
    
  }
};



</script>
    
<style scoped>

  #NewBlog{
     
    margin: 0 auto;
    padding: 2%;
    width: 800px;
    height: 800px;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
  
  }
  button{
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input{
    height: 40px;
    width: 300px;
    padding: 10px;
    margin: 0 20px;
  }
  textarea{
    width: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  i{
      padding: 5px;
  }

</style>