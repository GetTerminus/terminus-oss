#!/bin/bash

. ~/.bashrc

#
# Create typings for generated tokens JS
#
# 1. Verify .temp dir exists
# 2. Copy generated JS to temp
# 3. Generate typings from temp JS files
# 4. Move generated typings to dist
# 5. Cleanup
#

# Exit when any command fails
set -e

TOKEN_DIST='dist/libs/design-tokens/js'
TOKEN_SRC='libs/design-tokens/.temp'
FILE1='dist/libs/design-tokens/js/design-tokens.js'
FILE2='dist/libs/design-tokens/js/design-tokens-tree.js'
FILE3='dist/libs/design-tokens/js/library-design-tokens.js'
FILE4='dist/libs/design-tokens/js/library-design-tokens-tree.js'

if [ -d "$TOKEN_SRC" ]
then
    echo "Temp directory already exists. Cleanup source files.."
    rm -rf libs/design-tokens/.temp/*
else
    echo "Temp directory does not exist yet. Creating temp dir.."
    mkdir $TOKEN_SRC
fi

echo "Copying generated JS token files to source dir.."
cp "$FILE1" "$FILE2" "$FILE3" "$FILE4" "$TOKEN_SRC"

echo "Generate typings.."
# NOTE: We need to move these types or TypeScript will throw error about 'Subsequent variable declarations must have the same type'.
# This is due to a conflict between Mocha (via Cypress) and Jest
mv node_modules/@types/mocha ./TEMP_MOCHA
node --max-old-space-size=6144 node_modules/.bin/tsc -p libs/design-tokens/tsconfig-typings.json
mv ./TEMP_MOCHA node_modules/@types/mocha

echo "Moving typings to package dist.."
find "$TOKEN_SRC" -maxdepth 1 ! -type d ! -name '*.js' -exec mv {} "$TOKEN_DIST" \;

echo "Cleanup source files.."
rm -rf libs/design-tokens/.temp/*

echo "Done! Typings now exist in './dist/design-tokens/js/'."
