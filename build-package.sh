#!/bin/bash

function copy_page () {
  cp dist/$1.weex.js package/pages/$1.weex.js
}

rm -rf package
mkdir package package/pages

npm run build

cp src/app.json package/app.json
cp dist/worker.weex.js package/app.js
cp dist/shared.weex.js package/shared.js

copy_page "about"
copy_page "examples"
copy_page "guide"
copy_page "landing"
copy_page "news"


tar -zcvf app.tar.gz package
