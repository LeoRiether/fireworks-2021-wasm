(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/fireworks_2021_wasm.js":
/*!*************************************!*\
  !*** ../pkg/fireworks_2021_wasm.js ***!
  \*************************************/
/*! exports provided: World, __wbindgen_object_drop_ref, __wbindgen_object_clone_ref, __wbindgen_string_new, __wbg_instanceof_HtmlCanvasElement_97761617af6ea089, __wbg_getContext_4d5e97892c1b206a, __wbg_getElementById_3a708b83e4f034d7, __wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622, __wbg_setfillStyle_53ccf2a9886c1c4d, __wbg_beginPath_4e91b7092d0d33d9, __wbg_fill_8ec436f419a0d161, __wbg_arc_30e550c408f151ac, __wbg_fillRect_c7a19e13c5242507, __wbg_instanceof_Window_acc97ff9f5d2c7b4, __wbg_document_3ead31dbcad65886, __wbg_newnoargs_b5b063fc6c2f0376, __wbg_call_97ae9d8645dc388b, __wbg_self_6d479506f72c6a71, __wbg_window_f2557cc78490aceb, __wbg_globalThis_7f206bda628d5286, __wbg_global_ba75c50d1cf384f4, __wbindgen_is_undefined, __wbg_atan2_5761cbfd6609e01f, __wbg_cos_db1f66f8cdc3d590, __wbg_random_656f2ae924b2540e, __wbg_sin_6cd86311acaf05f2, __wbindgen_debug_string, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fireworks_2021_wasm_bg.wasm */ \"../pkg/fireworks_2021_wasm_bg.wasm\");\n/* harmony import */ var _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fireworks_2021_wasm_bg.js */ \"../pkg/fireworks_2021_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"World\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"World\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_HtmlCanvasElement_97761617af6ea089\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_HtmlCanvasElement_97761617af6ea089\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getContext_4d5e97892c1b206a\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getContext_4d5e97892c1b206a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getElementById_3a708b83e4f034d7\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getElementById_3a708b83e4f034d7\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setfillStyle_53ccf2a9886c1c4d\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setfillStyle_53ccf2a9886c1c4d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_beginPath_4e91b7092d0d33d9\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_beginPath_4e91b7092d0d33d9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fill_8ec436f419a0d161\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_fill_8ec436f419a0d161\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_arc_30e550c408f151ac\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_arc_30e550c408f151ac\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fillRect_c7a19e13c5242507\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_fillRect_c7a19e13c5242507\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_acc97ff9f5d2c7b4\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_Window_acc97ff9f5d2c7b4\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_3ead31dbcad65886\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_document_3ead31dbcad65886\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_b5b063fc6c2f0376\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newnoargs_b5b063fc6c2f0376\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_97ae9d8645dc388b\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_97ae9d8645dc388b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_6d479506f72c6a71\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_6d479506f72c6a71\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_f2557cc78490aceb\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_window_f2557cc78490aceb\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_7f206bda628d5286\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_globalThis_7f206bda628d5286\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_ba75c50d1cf384f4\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_global_ba75c50d1cf384f4\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_atan2_5761cbfd6609e01f\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_atan2_5761cbfd6609e01f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_cos_db1f66f8cdc3d590\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_cos_db1f66f8cdc3d590\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_656f2ae924b2540e\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_656f2ae924b2540e\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_sin_6cd86311acaf05f2\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_sin_6cd86311acaf05f2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_debug_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _fireworks_2021_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/fireworks_2021_wasm.js?");

/***/ }),

/***/ "../pkg/fireworks_2021_wasm_bg.js":
/*!****************************************!*\
  !*** ../pkg/fireworks_2021_wasm_bg.js ***!
  \****************************************/
