# Node app with docker

## Instructions

Run the container
```sh
docker container run --rm -p 80:3000 --name node-books victoraweb/node-books
```

Make a request
```sh
curl localhost
```

Stop the container
```sh
docker container stop node-books
```
