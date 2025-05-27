var posts=["GUIYUAN/","configuration/","interview-me/","mysql/","proxy/","node/","project-summary/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };