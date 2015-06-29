# myAngularCache

## Manage cache far beyond angular $cacheFactory

This factory allows to set expire times for every created cache.

##### 1. Create myAngularCache item.  

Use  *myCacheFactory.createCache (cachId, CacheContent, cacheTime)* to create a cache item with an expiration time.

##### 2. Check myAngularCache item.

Use  *myCacheFactory.checkCache (cacheId)* to check the availability of a created cache item. It checks the cache time and destroys the cached item if expire time is reached.

##### 3. Get myAngularCache item content.

Use  *myCacheFactory.getCachedContent (cacheId)* to get the content of a cached item. 

##### 4. Get or set myAngularCache item using callback function.

Use  *myCacheFactory.retriveDataFor (cacheId,callback)* to retrive a cache item or execute a callback function when the cache item is not found.
