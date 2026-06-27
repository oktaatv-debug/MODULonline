export async function onRequestPost({ request, env }) {
  const b = await request.json();

  if (!env.ADMIN_PASSWORD) {
    return json({ ok: false, message: "ADMIN_PASSWORD belum diset." });
  }

  if (String(b.password || "") !== env.ADMIN_PASSWORD) {
    return json({ ok: false, message: "Password admin salah." });
  }

  return json({ ok: true, token: env.ADMIN_PASSWORD });
}

function json(d, s = 200) {
  return new Response(JSON.stringify(d), {
    status: s,
    headers: { "Content-Type": "application/json" }
  });
}
