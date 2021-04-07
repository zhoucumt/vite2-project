export default function orderPlugin() {
  return {
    name: 'vite-plugin-order', // 必须的，将会显示在 warning 和 error 中

    options(opts) {
      console.log('======options======: ', opts);
    },

    buildStart() {
      console.log('======buildStart======: ');
    },

    config(config) {
      console.log('======config======: ', config);
      return {};
    },

    configResolved(resolvedConfig) {
      console.log('======configResolved======: ');
    },

    configureServer(server) {
      console.log('======configureServer======: ');
    },

    transformIndexHtml(html) {
      console.log('======transformIndexHtml======: ');
      return html;
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>Title replaced!</title>`
      )
    },

    resolveId(id) {
      console.log('======resolveId======: ', id);
      // if (id === virtualFileId) {
      //   return virtualFileId
      // }
      return null; // 返回null表明是其他id需要继续处理
    },

    load(id) {
      console.log('======load======: ', id);
      // if (id === virtualFileId) {
      //   return `export const msg = "from virtual file"`
      // }
      return null;
    },

    transform(code, id) {
      console.log('======transform======: ', id);
      return code;
    }
  }
}
