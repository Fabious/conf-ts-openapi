# Generators

## OpenAPI Generator

https://openapi-generator.tech/

In the `openapi-generator` folder, we can find various typescript clients generated from the petstore schema `../schemas/petstore.yaml`.

```sh
docker run --rm \
    -v $PWD:/local openapitools/openapi-generator-cli generate \
    -i /local/petstore.yaml \
    -g typescript \
    -o /local/out/ts
```
