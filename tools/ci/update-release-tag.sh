#!/bin/bash

. ~/.bashrc

#
# Update latest release tag
#

# Disable exit on non 0
set +e

TAG="last-successful-release"
LAST_SHA=$(git rev-parse HEAD)
echo "Tag: $TAG"
echo "SHA: $LAST_SHA"

echo "Delete local tag.."
git tag -d "$TAG"
echo "Delete remote tag.."
git push origin :refs/tags/"$TAG"

# Enable exit on non 0
set -e

echo "Creating new release tag.."
git tag "$TAG" "$LAST_SHA" -m "CI: Tagged as last successful release"
echo "Push new tag.."
git push origin "$TAG"
