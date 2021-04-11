# Mohamed28's DOME

### Install ParcelJs
##### Add dependecies on package.json
~~~
  "devDependencies": {
    "parcel-bundler": "^1.12.4"
  },
  "dependencies": {
    "parcel": "^1.12.4"
  }
~~~

##### add scripts on package.json to run project
~~~
  "scripts": {
    "dev": "parcel -p 5505 app/index.html --open",
    "start": "parcel -p 5505 app/index.html --open",
    "build": "parcel build app/index.html --no-cache --public-url",
    "deploy": "rm -rf dist/ && npm run build ./ && gh-pages -d dist"
  }
~~~

## Image converters imagemagick

#### SVG to PNG
~~~
convert -background transparent -quality 100 *.svg -set filename:base "%[basename]" "%[filename:base].png"
~~~

#### PSD to PNG
~~~ 
convert -quality 100 *.psd -set filename:base "%[basename]" "%[filename:base].png"
~~~

#### Optmizing quality
~~~
convert  *.png -set filename:base "%[basename]" -quality 100 "%[filename:base].png"
~~~
#### Potrace stuf
needs to research about it again *
~~~
convert file.png file.pnm
potrace file.pnm -s -o file.svg
~~~

#### More flags
~~~
-resize 128x

-crop 810.x810+314.5+0 
~~~