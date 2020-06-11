#!/bin/bash

. ~/.bashrc

#
# Check for changes in git and commit them if they exist
#

if [[ -n $(git status -s) ]]; then
  echo "Git has changes. Committing and pushing.."
  git add .
  git commit -m "chore(release): Lerna version bump [skip ci]"
  git push
else
  echo "Git has no changes. Moving on."
fi

