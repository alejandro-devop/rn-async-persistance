'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactRedux = require('react-redux');
var toolkit = require('@reduxjs/toolkit');
var redux = require('redux');
var AsyncStorage = require('@react-native-async-storage/async-storage');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var AsyncStorage__default = /*#__PURE__*/_interopDefaultLegacy(AsyncStorage);

var SessionContext = React__default.default.createContext({});
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

var getReducer = (function (initialState) {
    return function (state, action) {
        var _a, _b;
        if (state === void 0) { state = initialState; }
        var type = action.type, payload = action.payload;
        var _c = payload || {}, key = _c.key, data = _c.data;
        switch (type) {
            case '@store/set-key':
                return __assign(__assign({}, state), (_a = {}, _a[key] = data, _a));
            case '@store/del-key':
                return __assign(__assign({}, state), (_b = {}, _b[key] = null, _b));
            case '@store/set-all':
                return __assign(__assign({}, state), payload);
            default:
                return state;
        }
    };
});

var ReduxWrapper = function (_a) {
    var children = _a.children, initialState = _a.initialState;
    var store = toolkit.configureStore({ reducer: redux.combineReducers({ store: getReducer(initialState) }) });
    var timesControl = null;
    var onStateChanged = React__default.default.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var newStore;
        return __generator(this, function (_a) {
            newStore = store.getState();
            try {
                console.log('Updating the state.');
                AsyncStorage__default.default.setItem('@store', JSON.stringify(newStore === null || newStore === void 0 ? void 0 : newStore.store));
            }
            catch (_b) { }
            return [2 /*return*/];
        });
    }); }, [store]);
    store.subscribe(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            clearTimeout(timesControl);
            timesControl = setTimeout(function () {
                onStateChanged();
            }, 200);
            return [2 /*return*/];
        });
    }); });
    React__default.default.useEffect(function () {
        return function () {
            clearTimeout(timesControl);
        };
    }, [timesControl]);
    return React__default.default.createElement(reactRedux.Provider, { store: store }, children);
};
ReduxWrapper.defaultProps = {
    initialState: {
        logged: false
    }
};

var Debugger = function () {
    return React__default.default.createElement(React__default.default.Fragment, null);
};

var setKey = function (key, data) { return ({
    type: '@store/set-key',
    payload: {
        key: key,
        data: data
    }
}); };
var setAll = function (keys) { return ({
    type: '@store/set-all',
    payload: keys
}); };

var SessionDriver = function (_a) {
    var children = _a.children;
    var store = reactRedux.useSelector(function (state) { return state.store; });
    var dispatch = reactRedux.useDispatch();
    var handleSetKey = function (key, value) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dispatch(setKey(key, value));
            return [2 /*return*/];
        });
    }); };
    var handleRemoveKey = function () { };
    var handleSetAllKeys = function (keys) {
        dispatch(setAll(keys));
    };
    var handleClear = function () { };
    return (React__default.default.createElement(SessionContextProvider, { value: {
            store: store,
            setKey: handleSetKey,
            setAllKeys: handleSetAllKeys,
            removeKey: handleRemoveKey,
            clear: handleClear,
            debug: false
        } }, children));
};

/**
 * Loads async storage and data and initializes the redux store
 * @param param0
 * @returns
 */
var ReduxSessionProvider = function (_a) {
    var children = _a.children;
    //Load the session from the async storage
    var _b = React__default.default.useState({}), persistedData = _b[0], setPersistedData = _b[1];
    var _c = React__default.default.useState(false), loaded = _c[0], setLoaded = _c[1];
    var getData = React__default.default.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var storedStore, parsedStore;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, AsyncStorage__default.default.getItem('@store')];
                case 1:
                    storedStore = _a.sent();
                    parsedStore = JSON.parse(storedStore || '{}');
                    setPersistedData(parsedStore);
                    setLoaded(true);
                    return [2 /*return*/];
            }
        });
    }); }, [setPersistedData]);
    React__default.default.useEffect(function () {
        if (!loaded) {
            getData();
        }
    }, [loaded]);
    if (!loaded) {
        return React__default.default.createElement(React__default.default.Fragment, null);
    }
    return (React__default.default.createElement(ReduxWrapper, { initialState: persistedData },
        React__default.default.createElement(SessionDriver, null,
            children,
            React__default.default.createElement(Debugger, null))));
};

exports.SessionProvider = ReduxSessionProvider;
exports.useSession = useSession;
//# sourceMappingURL=index.js.map
