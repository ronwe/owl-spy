#!/bin/bash
filepath=$PWD
cd $1
zip -r $filepath/$1.nw ./*
cd ../
~/Documents/node-webkit-v0.11.5-osx-x64/node-webkit.app/Contents/MacOS/node-webkit $1.nw
