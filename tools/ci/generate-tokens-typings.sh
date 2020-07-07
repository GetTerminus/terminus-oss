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
MOCHA_DIR='node_modules/@types/mocha'

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

# NOTE: We need to move these types or TypeScript will throw error about 'Subsequent variable declarations must have the same type'.
# This is due to a conflict between Mocha (via Cypress) and Jest
if [ -d "$MOCHA_DIR" ]
then
    echo "Mocha exists in node_modules, moving temporarily.."
    mv "$MOCHA_DIR" ./TEMP_MOCHA
    echo "Generate typings.."
    node --max-old-space-size=6144 node_modules/.bin/tsc -p libs/design-tokens/tsconfig-typings.json
    mv ./TEMP_MOCHA "$MOCHA_DIR"
else
    echo "Mocha directory not found in node_modules.."
    echo "Generate typings.."
    node --max-old-space-size=6144 node_modules/.bin/tsc -p libs/design-tokens/tsconfig-typings.json
fi

echo "Moving typings to package dist.."
find "$TOKEN_SRC" -maxdepth 1 ! -type d ! -name '*.js' -exec mv {} "$TOKEN_DIST" \;

echo "Cleanup source files.."
rm -rf libs/design-tokens/.temp/*

echo "Done! Typings now exist in './dist/design-tokens/js/'."
