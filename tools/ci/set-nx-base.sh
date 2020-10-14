#!/bin/bash

#
# Determine the base reference for all NX affected commmands
#
# a) If the custom release tag is found, use the related sha
# b) Otherwise fall back to the latest on `release`

. ~/.bashrc

TAG='last-successful-release'

if git rev-parse -q --verify "refs/tags/$TAG" >/dev/null; then
  echo "Last release on 'release' found!"
  echo "NX_BASE=$(git rev-list -n 1 $TAG)" >> "$GITHUB_ENV"
else
  echo "Last release on 'release' NOT found!"
  echo "NX_BASE=origin/release" >> "$GITHUB_ENV"
fi

