var posts=["GUIYUAN/","configuration/","interview-me/","node/","mysql/","project-summary/","proxy/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };