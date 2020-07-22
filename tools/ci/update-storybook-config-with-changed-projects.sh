#!/bin/bash

. ~/.bashrc

LERNA_OUTPUT=$(npx lerna changed --include-merged-tags --loglevel=silent --json || :)
echo "Lerna changed check: $LERNA_OUTPUT"

if [[ -n "$LERNA_OUTPUT" ]]; then
  echo "Changed projects found. Piping to file.."
  echo "$LERNA_OUTPUT" > CHANGED.json

  echo "Cat changed.json: "
  cat CHANGED.json

  SOURCE="${BASH_SOURCE}"
  DIR=$( dirname "$SOURCE" )
  echo "$DIR"
  script="node $DIR/json-to-project-location-list.js"

  export CHANGED_PROJECTS="$($script)"
  links=""

  IFS=', ' read -a PROJECT_ARRAY <<< "$CHANGED_PROJECTS"

  for project in "${PROJECT_ARRAY[@]}"
  do
    links+="'$project/**/*.stories.[tj]s',"
  done

  echo "Storybook main stories: "
  echo "$links"

  grep -rl "STORIES" '.storybook/main.js' | xargs sed -i'' -e 's|'STORIES'|'$links'|g'
else
  echo "No changed projects found."
fi
