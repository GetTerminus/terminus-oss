#!/bin/bash

#
# Determine the base reference for all NX affected commmands
#
# a) If the custom release tag is found, use the related sha
# b) Otherwise fall back to the latest master

. ~/.bashrc

TAG='master-last-successful-release'

if git rev-parse -q --verify "refs/tags/$TAG" >/dev/null; then
  echo "Last release on master found!"
  echo "::set-env name=NX_BASE::$(git rev-list -n 1 $TAG)"
else
  echo "Last release on master NOT found!"
  echo "::set-env name=NX_BASE::origin/master"
fi