/*! exports provided: World, __wbindgen_object_drop_ref, __wbindgen_object_clone_ref, __wbindgen_string_new, __wbg_instanceof_HtmlCanvasElement_97761617af6ea089, __wbg_getContext_4d5e97892c1b206a, __wbg_getElementById_3a708b83e4f034d7, __wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622, __wbg_setfillStyle_53ccf2a9886c1c4d, __wbg_beginPath_4e91b7092d0d33d9, __wbg_fill_8ec436f419a0d161, __wbg_arc_30e550c408f151ac, __wbg_fillRect_c7a19e13c5242507, __wbg_instanceof_Window_acc97ff9f5d2c7b4, __wbg_document_3ead31dbcad65886, __wbg_newnoargs_b5b063fc6c2f0376, __wbg_call_97ae9d8645dc388b, __wbg_self_6d479506f72c6a71, __wbg_window_f2557cc78490aceb, __wbg_globalThis_7f206bda628d5286, __wbg_global_ba75c50d1cf384f4, __wbindgen_is_undefined, __wbg_atan2_5761cbfd6609e01f, __wbg_cos_db1f66f8cdc3d590, __wbg_random_656f2ae924b2540e, __wbg_sin_6cd86311acaf05f2, __wbindgen_debug_string, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"World\", function() { return World; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_HtmlCanvasElement_97761617af6ea089\", function() { return __wbg_instanceof_HtmlCanvasElement_97761617af6ea089; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getContext_4d5e97892c1b206a\", function() { return __wbg_getContext_4d5e97892c1b206a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getElementById_3a708b83e4f034d7\", function() { return __wbg_getElementById_3a708b83e4f034d7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622\", function() { return __wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setfillStyle_53ccf2a9886c1c4d\", function() { return __wbg_setfillStyle_53ccf2a9886c1c4d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_beginPath_4e91b7092d0d33d9\", function() { return __wbg_beginPath_4e91b7092d0d33d9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fill_8ec436f419a0d161\", function() { return __wbg_fill_8ec436f419a0d161; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_arc_30e550c408f151ac\", function() { return __wbg_arc_30e550c408f151ac; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fillRect_c7a19e13c5242507\", function() { return __wbg_fillRect_c7a19e13c5242507; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_acc97ff9f5d2c7b4\", function() { return __wbg_instanceof_Window_acc97ff9f5d2c7b4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_3ead31dbcad65886\", function() { return __wbg_document_3ead31dbcad65886; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_b5b063fc6c2f0376\", function() { return __wbg_newnoargs_b5b063fc6c2f0376; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_97ae9d8645dc388b\", function() { return __wbg_call_97ae9d8645dc388b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_6d479506f72c6a71\", function() { return __wbg_self_6d479506f72c6a71; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_f2557cc78490aceb\", function() { return __wbg_window_f2557cc78490aceb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_7f206bda628d5286\", function() { return __wbg_globalThis_7f206bda628d5286; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_ba75c50d1cf384f4\", function() { return __wbg_global_ba75c50d1cf384f4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_atan2_5761cbfd6609e01f\", function() { return __wbg_atan2_5761cbfd6609e01f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_cos_db1f66f8cdc3d590\", function() { return __wbg_cos_db1f66f8cdc3d590; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_656f2ae924b2540e\", function() { return __wbg_random_656f2ae924b2540e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_sin_6cd86311acaf05f2\", function() { return __wbg_sin_6cd86311acaf05f2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fireworks_2021_wasm_bg.wasm */ \"../pkg/fireworks_2021_wasm_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(_fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        _fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n    }\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nclass World {\n\n    static __wrap(ptr) {\n        const obj = Object.create(World.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_world_free\"](ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @returns {World}\n    */\n    static new(width, height) {\n        const ret = _fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_new\"](width, height);\n        return World.__wrap(ret);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    */\n    resize(width, height) {\n        _fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_resize\"](this.ptr, width, height);\n    }\n    /**\n    * What should a particle do when it receives a fuse event?\n    * Returns the new behavior of the particle, or None if it should be deleted\n    * @param {bigint} time\n    * @param {number} id\n    */\n    handle_fuse_event(time, id) {\n        _fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_handle_fuse_event\"](this.ptr, time, id);\n    }\n    /**\n    * @param {number} time\n    * @param {number} dt\n    */\n    loopity_loop(time, dt) {\n        _fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_loopity_loop\"](this.ptr, time, dt);\n    }\n    /**\n    * @param {number} time\n    * @param {number} seconds\n    */\n    update_countdown(time, seconds) {\n        _fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_update_countdown\"](this.ptr, time, seconds);\n    }\n    /**\n    * @param {number} time\n    * @param {number} tx\n    * @param {number} ty\n    * @param {boolean} user\n    */\n    push_lerper(time, tx, ty, user) {\n        _fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"world_push_lerper\"](this.ptr, time, tx, ty, user);\n    }\n}\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    const ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_instanceof_HtmlCanvasElement_97761617af6ea089(arg0) {\n    let result;\n    try {\n        result = getObject(arg0) instanceof HTMLCanvasElement;\n    } catch {\n        result = false;\n    }\n    const ret = result;\n    return ret;\n};\n\nfunction __wbg_getContext_4d5e97892c1b206a() { return handleError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_getElementById_3a708b83e4f034d7(arg0, arg1, arg2) {\n    const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nfunction __wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622(arg0) {\n    let result;\n    try {\n        result = getObject(arg0) instanceof CanvasRenderingContext2D;\n    } catch {\n        result = false;\n    }\n    const ret = result;\n    return ret;\n};\n\nfunction __wbg_setfillStyle_53ccf2a9886c1c4d(arg0, arg1) {\n    getObject(arg0).fillStyle = getObject(arg1);\n};\n\nfunction __wbg_beginPath_4e91b7092d0d33d9(arg0) {\n    getObject(arg0).beginPath();\n};\n\nfunction __wbg_fill_8ec436f419a0d161(arg0) {\n    getObject(arg0).fill();\n};\n\nfunction __wbg_arc_30e550c408f151ac() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {\n    getObject(arg0).arc(arg1, arg2, arg3, arg4, arg5);\n}, arguments) };\n\nfunction __wbg_fillRect_c7a19e13c5242507(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).fillRect(arg1, arg2, arg3, arg4);\n};\n\nfunction __wbg_instanceof_Window_acc97ff9f5d2c7b4(arg0) {\n    let result;\n    try {\n        result = getObject(arg0) instanceof Window;\n    } catch {\n        result = false;\n    }\n    const ret = result;\n    return ret;\n};\n\nfunction __wbg_document_3ead31dbcad65886(arg0) {\n    const ret = getObject(arg0).document;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nfunction __wbg_newnoargs_b5b063fc6c2f0376(arg0, arg1) {\n    const ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_call_97ae9d8645dc388b() { return handleError(function (arg0, arg1) {\n    const ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_self_6d479506f72c6a71() { return handleError(function () {\n    const ret = self.self;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_window_f2557cc78490aceb() { return handleError(function () {\n    const ret = window.window;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_globalThis_7f206bda628d5286() { return handleError(function () {\n    const ret = globalThis.globalThis;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_global_ba75c50d1cf384f4() { return handleError(function () {\n    const ret = global.global;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_undefined(arg0) {\n    const ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nconst __wbg_atan2_5761cbfd6609e01f = typeof Math.atan2 == 'function' ? Math.atan2 : notDefined('Math.atan2');\n\nconst __wbg_cos_db1f66f8cdc3d590 = typeof Math.cos == 'function' ? Math.cos : notDefined('Math.cos');\n\nconst __wbg_random_656f2ae924b2540e = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nconst __wbg_sin_6cd86311acaf05f2 = typeof Math.sin == 'function' ? Math.sin : notDefined('Math.sin');\n\nfunction __wbindgen_debug_string(arg0, arg1) {\n    const ret = debugString(getObject(arg1));\n    const ptr0 = passStringToWasm0(ret, _fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _fireworks_2021_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    const len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./../www/node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///../pkg/fireworks_2021_wasm_bg.js?");

