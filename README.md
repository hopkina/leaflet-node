# Basic leaflet site using node, express and pug

With added Dockerfile for deployment in a docker container.

```
docker build -t <dockerid>/nodejs-leaflet-basic .

docker run --name nodejs-leaflet-basic -p 3000:3000 -d <dockerid>/nodejs-leaflet-basic
```

## Overview
![Overview](leaflet_node_express_pug.png?raw=true)

