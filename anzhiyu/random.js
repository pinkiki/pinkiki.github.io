var posts=["configuration/","interview-me/","node/","mysql/","proxy/","project-summary/","GUIYUAN/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };