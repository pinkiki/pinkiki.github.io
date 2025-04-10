var posts=["hello/","nuxt-study/","interview-me/","project-summary/","vue3-study/","wechat-qrcode/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };