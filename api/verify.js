export default function handler(req, res) {
  // 允许跨域（给 Chrome 插件 / 浏览器调用）
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // 处理预检请求
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const code = String(req.body?.code || "").trim();

  // ✅ 临时测试授权码（跑通后可换）
  const VALID_CODES = ["ABC123", "VIP999", "TEST-2026"];

  const ok = VALID_CODES.includes(code);
  return res.status(ok ? 200 : 401).json({ ok });
}
