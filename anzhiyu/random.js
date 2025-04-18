var posts=["configuration/","Elpis/","nuxt-study/","project-summary/","hello/","wechat-qrcode/","interview-me/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };