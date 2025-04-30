var posts=["GUIYUAN/","configuration/","interview-me/","mysql/","nuxt-study/","node/","project-summary/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };