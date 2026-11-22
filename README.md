# Kasi Boost (repository starter)

This repository currently contains a **deployment-status starter page**, not the complete Kasi Boost business application. Authentication, business features, and verified database connectivity are not implemented in the checked-in source.

## Development

```bash
npm install
npm run dev
```

## Environment configuration

Copy `.env.example` to `.env.local` and supply your Supabase project URL and publishable key. A Supabase publishable key is safe to use in browser code only when database permissions are correctly protected by Row Level Security (RLS). Never place a service-role key or other server secret in a `NEXT_PUBLIC_` variable.

## Production readiness

Do not treat the starter page's deployment indicator as a live health check. Before launch, implement real authentication, configure and verify Supabase RLS policies, add server-side authorization where needed, and run production build and tests.
