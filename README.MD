----------------------------------
Client Side
-------------------------------
* 1. create fetch
* 2. add second parameter as an object
* 3. provide method: 'POST'
* 4. add headers :{'content-type':'application/json'}
* 5. add body: JSON.Stringify(user)



---------------------------------
Read
------------------------------
1. Create a cursor = userCollection.find()
2. const result = await cursor.toArray()