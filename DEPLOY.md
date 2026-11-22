# Deployment notes

This repo currently contains a Next.js deployment-status starter, not the full Kasi Boost application. The UI does not perform a real Supabase connection test and authentication is not implemented.

## Deploy

1. Import this repository into your deployment provider.
2. Configure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` using your Supabase project's values.
3. Do not add service-role credentials to client-visible variables.
4. Verify RLS policies and real authentication before using production data.

The old temporary preview URL and claims of production readiness have been removed because they may no longer be accurate.
