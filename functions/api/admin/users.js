async function admin(c) {
  const t = c.request.headers.get("X-Admin-Token");
  return t && c.env.ADMIN_PASSWORD && t === c.env.ADMIN_PASSWORD;
}
