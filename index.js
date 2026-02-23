// 兼容 Cloudflare Workers / EdgeOne 边缘函数
export default {
  async fetch(request, env, ctx) {
    // 服务端生成时间（老IE无需跑JS）
    const time = new Date().toString();
    
    // 极致兼容 HTML（IE 1.0 友好，纯文本）
    const html = `
<html>
<head>
    <title>窄带拨号上网测试页</title>
</head>
<body>
<pre>
===============================================================================
                         窄带拨号上网测试页
                     (极小组件 · 兼容最老IE)
===============================================================================
【当前时间】 ${time}
【连接状态】 已连接 — 页面成功加载 (HTTP 200)
【页面体积】 < 1 KB (无图片, 无CSS, 无外部字体)
【测试说明】 此页专为窄带/拨号上网设计，加载极快。
           若您能看到此文字，证明拨号连接正常，HTTP 传输畅通。
【兼容提示】 在 IE5/6/7/8 及更早期版本中均可正常显示。
===============================================================================
</pre>
</body>
</html>`;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=gb2312' },
    });
  },
};
