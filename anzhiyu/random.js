var posts=["Elpis/","interview-me/","hello/","nuxt-study/","project-summary/","wechat-qrcode/","vue3-study/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };