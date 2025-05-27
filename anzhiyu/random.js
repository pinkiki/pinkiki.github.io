var posts=["configuration/","GUIYUAN/","interview-me/","node/","proxy/","project-summary/","vue3-study/","mysql/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };