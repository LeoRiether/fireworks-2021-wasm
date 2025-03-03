/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/fireworks_2021_wasm_bg.wasm": function() {
/******/ 			return {
/******/ 				"./fireworks_2021_wasm_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_97761617af6ea089": function(p0i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_97761617af6ea089"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_4d5e97892c1b206a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_getContext_4d5e97892c1b206a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getElementById_3a708b83e4f034d7": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_getElementById_3a708b83e4f034d7"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622": function(p0i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622"](p0i32);
/******/ 					},
/******/ 					"__wbg_setfillStyle_53ccf2a9886c1c4d": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_setfillStyle_53ccf2a9886c1c4d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_beginPath_4e91b7092d0d33d9": function(p0i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_beginPath_4e91b7092d0d33d9"](p0i32);
/******/ 					},
/******/ 					"__wbg_fill_8ec436f419a0d161": function(p0i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_fill_8ec436f419a0d161"](p0i32);
/******/ 					},
/******/ 					"__wbg_arc_30e550c408f151ac": function(p0i32,p1f64,p2f64,p3f64,p4f64,p5f64) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_arc_30e550c408f151ac"](p0i32,p1f64,p2f64,p3f64,p4f64,p5f64);
/******/ 					},
/******/ 					"__wbg_fillRect_c7a19e13c5242507": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_fillRect_c7a19e13c5242507"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_acc97ff9f5d2c7b4": function(p0i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_instanceof_Window_acc97ff9f5d2c7b4"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_3ead31dbcad65886": function(p0i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_document_3ead31dbcad65886"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_b5b063fc6c2f0376": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_newnoargs_b5b063fc6c2f0376"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_97ae9d8645dc388b": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_call_97ae9d8645dc388b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_6d479506f72c6a71": function() {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_self_6d479506f72c6a71"]();
/******/ 					},
/******/ 					"__wbg_window_f2557cc78490aceb": function() {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_window_f2557cc78490aceb"]();
/******/ 					},
/******/ 					"__wbg_globalThis_7f206bda628d5286": function() {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_globalThis_7f206bda628d5286"]();
/******/ 					},
/******/ 					"__wbg_global_ba75c50d1cf384f4": function() {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_global_ba75c50d1cf384f4"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_atan2_5761cbfd6609e01f": function(p0f64,p1f64) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_atan2_5761cbfd6609e01f"](p0f64,p1f64);
/******/ 					},
/******/ 					"__wbg_cos_db1f66f8cdc3d590": function(p0f64) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_cos_db1f66f8cdc3d590"](p0f64);
/******/ 					},
/******/ 					"__wbg_random_656f2ae924b2540e": function() {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_random_656f2ae924b2540e"]();
/******/ 					},
/******/ 					"__wbg_sin_6cd86311acaf05f2": function(p0f64) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbg_sin_6cd86311acaf05f2"](p0f64);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/fireworks_2021_wasm_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/fireworks_2021_wasm_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/fireworks_2021_wasm_bg.wasm":"86c64413ac91f9773fb2"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });