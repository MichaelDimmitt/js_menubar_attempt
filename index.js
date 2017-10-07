var http = require('http');
const {ipcRenderer} = require('electron');
var opener = require("opener");
const path = require('path');
const assetsDir = path.join(__dirname, 'assets');

const AerialDesktop = path.join(__dirname, 'Aerial_Desktop');
const hiding = path.join(AerialDesktop, '.hide');
const binning = path.join(hiding, 'bin');
const access_screen_saver = path.join(binning, 'p');
      function Install() {
        opener(path.join(binning, 'Installer.app'));
        //opener ("/Users/michaeldimmitt/new_attempt/js_menubar_attempt2/Aerial_Desktop/.hide/bin/Installer.app")
      }

      function Start() {
        opener (path.join(binning, 'Start.app'));
      }

      function Stop() {
        opener (path.join(binning, 'Stop.app'));
      }

      function FractalClock() {
        opener (path.join(access_screen_saver,'FractalClock.app'));
      }

      function MarineAquarium() {
        opener (path.join(access_screen_saver,'MarineAquarium3.2.app'));
      }

      function StarWarsScroll() {
        opener (path.join(access_screen_saver,'StarWarsScroll.app'));
      }

      function WebViewScreenSaver() {
        opener (path.join(access_screen_saver,'WebViewScreenSaver.app'));
      }

      function MatrixScreenSaver() {
        opener (path.join(access_screen_saver,'MatrixScreenSaver.app'));
      }

      function KPSaver() {
        opener (path.join(access_screen_saver,'KPSaver.app'));
      }

      function BlueScreenSaver() {
        opener (path.join(access_screen_saver,'BlueScreenSaver.app'))
      }

      function Aerial() {
        opener (path.join(access_screen_saver,'Aerial.app'));
      }

      function Uninstall() {
        opener (path.join(binning,'Uninstall.app'));
      }
