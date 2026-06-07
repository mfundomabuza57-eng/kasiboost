#!/bin/bash
set -e

# Create deployment package
echo "Creating deployment package..."
cd /workspace

# Prepare for deployment
mkdir -p .vercel
cat > .vercel/project.json << 'JSON'
{
  "projectId": "kasiboost",
  "orgId": "personal"
}
JSON

# Create .env.production
cat > .env.production << 'ENV'
NEXT_PUBLIC_SUPABASE_KEY=sb_publishable_yZAncQaOQWZH1RViipHE7g_-TZNEnU7
ENV

# Show what we have
echo "✓ Project ready for deployment"
ls -la
pwd
