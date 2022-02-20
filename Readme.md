# Concept

SPA(Golang x Next.js)

# Prerequirements

- docker
- docker-compose
- Stoplight studio


# Execute method

```
$ docker-compose build
$ docker-comopse up
```


## API 仕様書

| 名称              |  役割                      |	URL                         |
|----------------- |-----------------           | -----------------------------|
| Swagger Editor	 | swaggerファイルの生成、編集   | http://localhost:8001/       |
| Swagger UI       |  swagger-specからHTML生成   |	http://localhost:8002/       |
| Swagger API mock |   モックデータ              | http://localhost:8003/users  |

Golang

