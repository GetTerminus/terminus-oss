#!/bin/bash

#
# Deploy demos
#

# shellcheck disable=SC1090
. ~/.bashrc

# Likely starting at `/home/runner/work/terminus-oss/terminus-oss/t-oss` so we need to go up one
cd ../

echo "CURRENT PATH:"
pwd

# Clone the ui demos
#git clone git@github.com:GetTerminus/ui-demos-release.git

# Enter the demos repo
cd ui-demos-release || exit

# Remove old demo files
echo "Deleting old demo files:"
find . -regextype posix-extended -regex '.*\.(html|css|js)' -type f -delete

echo "CURRENT PATH:"
pwd

# Move new files into the cloned repo
mv -f -v ../t-oss/dist/apps/showcase-ui/* .

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
git push -q https://"${GH_TOKEN}"@github.com/GetTerminus/ui-demos-release.git master

cd -
