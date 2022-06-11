# REST API - Games

Esse pequeno projeto serviu como case de estudo, de forma que eu possa entender mais sobre e alguns conceitos rest para o desenvolvimento de apis.

## Pegar a Lista de Jogos

### Request

`GET /game`

    curl -i -H 'Accept: application/json' http://localhost:3000/game

### Response

    Status: 200 OK

    []

## Criar Um Novo Jogo

### Request

`POST /game`

    curl -i -H 'Accept: application/json' -d 'name=Minecraft&year=2011&price=5' http://localhost:3000/game

### Response

    Status: 201 Created

```json 
     {
       "name": "Minecraft",
       "year": 2011,
       "price": 5
     }
```     

## Pegar Um Jogo Específico

### Request

`GET /game/id`

    http://localhost:3000/game/1

### Response

    Status: 200 OK

```json 
     {
       "name": "Minecraft",
       "year": 2011,
       "price": 5
     }
```     

## Buscar Um Jogo Que Não Existe

### Request

`GET /game/id`

    http://localhost:3000/game/9999

### Response

    Status: 404 Not Found

```json 
     {"message":"Game not found"}
```   

## Criar Outro Jogo

### Request
`POST /game`

    curl -i -H 'Accept: application/json' -d 'name=Valorant&year=2020&price=0' http://localhost:3000/game

### Response

    Status: 201 Created

```json 
     {
       "name": "Valorant",
       "year": 2020,
       "price": 0
     }
```     

## Pegar a Lista de Jogos Novamente

### Request

`GET /game`

    curl -i -H 'Accept: application/json' http://localhost:3000/game 

### Response

    Status: 200 OK
    
```json 
     [
        {
            "id": 1
            "name": "Minecraft",
            "year": 2011
            "price": 5
            "createdAt": "2022-06-10T18:02:32.000Z",
            "updatedAt": "2022-06-10T18:02:32.000Z"
        },
            {
            "id": 2
            "name": "Valorant",
            "year": 2020,
            "price": 0,
            "createdAt": "2022-06-10T18:01:58.000Z",
            "updatedAt": "2022-06-10T18:01:58.000Z"
        }
     ]
```    

## Atualizando um jogo

### Request

`PUT /game/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'name=SuperMarioBros&year=1985&price=3' http://localhost:3000/game/2

### Response

    Status: 200 OK

```json 
    {
        "name": "SuperMarioBros",
        "year": 1985,
        "price": 3
    }
```     

<!-- ## Attempt to change a Thing using partial params 

### Request

`PUT /thing/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'status=changed3' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed3"}

## Attempt to change a Thing using invalid params

### Request

`PUT /thing/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'id=99&status=changed4' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed4"}

## Change a Thing using the _method hack

### Request

`POST /thing/:id?_method=POST`

    curl -i -H 'Accept: application/json' -X POST -d 'name=Baz&_method=PUT' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Baz","status":"changed4"}

## Change a Thing using the _method hack in the url

### Request

`POST /thing/:id?_method=POST`

    curl -i -H 'Accept: application/json' -X POST -d 'name=Qux' http://localhost:7000/thing/1?_method=PUT

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: text/html;charset=utf-8
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Delete a Thing

### Request

`DELETE /thing/id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:7000/thing/1/

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 204 No Content
    Connection: close


## Try to delete same Thing again

### Request

`DELETE /thing/id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:7000/thing/1/

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Get deleted Thing

### Request

`GET /thing/1`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/1

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Delete a Thing using the _method hack

### Request
-->
