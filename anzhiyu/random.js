var posts=["GUIYUAN/","configuration/","interview-me/","mysql/","node/","project-summary/","proxy/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };