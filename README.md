# myAngularCache

## Manage cache far beyond $factoryCache

This factory allows to set expire times for every created cache.

##### create myAngularCache item  

Use  *myCacheFactory.createCache (cachId, CacheContent, cacheTime)* to create a cache item with an expiration time.

##### check myAngularCache item

Use  *myCacheFactory.checkCache (cacheId)* to check the avaialbility of a created cache item. It checks the cache time.

##### Get myAngularCache item content

Use  *myCacheFactory.getCachedContent (cacheId)* to get the content of a cached item. 

##### Get myAngularCache item content or execute callback

Use  *myCacheFactory.retriveDataFor (cacheId,callback)* to retrive a cache item or execute a callback function when the cache item is not found.
