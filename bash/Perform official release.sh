#!/bin/bash
cd "$(dirname "$0")"
cd ../
${0} # run current file

if [[ -z $(git status -s) ]]
then
  echo "tree is clean"
else
  echo "tree is dirty, please commit changes before running this"
  exit
fi

echo "Enter release type (patch|minor|major): "
read releaseType

echo "Adding existing changes..."
git add .

echo "Updating package.json with new version..."
npm version $releaseType
git add .

packageVersion=$(node -p "require('./package.json').version")

echo "Committing version change in package.json..."
git commit -m "Updating version in package.json to $packageVersion"

echo "Creating git tag..."
git tag "v$packageVersion"

echo "Pushing tags..."
git push && git push --tags

echo "Complete"
