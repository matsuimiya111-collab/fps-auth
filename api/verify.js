export default function handler(req, res) {
  // 允许 Chrome 插件 / 浏览器跨域调用
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false });

  const code = String(req.body?.code || "").trim();

  // ✅ 你现在可用的授权码（之后可改）
  const VALID_CODES = ["ABC123", "VIP999", "TEST-2026"];

  const ok = VALID_CODES.includes(code);
  return res.status(ok ? 200 : 401).json({ ok });
}
