var posts=["configuration/","interview-me/","mysql/","GUIYUAN/","nuxt-study/","project-summary/","node/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };