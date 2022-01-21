module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/styles/reset.scss";
          `,
      },
    },
  },
};
