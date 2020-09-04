#!/bin/bash

. ~/.bashrc

BRANCH=$1
echo "BRANCH: $BRANCH"

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
    files=$(find $project -name "*.stories.[tj]s" 2> /dev/null | wc -l)
    if [[ $files != "0" ]]; then
      links+="'$project/**/*.stories.[tj]s',"
    fi
  done

  echo "Storybook main stories: "
  echo "$links"

#  if [[ $links != '' ]]; then
#    grep -rl "STORIES" '.storybook/main.js' | xargs sed -i'' -e 's|'STORIES'|'$links'|g'
#    echo "Running chromatic on affected projects.."
#
#    if [ "$1" != "release" ]; then
#      echo "Not on base branch - NOT auto accepting changes."
#      yarn affected:chromatic
#    else
#      # We know any changes that make it to the base branch *must* have been accepted
#      echo "On base branch - auto accepting all changes."
#      yarn chromatic:all --auto-accept-changes --exit-once-uploaded
#    fi
#  else
#    echo "No storybook built for chromatic visual testing"
#  fi
else
  echo "No changed projects found."
fi

# Delete edit reference files left over from the sed replacement
# NOTE: The force flag is required so that the build isn't cancelled if these files don't exist
rm -f .storybook/*-e
