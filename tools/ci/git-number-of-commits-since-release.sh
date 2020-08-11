#!/bin/bash

#
# Determine how many commits have been added since the last release and save to a temporary file
#

. ~/.bashrc

TAG='last-successful-release'

SHA=$(git rev-list -n 1 "$TAG")
echo "SHA: $SHA"

COUNT=$(git rev-list --count "$SHA"..HEAD)
echo "Number of commits since last release: $COUNT"

echo "$COUNT" > CI_COMMIT_COUNT_SINCE_LAST_RELEASE
