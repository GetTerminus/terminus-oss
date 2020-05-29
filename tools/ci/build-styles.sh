#!/bin/bash

. ~/.bashrc

# Exit when any command fails
set -e


echo "Creating destination directory.."
mkdir -p dist/libs/ui/styles

echo "Bundling SCSS helpers.."
npx scss-bundle -c libs/ui/styles/scss-bundle.config.json

echo "Copying Bundled SCSS to destination.."
cp libs/ui/styles/src/helpers-generated.scss dist/libs/ui/styles/helpers.scss

echo "Removing all comments from temp file.."
sed -i.bak "/\/\*.*\*\//d;/\/\*/,/\*\// d" libs/ui/styles/src/helpers-generated.scss
sed -i.bak '/\/\//d' libs/ui/styles/src/helpers-generated.scss

echo "Bundling CSS.."
npx node-sass-chokidar --source-map true libs/ui/styles/src/lib/terminus-ui.scss -o libs/ui/styles/src --importer=node_modules/node-sass-tilde-importer

echo "Moving CSS file to destination.."
cp libs/ui/styles/src/terminus-ui.css dist/libs/ui/styles/terminus-ui.css

echo "Copying non-CSS files to destination.."
cp libs/ui/styles/README.md dist/libs/ui/styles
cp libs/ui/styles/package.json dist/libs/ui/styles
