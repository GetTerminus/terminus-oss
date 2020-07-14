#!/bin/bash

#
# Inject the new package version number in the demo build
#

TIME_PLACEHOLDER="INJECTED_TIME"
REF_PLACEHOLDER="INJECTED_BUILD_REF"
SHA_PLACEHOLDER="INJECTED_SHA"
NOW=$(date)
echo "Build date/time: $NOW"
echo "Run ID: $GITHUB_RUN_ID"
echo "SHA: $GITHUB_SHA"
echo "Current path:"
pwd

# Replace the placeholders with the correct values
grep -rl $TIME_PLACEHOLDER 'dist/apps/showcase-ui' | xargs sed -i'' -e 's|'$TIME_PLACEHOLDER'|'"$NOW"'|g'
grep -rl $REF_PLACEHOLDER 'dist/apps/showcase-ui' | xargs sed -i'' -e 's|'$REF_PLACEHOLDER'|'"$GITHUB_RUN_ID"'|g'
grep -rl $SHA_PLACEHOLDER 'dist/apps/showcase-ui' | xargs sed -i'' -e 's|'$SHA_PLACEHOLDER'|'"$GITHUB_SHA"'|g'

# Delete edit reference files left over from the sed replacement
# NOTE: The force flag is required so that the build isn't cancelled if these files don't exist
rm -f dist/apps/showcase-ui/*-e
