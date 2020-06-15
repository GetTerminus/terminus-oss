#!/bin/bash

. ~/.bashrc

OG_MESSAGE=$1
#OG_MESSAGE="revert(CI): fix \"quoted commits\" messages w/quotes"
echo "Original commit Message: $OG_MESSAGE"


#temp="${OG_MESSAGE%\"}"
#temp="${temp#\"}"
#echo "TEMP: $temp"
#echo "OG: "
#echo "$OG_MESSAGE" | tr -d '"'

MESSAGE=$(echo "$OG_MESSAGE" | tr -d '"')
echo "Cleaned commit message: $MESSAGE"

if [[ "$MESSAGE" =~ (skip\ ci|ci\ skip) ]]; then
  echo "::set-env name=SHOULD_RUN::false"
else
  echo "::set-env name=SHOULD_RUN::true"
fi
