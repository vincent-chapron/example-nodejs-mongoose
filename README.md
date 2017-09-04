# NodeJS - MongoDB

### Get started

    docker-compose up -d mongo
    # wait until mongo is completly started
    docker exec -it formation-nodejs-mongo mongo admin
    db.createUser({user: 'openska', pwd: 'openska', roles: [{role: "userAdminAnyDatabase", db: "admin"}]});
    docker-compose up -d app
