# NodeAPI_RestFull

![image](https://github.com/Hector-Lopes/NodeAPI_RestFull/assets/83184681/26ff09e2-831e-4301-8757-b376f330ae3c)



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3333](http://localhost:3333) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Resquest`


#First i reccomend to install the extension REST Client

#Second Acess the file resquest to activate the resquests for the DB the examples are here too

###
```bash
POST http://localhost:3333/products

content-type: application/json
 
{ 
    "name":"",
    "price":""
}

###
GET http://localhost:3333/products

### Use ID after /

GET http://localhost:3333/products/4c690378-a084-4e5b-a8fd-b6dc5fa083e1

### Use ID after /
PUT  http://localhost:3333/products/9

content-type: application/json

{
    "name":"",
    "price":""
}

### Use ID after /

DELETE http://localhost:3333/products/7
```

