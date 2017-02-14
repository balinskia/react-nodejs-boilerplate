# POSTS #

All URLs begin with "/posts/"

#Object description#
```
{
    id: String,
    text: String
}
```

#Methods#

## GET POSTS ##

DESCRIPTION: Gets all posts from database 

METHOD: **GET**

URL: **/posts/get**

REQUEST:
```
Request is empty
```
RESPONSE:
```
{
    posts: Array[Post]
}
```

