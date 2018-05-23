#!/bin/bash

# for mini-app package
function copy_page () {
  cp dist/$1.weex.js build/pages/$1.weex.js
  cp dist/$1.weex.js build/tbapp/pages/$1.weex.js
}

rm -rf build
mkdir build build/tbapp build/pages build/tbapp/pages

npm run build

cp ./app.config.raw.json build/tbapp/app.config.json
cp dist/app.weex.js build/tbapp/app.js
cp dist/share.weex.js build/tbapp/share.js

copy_page "about"
copy_page "examples"
copy_page "guide"
copy_page "landing"
copy_page "news"


# tar -zcvf app.zip package/*

# cd package
# zip -r -o app.zip pages app.js app.config.json shared.js
# cd ..
