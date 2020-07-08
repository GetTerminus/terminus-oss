#!/bin/bash

. ~/.bashrc

# Exit when any command fails
set -e

echo "Creating destination directory.."
mkdir -p dist/libs/stylelint-config-frontend

echo "Copying files to destination.."
cp libs/stylelint-config-frontend/src/lib/rules.js dist/libs/stylelint-config-frontend
cp libs/stylelint-config-frontend/package.json dist/libs/stylelint-config-frontend
cp libs/stylelint-config-frontend/README.md dist/libs/stylelint-config-frontend
cp LICENSE dist/libs/stylelint-config-frontend
