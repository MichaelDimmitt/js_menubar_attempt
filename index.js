var http = require('http');
const {ipcRenderer} = require('electron');
var opener = require("opener");
const path = require('path');
const assetsDir = path.join(__dirname, 'assets');

const AerialDesktop = path.join(__dirname, 'Aerial_Desktop');
const hiding = path.join(AerialDesktop, '.hide');
const binning = path.join(hiding, 'bin');
      function Install() {
        opener(path.join(binning, 'Installer.app'));
        //opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/Installer.app")
      }

      function Start() {
        opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/Start.app")
      }

      function Stop() {
        opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/Stop.app")
      }

      function FractalClock() {
        opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/p/FractalClock.app")
      }

      function MarineAquarium() {
        opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/p/MarineAquarium3.2.app/")
      }

      function StarWarsScroll() {
        opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/p/StarWarsScroll.app")
      }

      function WebViewScreenSaver() {
        opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/p/WebViewScreenSaver.app/")
      }

      function MatrixScreenSaver() {
        opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/p/MatrixScreenSaver.app")
      }

      function KPSaver() {
        opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/p/KPSaver.app")
      }

      function BlueScreenSaver() {
        opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/p/BlueScreenSaver.app")
      }

      function Aerial() {
        opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/p/Aerial.app")
      }

      function Uninstall() {
        opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/Uninstall.app")
      }
