#!/bin/bash
staged_files=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(js|jsx|ts|tsx)$')

echo "🔍 Check before commit..."

if [ -n "$staged_files" ]; then
  echo "🧹 Lint staged files:"
  echo "$staged_files"

  bun run lint $staged_files

  if [ $? -ne 0 ]; then
    echo "❌ ESLint check failed. Fix your errors and try again."
    exit 1
  fi

  echo "✅ Eslint check was completed successfully."
else
  echo "😴 No files to lint."
fi

echo "🧪 Run tests..."
bun run test

if [ $? -ne 0 ]; then
  echo "❌ Test check failed. Fix your errors and try again."
  exit 1
fi

echo "✅ Tests check was completed successfully."
echo "🎉 All checks was completed successfully"
