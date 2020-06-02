#!/bin/bash

#
# Upload all existing coverage reports
#

. ~/.bashrc

#
# Upload coverage for files at a specific path
#
# @param Location to look for `coverage-final.json` files
#
# @example
#   upload_coverage path/to/coverage/dir
#
upload_coverage () {
  FILES=$(find "$1" -name 'coverage-final.json')
  PREFIX=$1
  SUFFIX='/coverage-final.json'

  for FILE in $FILES
  do
    # Remove the preceding file path
    TAG=${FILE#"$PREFIX"}
    # Remove the filename
    TAG=${TAG%"$SUFFIX"}
    # Remove the remaining slash prefix
    TAG=${TAG//\/}
    echo "Uploading coverage for \"$FILE\" tagged as \"$TAG\""
    bash <(curl https://codecov.io/bash) -f "$FILE" -F "$TAG" || echo "Codecov failed to upload coverage for $FILE"
  done
}


LOCATIONS=('coverage/libs/ui' 'coverage/apps')

for L in "${LOCATIONS[@]}"; do
  upload_coverage "$L"
done
