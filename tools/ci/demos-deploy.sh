#!/bin/bash

#
# Deploy demos
#

# shellcheck disable=SC1090
. ~/.bashrc

echo "Running on CI: $CI"

echo "CURRENT PATH:"
pwd

# Enter the demos repo
cd ../ui-demos-release || exit
#if [[ "$CI" = true ]]; then
#fi

echo "CURRENT PATH:"
pwd

# Remove old demo files
echo "Deleting old demo files:"
# NOTE: Mac/Linux support different regex options
if [[ "$CI" = true ]]; then
  find . -regextype posix-extended -regex '.*\.(html|css|js)' -type f -delete
else
  find -E . -regex '.*\.(html|css|js)' -type f -not -path "./node_modules/*" -delete
fi

# Move new files into the cloned repo
if [[ "$CI" = true ]]; then
  mv -f -v ../t-oss/dist/apps/showcase-ui/* .
else
  mv -f -v ../terminus-oss/dist/apps/showcase-ui/* .
fi

# Clone the index.html file as 404.html to support deep linking
cp index.html 404.html

# Update git credentials
git config credential.helper 'cache --timeout=120'
git config user.email "devops@terminus.com"
git config user.name "terminus-devops"

# Commit new files
git add .
git commit -m "Update via CI release"

# Push quietly to prevent showing the token in log
git push -f -q https://"${GH_TOKEN}"@github.com/GetTerminus/ui-demos-release.git master

if [[ "$CI" = true ]]; then
  cd ../t-oss || exit
else
  cd ../terminus-oss || exit
fi
