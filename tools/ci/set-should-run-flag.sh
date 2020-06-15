#!/bin/bash

. ~/.bashrc

OG_MESSAGE=$1
echo "Original commit Message: $OG_MESSAGE"

MESSAGE=$(echo "$OG_MESSAGE" | tr -d '"')
echo "Cleaned commit message: $MESSAGE"

if [[ "$MESSAGE" =~ (skip\ ci|ci\ skip) ]]; then
  echo "::set-env name=SHOULD_RUN::false"
else
  echo "::set-env name=SHOULD_RUN::true"
fi
