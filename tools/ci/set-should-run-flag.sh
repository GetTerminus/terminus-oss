#!/bin/bash

. ~/.bashrc

# shellcheck disable=SC2154
OG_MESSAGE=${{github.event.head_commit.message}}
echo "Original commit Message: $OG_MESSAGE"

MESSAGE=$(echo "$OG_MESSAGE" | sed -E "s/\\\"/\\'/g")
echo "Cleaned commit message: $MESSAGE"

if [[ "$MESSAGE" =~ (skip\ ci|ci\ skip) ]]; then
  echo "::set-env name=SHOULD_RUN::false"
else
  echo "::set-env name=SHOULD_RUN::true"
fi
