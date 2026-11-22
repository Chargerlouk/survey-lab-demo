// The public demo: Halvora Health Network, an imaginary client.
// Built with:  npm run build:demo      Published with:  npm run publish:demo
//
// Its own Supabase project (not ERKNet's). The key is the PUBLIC (anon /
// publishable) one — safe to publish; never the service-role key or a password.
// The demo licence and Halvora's content are in supabase/demo-company.sql.
//
// signIn: "email" — sign-in links by email only; visitors get a workspace of
// their own from the home page.
window.__SURVEY_CONFIG__ = {
  supabaseUrl: "https://czkxmekxbavnfwrmsivn.supabase.co",
  supabaseAnonKey: "sb_publishable_A_ZXSmQ6xt_vUJKr2rn3Qw_1ohxTfw-",
  theme: "standard",
  productName: "Halvora Health · Surveys",
  signIn: "email",
};
