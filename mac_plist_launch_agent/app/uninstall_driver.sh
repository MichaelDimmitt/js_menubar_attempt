#!/bin/bash

 launchctl unload ~/Library/LaunchAgents/com.menu.aerial.plist;
 rm ~/Library/LaunchAgents/com.menu.aerial.plist
 # mv ~/Library/LaunchAgents/com.menu.aerial.plist com.menu.aerial.plist;
 echo Uninstalled, If the program is still running delete the process or restart/sleep computer.
 osascript -e 'display notification "If running delete process or restart/sleep computer." with title "Launch Agent Successfuly Removed and Stopped"'
