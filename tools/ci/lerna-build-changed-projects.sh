#!/bin/bash

. ~/.bashrc

LERNA_OUTPUT=$(npx lerna changed --include-merged-tags --loglevel=silent --json || :)
echo "Lerna changed check: $LERNA_OUTPUT"

if [[ -n "$LERNA_OUTPUT" ]]; then
  echo "Changed projects found. Piping to file.."
  echo "$LERNA_OUTPUT" > CHANGED.json

  echo "Cat changed.json: "
  cat CHANGED.json

  export CHANGED_PROJECTS="$(node json-to-projects-list.js)"
  echo "Building: $CHANGED_PROJECTS"
  yarn run build:changed
else
  echo "No changed projects found."
fi

