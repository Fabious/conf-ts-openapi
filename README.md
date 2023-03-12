# Talk "How to consume your API from the client"

## Notes

* the OpenAPI Specification (formerly called Swagger Specification until version 2.x) is an open standard aimed to describe RESTful APIs with machine-readable specfication files (with JSON or YAML syntax) which can be used to generate human-readable documentations but also code and tests for clients and servers in different languages (see for example OpenAPI Generator and Swagger Codegen).

* OpenAPI by itself is only a specification, and it's commonly used in two opposite approaches:
  * Design-first, in which the OpenAPI spec is used with some build tool to generate the server code for the documented API, along with model classes and tests;
  * Code-first, in which an OpenAPI spec is generated either build-time or run-time from the API defined on a server in the traditional way.

* What are the different schema formats (jsonld, jsonhal, jsonapi, json, yaml)
  * yaml is a superset of json

* How to generate code / type based on a schema
  * main benefit is to avoid to have to write "contract" logic, instead we generate it

* Generate mock with https://github.com/mswjs/msw

## Resources

- https://openapi.tools/
- https://blog.simonireilly.com/posts/typescript-openapi
- https://github.com/drwpow/openapi-typescript
- https://api-platform.com/docs/core/content-negotiation/#configuring-formats-globally

## Schemas
- https://github.com/OAI/OpenAPI-Specification/tree/main/examples
- https://petstore.swagger.io/ (v2)
- https://petstore3.swagger.io/ (v3)

## Tools
- https://openapi-generator.tech/
- https://github.com/json-schema-faker/json-schema-faker
- https://hoppscotch.io/


### Memes
- (boring)[https://media.makeameme.org/created/boring-95f85861da.jpg]
