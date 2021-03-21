import { createStore } from 'vuex'

export default createStore({
  state: {
    blogs:[]
  },
  mutations: {
    ADD_BLOG(state,blogs){
      let new_blog = {'title': blogs.title , 'meta_title': blogs.meta_title, 'meta':blogs.meta, 'img':blogs.img,'content':blogs.content}
      state.blogs.push (new_blog);
    }
  },
  actions: {
    add_blog(context, blog){
      context.commit('ADD_BLOG',blog)
    }
  },
  modules: {
  }
})
