#!/bin/bash

. ~/.bashrc

#
# Update latest release tag
#

# Disable exit on non 0
set +e

echo "Fetch all tags.."
git fetch -p origin
echo "Delete local tag.."
git tag -d last-successful-release
echo "Delete remote tag.."
git push --delete origin last-successful-release

# Enable exit on non 0
set -e

echo "Creating new release tag.."
git tag -a last-successful-release -m "CI: Tagged as last successful release"
echo "Push new tag.."
git push origin last-successful-release






