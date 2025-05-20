var posts=["GUIYUAN/","configuration/","interview-me/","node/","proxy/","mysql/","project-summary/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };