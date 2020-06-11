#!/bin/bash

. ~/.bashrc

LERNA_OUTPUT=$(npx lerna changed --include-merged-tags --loglevel=silent --json || :)

if [[ -n "$LERNA_OUTPUT" ]]; then
  echo "Changed projects found. Piping to file.."
  echo "$LERNA_OUTPUT" > CHANGED.json
else
  echo "No changed projects found."
fi
