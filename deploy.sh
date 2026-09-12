#!/usr/bin/env bash
# One-shot deploy script for zeeshanali0001.github.io
# Usage:
#   GH_TOKEN=your_token_here bash deploy.sh
# or just run "bash deploy.sh" and paste the token when prompted.

set -e

REPO_NAME="zeeshanali0001.github.io"
GH_USER="zeeshanali0001"

if [ -z "$GH_TOKEN" ]; then
  read -s -p "Paste your GitHub token: " GH_TOKEN
  echo
fi

echo "-> Checking if repo already exists..."
STATUS=$(curl -s -o /tmp/repo_check.json -w "%{http_code}" \
  -H "Authorization: token $GH_TOKEN" \
  "https://api.github.com/repos/$GH_USER/$REPO_NAME")

if [ "$STATUS" = "404" ]; then
  echo "-> Creating repo $REPO_NAME..."
  curl -s -X POST -H "Authorization: token $GH_TOKEN" \
    https://api.github.com/user/repos \
    -d "{\"name\":\"$REPO_NAME\",\"private\":false}" > /dev/null
  echo "-> Repo created."
elif [ "$STATUS" = "200" ]; then
  echo "-> Repo already exists, will push to it."
else
  echo "!! Unexpected response checking repo (HTTP $STATUS). Token may be invalid or expired."
  cat /tmp/repo_check.json
  exit 1
fi

echo "-> Initializing git and pushing site files..."
git init -q
git add .
git commit -q -m "Launch portfolio site" || echo "(nothing new to commit)"
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "https://${GH_TOKEN}@github.com/${GH_USER}/${REPO_NAME}.git"
git push -u origin main -f

echo ""
echo "✅ Done! Your site will be live in a minute or two at:"
echo "   https://${GH_USER}.github.io"
echo ""
echo "Reminder: go revoke this token on GitHub now that it's been used."
