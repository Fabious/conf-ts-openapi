# Generators

## OpenAPI Generator

https://openapi-generator.tech/

In the `openapi-generator` folder, we can find various typescript clients generated from the petstore schema `../schemas/petstore.yaml`.

Procedure:
```sh
docker run --rm \
    -v $PWD:/local openapitools/openapi-generator-cli generate \
    -i /local/petstore.yaml \
    -g typescript \
    -o /local/out/ts
```

## OpenAPI Codegen

https://github.com/fabien0102/openapi-codegen

`openapi-codegen` folder

Procedure:
```sh
npm i -D @openapi-codegen/{cli,typescript}
npx openapi-codegen init
npx openapi-codegen gen petstore
```

