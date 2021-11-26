#!/bin/bash

. ~/.bashrc

# Exit when any command fails
set -e

echo "Creating destination directory.."
mkdir -p dist/libs/ui/styles

echo "Bundling SCSS helpers.."
npx scss-bundle -c libs/ui/styles/scss-bundle.config.json

echo "Copying Bundled SCSS to destination.."
cp libs/ui/styles/helpers-generated.scss dist/libs/ui/styles/helpers.scss
cp libs/ui/styles/helpers-generated.scss libs/ui/styles/helpers.scss

echo "Removing all comments from temp file.."
sed -i.bak "/\/\*.*\*\//d;/\/\*/,/\*\// d" libs/ui/styles/helpers-generated.scss
sed -i.bak '/\/\//d' libs/ui/styles/helpers-generated.scss

echo "Bundling CSS.."
npx scss-bundle -e libs/ui/styles/src/lib/terminus-ui.scss -o libs/ui/styles/terminus-ui.css -p ./

echo "Moving CSS file to destination.."
cp libs/ui/styles/terminus-ui.css dist/libs/ui/styles/terminus-ui.css

echo "Copying non-CSS files to destination.."
cp libs/ui/styles/README.md dist/libs/ui/styles
cp libs/ui/styles/package.json dist/libs/ui/styles

echo "Copying files to node_modules.."
npx cpr dist/libs/ui/styles node_modules/@terminus/ui-styles --overwrite
