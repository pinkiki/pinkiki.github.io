var posts=["GUIYUAN/","configuration/","interview-me/","mysql/","node/","nuxt-study/","project-summary/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };