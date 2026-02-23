// EdgeOne 边缘函数（Node.js 环境）
export async function handleRequest(request) {
  // 服务端生成时间（避免老IE不支持JS Date）
  const now = new Date().toString();
  
  // 极致兼容 HTML（IE 1.0 友好，无CSS/JS）
  const html = `
<html>
<head>
    <title>窄带拨号上网测试页</title>
</head>
<body>
    <h1>连接成功</h1>
    <p>如果您能看到此页，说明窄带拨号工作正常。</p>
    <p>【当前时间】 ${now}</p>
    <p>【页面体积】 &lt; 1 KB</p>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=gb2312' },
  });
}
