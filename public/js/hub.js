(()=>{"use strict";function n(n,i,o){if(void 0!==window.config["*"]){if(window.endpoints["*"][o].indexOf("*")>=0)return!0;if(window.endpoints["*"][o].indexOf(n)>=0)return!0}if(void 0!==window.config[i]){if(window.endpoints[i][o].indexOf("*")>=0)return!0;if(window.endpoints[i][o].indexOf(n)>=0)return!0}return!1}function i(){return void 0!==window.localStorage?BACKENDS.LocalStorage:(window.indexedDB=window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.OIndexedDB||window.msIndexedDB||void 0,window.IDBTransaction=window.IDBTransaction||window.webkitIDBTransaction||window.OIDBTransaction||window.msIDBTransaction,void 0!==window.indexedDB?BACKENDS.IndexedDB:void 0)}function o(n){return window.settings.domain_prefix?window.location.hostname.replace(".","_")+n:n}BACKENDS={LocalStorage:0,IndexedDB:1},async function(){var n=await fetch("/config.json");window.config=n.json(),window.endpoints=window.config.endpints,window.settings=window.config.settings}(),window.addEventListener("message",(function(e){var d=e.origin||e.originalEvent.origin;if(void 0!==e.data.Key)if(void 0!==e.data.content){if(!n(d,e.data.Key,"write"))return;!function(n,e){n=o(n),i()===BACKENDS.LocalStorage&&window.localStorage.setItem(n,JSON.stringify(e))}(e.data.Key,e.data.content)}else{if(!function(i,o){return n(i,o,"read")}(d,e.data.Key))return;window.parent.postMessage(function(n){if(n=o(n),i()===BACKENDS.LocalStorage)return window.localStorage.getItem(n)}(e.data.Key))}}),!1)})();