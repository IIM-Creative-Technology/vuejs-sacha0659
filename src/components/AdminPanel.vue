<template>
  <div id="AdminPanel">
    <NewBlog @postBlog="add_blog"></NewBlog>
  </div>
</template>

<script>
 import { mapActions, mapState } from "vuex"
import NewBlog from './NewBlog.vue'

export default {
  name: 'AdminPanel',
  components: 
    {NewBlog, 
    },

    methods: {
      ...mapActions(['add_blog']),
    },
    computed: {
      ...mapState(['blogs'])
     
    }

}
</script>
    
<style scoped>

  #AdminPanel{
    margin: 0 auto;
    padding: 2%;
    width: 800px;
    height: 800px;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
  }

  .titre{
      color: rgb(52, 155, 168);
      float: left;
      margin-left: 150px;
    }


</style>