/***/ }),

/***/ "../pkg/fireworks_2021_wasm_bg.wasm":
/*!******************************************!*\
  !*** ../pkg/fireworks_2021_wasm_bg.wasm ***!
  \******************************************/
/*! exports provided: memory, __wbg_world_free, world_new, world_resize, world_handle_fuse_event, world_loopity_loop, world_update_countdown, world_push_lerper, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./fireworks_2021_wasm_bg.js */ \"../pkg/fireworks_2021_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/fireworks_2021_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: init_clock, date */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init_clock\", function() { return init_clock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"date\", function() { return date; });\n/* harmony import */ var fireworks_2021_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fireworks-2021-wasm */ \"../pkg/fireworks_2021_wasm.js\");\n\n\nconst fps = 45;\nconst mspf = 1000 / fps;\n\n// these are never right, for some reason\nconst window_dimensions = () => [\n\tdocument.documentElement.clientWidth || window.innerWidth,\n\tdocument.documentElement.clientHeight || window.innerHeight,\n];\n\nlet world = fireworks_2021_wasm__WEBPACK_IMPORTED_MODULE_0__[\"World\"].new(...window_dimensions());\n\nconst canvas = document.getElementById('world');\n[canvas.width, canvas.height] = window_dimensions();\n\nwindow.addEventListener('resize', () => {\n\tworld.resize(...window_dimensions());\n\t[canvas.width, canvas.height] = window_dimensions();\n});\n\nwindow['world'] = world;\n\n////////////////////////////////////////////////////////////////////\n\n// Thanks, StackOverflow\n// and past me (https://github.com/LeoRiether/Fireworks2019.5JS/blob/master/countdown.js)\nlet offset = 0;\n\nconst worldTimeAPI = {\n    url: \"https://worldtimeapi.org/api/timezone/Etc/UTC\",\n    timeParam: \"utc_datetime\",\n};\n\nconst worldClockAPI = {\n    url: \"http://worldclockapi.com/api/json/utc/now\",\n    timeParam: \"currentDateTime\",\n};\n\nconst anotherWorldTimeAPI = {\n    url: \"https://myworldtimeapi.herokuapp.com/Antarctica/Troll\",\n    timeParam: \"utc_datetime\",\n};\n\nconst getOffsetWith = API => new Promise((res, rej) => {\n    let xhr = new XMLHttpRequest();\n    xhr.open(\"GET\", API.url);\n    xhr.responseType = 'json';\n\n    xhr.onload = () => {\n        let server = new Date(xhr.response[API.timeParam]);\n        res(server - new Date());\n    };\n\n    xhr.onerror = rej;\n\n    xhr.send();\n});\n\nconst getOffset = () =>\n    getOffsetWith(anotherWorldTimeAPI)\n        .catch(() => {\n            console.log(\"myworldtimeapi query failed! Trying worldclocktime instead\");\n            return getOffsetWith(worldTimeAPI);\n        })\n        .catch(() => {\n            console.log(\"worldtimeapi query failed! Trying worldclockapi instead\");\n            return getOffsetWith(worldClockAPI);\n        });\n\nfunction init_clock() {\n    getOffset()\n        .then(o => offset = o) // wtf don't set a global variable in async code like this\n        .then(() => console.log('offset found: ', offset))\n        .catch(() => console.log('getOffset() failed'));\n}\n\ninit_clock();\n\nfunction date() {\n    let d = new Date();\n    d.setTime(d.getTime() + offset);\n    return d;\n}\n\n////////////////////////////////////////////////////////////////////\n\nlet calls = 0;\nlet time = 0;\nlet history = [];\nfunction measure(fn) {\n\tconst before = performance.now();\n\tfn();\n\tconst after = performance.now();\n\tcalls++;\n\ttime += after - before;\n\n\tif (calls == 360) {\n\t\thistory.push(time / calls);\n\t\tcalls = 0;\n\t\ttime = 0;\n\t}\n}\n\nwindow['measureHistory'] = history;\n\n////////////////////////////////////////////////////////////////////\n\nlet focused = true;\nlet lastTime = performance.now();\nconst loop = () => {\n\tif (focused)\n\t\tsetTimeout(loop, mspf);\n\tconst now = performance.now();\n\tconst dt = (now - lastTime) / 1000;\n\n\t// measure(() => world.loopity_loop(now, dt));\n\tworld.loopity_loop(now, dt);\n\n\tlastTime = performance.now();\n};\n\nwindow.addEventListener('focus', () => {\n\tfocused = true;\n\tlastTime = performance.now();\n\tsetTimeout(loop, mspf);\n});\nwindow.addEventListener('blur', () => {\n\tfocused = false;\n});\n\nloop();\n\n////////////////////////////////////////////////////////////////////\n\nconst targetDate = new Date(2023, 0, 1, 0, 0, 0, 0); // why the fuck are months 0-indexed?\nlet lastSTo = -1000;\nfunction update_countdown() {\n\tlet msTo = targetDate - date();\n\tlet sTo = ~~(msTo / 1000);\n\tif (focused)\n\t\tworld.update_countdown(performance.now(), sTo);\n\t\n\tif (lastSTo != 0) {\n\t\tsetTimeout(update_countdown, 250);\n\t}\n\tlastSTo = sTo;\n}\n\nsetTimeout(update_countdown, 250);\n\n////////////////////////////////////////////////////////////////////\n\nwindow.addEventListener('mousedown', e => {\n\tworld.push_lerper(performance.now(), e.clientX, e.clientY, true);\n});\n\n////////////////////////////////////////////////////////////////////\n\nif (location.hostname == 'localhost') {\n\tlet ui = document.createElement('canvas');\n\tui.id = 'ui';\n\tui.style = 'position: fixed; top: 0; left: 0; z-index: 10;';\n\t[ui.width, ui.height] = window_dimensions();\n\tdocument.body.appendChild(ui);\n\tlet ctx = ui.getContext('2d');\n\n\tlet down = false;\n\twindow.addEventListener('keyup', e => {\n\t\tif (e.key == ' ') down = !down;\n\t});\n\n\tconst dist = ([x0, y0], [x1, y1]) => Math.hypot(x0 - x1, y0 - y1);\n\n\tlet points = [];\n\n\twindow.addEventListener('mousemove', e => {\n\t\tif (!down) return;\n\t\tlet point = [e.clientX, e.clientY];\n\t\tif (points.length == 0 || dist(points[points.length-1], point) > 5) {\n\t\t\tpoints.push(point);\n\t\t\tctx.fillStyle = 'white';\n\t\t\tctx.beginPath();\n\t\t\tctx.arc(point[0], point[1], 2, 0, Math.PI * 2.0);\n\t\t\tctx.fill();\n\t\t}\n\t});\n\n\twindow['points'] = () => {\n\t\tlet min = points[0];\n\t\tlet maxy = points[0][1];\n\t\tfor (let [x, y] of points) {\n\t\t\tmin = [Math.min(x, min[0]), Math.min(y, min[1])];\n\t\t\tmaxy = Math.max(maxy, y);\n\t\t}\n\t\tlet height = maxy - min[1];\n\t\tlet n = points.map(([x, y]) => [(x - min[0]) / height, (y - min[1]) / height]);\n\t\tconst fmt = x => x.toFixed(5);\n\t\treturn `&[${n.map(([x, y]) => `(${fmt(x)}, ${fmt(y)})`).join(',')}],`;\n\t};\n}\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);