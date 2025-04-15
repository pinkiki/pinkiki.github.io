var posts=["hello/","Elpis/","nuxt-study/","interview-me/","vue3-study/","project-summary/","wechat-qrcode/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };