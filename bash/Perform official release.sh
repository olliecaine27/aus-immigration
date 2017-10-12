#!/bin/bash
cd "$(dirname "$0")"
cd ../
${0} # run current file

echo "Enter release type (patch|minor|major): "
read releaseType

echo "Committing files so verrsion can be updated..."
git add .
git commit -m "Committing files so verrsion can be updated"

echo "Updating package.json with new version..."
npm version $releaseType

packageVersion=$(node -p "require('./package.json').version")

echo "Committing version change"
git commit -m "Updating version to $packageVersion"

echo "Creating git tag..."
git tag "v$packageVersion"

echo "Pushing tags..."
git push && git push --tags

echo "Complete"
