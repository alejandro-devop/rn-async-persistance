'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');
var JSONTree = require('react-native-json-tree');
var _ = require('lodash');
var AsyncStorage = require('@react-native-async-storage/async-storage');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var JSONTree__default = /*#__PURE__*/_interopDefaultLegacy(JSONTree);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
var AsyncStorage__default = /*#__PURE__*/_interopDefaultLegacy(AsyncStorage);

var SessionContext = React__default.default.createContext({
    store: {},
    setKey: function () { return null; },
    setAllKeys: function () { return null; },
    removeKey: function () { return null; },
    clear: function () { return null; },
    debug: false
});
var SessionContextProvider = SessionContext.Provider;
SessionContext.Consumer;

var useSession = function () {
    var _a = React.useContext(SessionContext), store = _a.store, clear = _a.clear, removeKey = _a.removeKey, setAllKeys = _a.setAllKeys, setKey = _a.setKey;
    return { store: store, clear: clear, removeKey: removeKey, setAllKeys: setAllKeys, setKey: setKey };
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

// import { View } from 'react-native'
var Wrapper = function (_a) {
    var children = _a.children;
    return React__default.default.createElement(React__default.default.Fragment, null, children);
};

var styles$1 = reactNative.StyleSheet.create({
    root: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 40,
        backgroundColor: 'rgba(255,255,255, 0.8)'
    },
    rootExpanded: {
        height: '30%'
    },
    titleWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        fontSize: 22
    },
    buttonsRow: {
        flexDirection: 'row',
        paddingHorizontal: 20
    }
});

var classNames = function (names, styles) {
    var resultedClasses = Object.keys(names).reduce(function (result, currentKey) {
        if (names[currentKey] === true) {
            result.push(styles[currentKey]);
        }
        return result;
    }, []);
    return resultedClasses;
};

var Button = function (_a) {
    var children = _a.children;
    return (React__default.default.createElement(reactNative.TouchableOpacity, null,
        React__default.default.createElement(reactNative.Text, null, children)));
};

var styles = reactNative.StyleSheet.create({
    root: {
        flex: 1
    }
});

var StoreDebugger = function () {
    var store = React__default.default.useContext(SessionContext).store;
    return (React__default.default.createElement(reactNative.View, { style: styles.root },
        React__default.default.createElement(reactNative.Text, null, "Current store"),
        React__default.default.createElement(JSONTree__default.default, { hideRoot: true, data: store })));
};

var Debugger = function () {
    var _a = React__default.default.useState(true), expanded = _a[0], setExpanded = _a[1];
    return (React__default.default.createElement(reactNative.View, { style: classNames({ root: true, rootExpanded: expanded }, styles$1) },
        React__default.default.createElement(reactNative.View, { style: styles$1.titleWrapper },
            React__default.default.createElement(reactNative.Text, { style: styles$1.title }, "Session debuger"),
            React__default.default.createElement(reactNative.TouchableOpacity, { onPress: function () { return setExpanded(!expanded); } },
                React__default.default.createElement(reactNative.Text, null, expanded ? 'Close' : 'Open'))),
        React__default.default.createElement(reactNative.View, { style: styles$1.buttonsRow },
            React__default.default.createElement(Button, null, "Stores")),
        React__default.default.createElement(reactNative.ScrollView, null,
            React__default.default.createElement(StoreDebugger, null))));
};

var usePrevProps = function (value) {
    var ref = React.useRef();
    React__default.default.useEffect(function () {
        ref.current = value;
    });
    return (ref.current || {});
};

var LoadingScreen = function () {
    return (React__default.default.createElement(reactNative.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
        React__default.default.createElement(reactNative.Text, null, "Loading")));
};

/**
 * Component to wrapp the session logic and pass it to the whole appliation
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @param param0
 * @returns
 */
var SessionProvider = function (_a) {
    var children = _a.children, debug = _a.debug;
    var _b = React__default.default.useState({}), store = _b[0], setStore = _b[1];
    var _c = React__default.default.useState(false), rehydrated = _c[0], setRehydrated = _c[1];
    var _d = React__default.default.useState(false), loaded = _d[0], setLoaded = _d[1];
    // const [storeActions, setStoreActions] = React.useState([])
    /**
     * This queue stores the actions to be executed by the session on the next frame
     */
    var queue = React__default.default.useRef([]);
    /**
     * Saving the previews store state help us to track the changes on the current frame
     */
    var prevProps = usePrevProps({ store: store, queue: queue.current });
    /**
     * A flag to lock the queue process
     */
    var processing = React__default.default.useRef(false);
    /**
     * Function to update the state key by key
     */
    var setKey = React__default.default.useCallback(function (key, value) {
        queue.current.push({ type: 'key', payload: { key: key, value: value } });
        if (!processing.current) {
            processing.current = true;
            processQueue();
        }
    }, [store]);
    /**
     * Function to trigger the session clearing
     */
    var clear = React__default.default.useCallback(function () {
        queue.current.push({ type: 'clear', payload: {} });
        if (!processing.current) {
            processing.current = true;
            processQueue();
        }
    }, [store]);
    /**
     * Function to process the queue of changes
     */
    var processQueue = React__default.default.useCallback(function () {
        var queueSize = queue.current.length;
        /* If there's a clearing action all the changes previous registered must be deleted */
        var cleared = false;
        if (queueSize > 0) {
            var storeToPersist = queue.current.reduce(function (newStore, currentItem) {
                if (currentItem.type === 'key') {
                    var payload = currentItem.payload;
                    newStore[payload.key] = payload.value;
                }
                if (currentItem.type === 'clear') {
                    newStore = {};
                    cleared = true;
                }
                return newStore;
            }, store);
            /* Once the queue is processded it must be clear it */
            queue.current = [];
            if (!cleared && ___default.default.isEqual(prevProps.store, store)) ;
            else {
                var newStore = cleared ? storeToPersist : __assign(__assign({}, store), storeToPersist);
                setStore(newStore);
                persistInStore(newStore);
            }
        }
        processing.current = false;
    }, [store, queue.current, prevProps.store, processing.current]);
    /**
     * Function to persist the store to the device async storage.
     */
    var persistInStore = React__default.default.useCallback(function (newStore) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, AsyncStorage__default.default.setItem('@store', JSON.stringify(newStore))];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, []);
    /**
     * Function to fetch the current saved data from the local storage.
     */
    var rehydrate = React__default.default.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var storedStore, parsedStore;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, AsyncStorage__default.default.getItem('@store')];
                case 1:
                    storedStore = _b.sent();
                    parsedStore = JSON.parse(storedStore || '{}');
                    setStore(parsedStore);
                    setRehydrated(true);
                    return [3 /*break*/, 4];
                case 2:
                    _b.sent();
                    setStore({});
                    return [3 /*break*/, 4];
                case 3:
                    setLoaded(true);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }, []);
    React__default.default.useEffect(function () {
        if (!rehydrated) {
            rehydrate();
        }
    }, [queue.current, store, rehydrated]);
    var setAllKeys = function () { };
    var removeKey = function () { };
    return (React__default.default.createElement(Wrapper, null,
        React__default.default.createElement(SessionContextProvider, { value: {
                store: store,
                setKey: setKey,
                setAllKeys: setAllKeys,
                removeKey: removeKey,
                clear: clear,
                debug: debug
            } },
            loaded ? children : React__default.default.createElement(LoadingScreen, null),
            debug && React__default.default.createElement(Debugger, null))));
};

exports.SessionProvider = SessionProvider;
exports.useSession = useSession;
//# sourceMappingURL=index.js.map
