#!/bin/bash

. ~/.bashrc

# Exit when any command fails
set -e

echo "Creating destination directory.."
mkdir -p dist/libs/eslint-config-frontend

echo "Copying files to destination.."
cp libs/eslint-config-frontend/src/lib/rules.js dist/libs/eslint-config-frontend
cp libs/eslint-config-frontend/package.json dist/libs/eslint-config-frontend
cp libs/eslint-config-frontend/README.md dist/libs/eslint-config-frontend
cp LICENSE dist/libs/eslint-config-frontend
