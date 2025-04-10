var posts=["hello/","interview-me/","nuxt-study/","vue3-study/","project-summary/","wechat-qrcode/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };