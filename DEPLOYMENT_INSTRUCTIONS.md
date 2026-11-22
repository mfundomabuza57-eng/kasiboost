# Deployment checklist

This repository is a deployment-status starter page only; it is not the complete Kasi Boost application. It does not currently include authentication or a verified Supabase connection.

1. Import the repository into your deployment provider.
2. Configure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in that provider's environment settings.
3. Run a production build and verify deployment.
4. Before using real business data, implement authentication and verify Supabase Row Level Security (RLS) policies.

Never expose service-role keys or other server secrets in browser code or `NEXT_PUBLIC_` variables.
