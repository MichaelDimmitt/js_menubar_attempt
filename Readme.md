#### Note To Self: early development. This repository is being developed with forks as a bridge node. <br>Click through to the specific organization and make changes on that branch.
### Electron, a node package that turns your javascript into desktop applications.
For our purposes, "MenuBar" Desktop Application.

Inital files that need manipulation

Here is a nice example for beginners: https://steemit.com/education/@ryanbaer/getting-started-with-electron-a-basic-menubar-app-part-1
<pre>
vi index.js
atom index.js
atom index.html
atom main.js
atom package.json

npm install
npm install
  if "Cannot find module 'electron' from '/Users/michaeldimmitt/js_menubar_attempt'"
  npm install --save-dev electron

electron-packager .
</pre>
<br>
<b>In one command, rebuild:</b>
<pre>electron-packager . --overwrite; open tutorial-menubar-app-darwin-x64/tutorial-menubar-app.app/</pre>

Copyright (c) 2017, Michael Dimmitt
<br>Access granted upon approved request. 
