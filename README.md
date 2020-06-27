# Mohamed28's DOME

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