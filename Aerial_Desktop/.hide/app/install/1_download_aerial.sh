# !/bin/bash
screen=$1
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# run aerial application
  if [ -d ~/Library/Screen\ Savers/$screen ] || [ -d /Library/Screen\ Savers/$screen ] ; then
    echo "File exists."
  else
    open $DIR/../../bin/$screen/
  fi
