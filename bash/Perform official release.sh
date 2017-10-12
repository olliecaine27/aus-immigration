#!/bin/bash
cd "$(dirname "$0")"
cd ../
${0} # run current file

echo "Enter release type (patch|minor|major): "
read releaseType

echo "Updating package.json with new version..."
npm version $releaseType

echo "Creating git tag..."
packageVersion=$(node -p "require('./package.json').version")
git tag $packageVersion

echo "Pushing tags..."
git push && git push --tags

echo "Complete"
