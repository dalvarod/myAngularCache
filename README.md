# myangularCache

####Manage cache far beyond $factoryCache

This factory allows to set expire times for every created cache.

##### createCache

Use  myCacheFactory.createCache (cachId, CacheContent, cacheTime) to create a cache item with an expiration time.

##### checkCache

Use  myCacheFactory.checkCache (cacheId) to check the avaialbility of a created cache item. It checks the cache time.

##### retriveDataFor
Use  myCacheFactory.retriveDataFor (cacheId,callback) to retrive a cache item or execute a callback function when the cache item is not found.

##### getCachedContent

Use  myCacheFactory.getCachedContent (cacheId) to get the content og a cache item. 

