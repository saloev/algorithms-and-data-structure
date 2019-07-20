
module.exports = { 
  devServer: {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
   css: {
     loaderOptions: {
       sass: {
         data: `
           @import "~@/scss/app.scss";
           `,
         outputStyle: "expanded",
       }
     },
   },
 };
 