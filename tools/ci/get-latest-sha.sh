#!/bin/bash

. ~/.bashrc

#
# Determine the sha based on the latest tag
#
latesttag=$(git describe --abbrev=0 --tags)
echo "Latest tag: \"${latesttag}\""
latestsha=$(git show-ref -s ${latesttag})
echo "Latest sha: \"${latestsha}\""
echo "::set-output name=latestsha::$latestsha"
