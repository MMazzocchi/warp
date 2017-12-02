#!/usr/bin/bash

src_dir=./client/src/
dist_dir=./client/dist

if [[ ! -e $dist_dir ]]
then
  mkdir $dist_dir
fi

echo "Generating class for WarpClient.js..."
browserify -s WarpClient.js -e $src_dir/WarpClient.js -o $dist_dir/WarpClient.js
