# !/bin/bash

# write out path needed
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo $DIR

#create .tmp file and copy to temp
mkdir $DIR/.tmp
cp $DIR/com.menu.aerial.plist $DIR/.tmp/com.menu.aerial.plist

# create the string needed.
pwd2="              <string>$DIR/./keep_alive.sh</string>"
echo $pwd2

# insert path needed into correct file.
# line 9 in com.menu.aerial.plist
sed -i '' '9s?.*?'"$pwd2"'?' $DIR/.tmp/com.menu.aerial.plist

# change environment appropriately
chmod 644 $DIR/.tmp/com.menu.aerial.plist

cp $DIR/.tmp/com.menu.aerial.plist ~/Library/LaunchAgents/

launchctl load ~/Library/LaunchAgents/com.menu.aerial.plist
