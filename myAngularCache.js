/*
 * myAngularCache.js
 * https://github.com/dalvarod/myAngularCache
 * Version: 0.1.0 - 2015-06-20
 * License: MIT
 *
 * Manage cache in angular far beyond $factoryCache
 * This factory allows to set expire times for every created cache.
 * Use myCacheFactory.createCache (cachId, CacheContent, cacheTime) to create a cache item with an expiration time.
 * Use myCacheFactory.checkCache (cacheId) to check the avaialbility of a created cache item. It checks the cache time.
 * Use myCacheFactory.retriveDataFor (cacheId,callback) to retrive a cache item or execute a callback function when the cache item is not found.
 * Use myCacheFactory.getCachedContent (cacheId) to get the content og a cache item. 
*/

(function () {

    angular.module('myAngularCache', [])

        .factory('myCacheFactory', function ($cacheFactory, default_cache_time) {
            var cacheObj = {};
            cacheObj.cacheItem = {}
            cacheObj.debug = false;
            cacheObj.default_cache_time = 100000; // Default cache time in Seconds.

            cacheObj.debugger = function (data) {
                if (cacheObj.debug) {
                    console.log(data);
                }
            }

            cacheObj.createCache = function (cacheId, cacheContent, cacheTime) {
                cacheTime = isNaN(cacheTime) === false ? cacheTime : cacheObj.default_cache_time;
                cacheObj.debugger('creating cache item: ' + cacheId);
                cacheObj.cacheItem = $cacheFactory(cacheId);
                cacheObj.cacheItem.put('id', cacheId);
                cacheObj.cacheItem.put('content', cacheContent);
                var date = new Date();
                cacheObj.cacheItem.put('expires', new Date(date.getTime() + cacheTime));
                return  this;
            }

            cacheObj.retriveDataFor = function (cacheId, callback) {
                cacheObj.debugger("retrive data for " + cacheId);
                if (cacheObj.checkCache(cacheId) == false && typeof callback == 'function') {
                    cacheObj.debugger("calling data for " + cacheId);
                    return callback();
                }
                else {
                    cacheObj.debugger("Data provided by cache " + cacheId)
                    return cacheObj.getCachedContent(cacheId);
                }
            }

            cacheObj.checkCache = function (cacheId) {
                var cached = false;
                cacheObj.cacheItem = $cacheFactory.get(cacheId);
                if (typeof cacheObj.cacheItem == 'object') {
                    var date = new Date();
                    // check de cache expirada.
                    if (cacheObj.cacheItem.get('expires').getTime() < date.getTime()) {
                        cacheObj.debugger(cacheId + ": cache expired.....");
                        cacheObj.cacheItem.destroy();
                        cacheObj.cacheItem = undefined;
                    }
                    // existe cache
                    else {
                        cacheObj.debugger("Cache found: " + cacheId);
                        cached = true;
                    }
                }
                else {
                    cacheObj.debugger('Cache not found: ' + cacheId);
                }
                return cached;
            }
            
            cacheObj.getCachedContent = function (cacheId) {
                cacheObj.cacheItem = $cacheFactory.get(cacheId);
                return cacheObj.cacheItem.get('content');
            }
            return cacheObj;
        });
})();
