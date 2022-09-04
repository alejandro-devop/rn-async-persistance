'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');
var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

var SessionContext = React__default.default.createContext({
    store: {},
    setKey: function () { return null; },
    setAllKeys: function () { return null; },
    removeKey: function () { return null; },
    clear: function () { return null; }
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

// import { View } from 'react-native'
var Wrapper = function (_a) {
    var children = _a.children;
    return React__default.default.createElement(React__default.default.Fragment, null, children);
};

var Debugger = function () {
    return (React__default.default.createElement(reactNative.View, { style: styles.root },
        React__default.default.createElement(reactNative.Text, null, "Session debuger")));
};
var styles = reactNative.StyleSheet.create({
    root: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 300,
        backgroundColor: 'rgba(255,255,255, 0.8)',
        padding: 20
    }
});

var usePrevProps = function (value) {
    var ref = React.useRef();
    React__default.default.useEffect(function () {
        ref.current = value;
    });
    return (ref.current || {});
};

var SessionProvider = function (_a) {
    var children = _a.children;
    var _b = React__default.default.useState({}), store = _b[0], setStore = _b[1];
    // const [locked, setLocked] = React.useState(false)
    var queue = React__default.default.useRef([]);
    var prevProps = usePrevProps({ store: store, queue: queue.current });
    var processing = React__default.default.useRef(false);
    var setKey = function (key, value) {
        queue.current.push({ type: 'key', payload: { key: key, value: value } });
        if (!processing.current) {
            processing.current = true;
            processQueue();
        }
    };
    var processQueue = React__default.default.useCallback(function () {
        var queueSize = queue.current.length;
        if (queueSize > 0) {
            var storeToPersist = queue.current.reduce(function (newStore, currentItem) {
                if (currentItem.type === 'key') {
                    var payload = currentItem.payload;
                    newStore[payload.key] = payload.value;
                }
                return newStore;
            }, store);
            queue.current = [];
            if (___default.default.isEqual(prevProps.store, store)) ;
            else {
                setStore(__assign(__assign({}, store), storeToPersist));
            }
        }
        processing.current = false;
    }, [store, queue.current, prevProps.store, processing.current]);
    React__default.default.useEffect(function () {
        processQueue();
    }, [queue.current, store]);
    var setAllKeys = function () { };
    var removeKey = function () { };
    var clear = function () { };
    return (React__default.default.createElement(Wrapper, null,
        React__default.default.createElement(SessionContextProvider, { value: {
                store: store,
                setKey: setKey,
                setAllKeys: setAllKeys,
                removeKey: removeKey,
                clear: clear
            } },
            children,
            React__default.default.createElement(Debugger, null))));
};

exports.SessionProvider = SessionProvider;
exports.useSession = useSession;
//# sourceMappingURL=index.js.map
