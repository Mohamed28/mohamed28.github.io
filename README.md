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
    "start": "parcel -p 5505 app/index.html --open --no-cache",
    "build": "parcel build app/index.html --no-cache --public-url ./dist/",
    "deploy": "rm -rf dist/* && npm run build && cd dist && cp index.html ../index.html",
    "kills" : "kill -9 $(lsof -t -i:5505)"
  }
~~~
#

## WEB SERVER
### Python Server
~~~
python3 -m http.server 5505
~~~

### Killing  Server
#### To list any process listening to the port 8080:
~~~
lsof -i:8080
~~~

####  To kill any process listening to the port 8080:
~~~
kill $(lsof -t -i:8080)
~~~

#### or more violently:
~~~
kill -9 $(lsof -t -i:8080)
~~~
#

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