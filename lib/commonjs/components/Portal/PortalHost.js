"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PortalContext = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _PortalManager = _interopRequireDefault(require("./PortalManager"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const PortalContext = exports.PortalContext = /*#__PURE__*/React.createContext(null);

/**
 * Portal host renders all of its children `Portal` elements.
 * For example, you can wrap a screen in `Portal.Host` to render items above the screen.
 * If you're using the `Provider` component, it already includes `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Text } from 'react-native';
 * import { Portal } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Portal.Host>
 *     <Text>Content of the app</Text>
 *   </Portal.Host>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * Here any `Portal` elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a `Modal`.
 */
class PortalHost extends React.Component {
  static displayName = 'Portal.Host';
  componentDidMount() {
    const manager = this.manager;
    const queue = this.queue;
    while (queue.length && manager) {
      const action = queue.pop();
      if (action) {
        // eslint-disable-next-line default-case
        switch (action.type) {
          case 'mount':
            manager.mount(action.key, action.children);
            break;
          case 'update':
            manager.update(action.key, action.children);
            break;
          case 'unmount':
            manager.unmount(action.key);
            break;
        }
      }
    }
  }
  setManager = manager => {
    this.manager = manager;
  };
  mount = children => {
    const key = this.nextKey++;
    if (this.manager) {
      this.manager.mount(key, children);
    } else {
      this.queue.push({
        type: 'mount',
        key,
        children
      });
    }
    return key;
  };
  update = (key, children) => {
    if (this.manager) {
      this.manager.update(key, children);
    } else {
      const op = {
        type: 'mount',
        key,
        children
      };
      const index = this.queue.findIndex(o => o.type === 'mount' || o.type === 'update' && o.key === key);
      if (index > -1) {
        this.queue[index] = op;
      } else {
        this.queue.push(op);
      }
    }
  };
  unmount = key => {
    if (this.manager) {
      this.manager.unmount(key);
    } else {
      this.queue.push({
        type: 'unmount',
        key
      });
    }
  };
  nextKey = 0;
  queue = [];
  render() {
    return /*#__PURE__*/React.createElement(PortalContext.Provider, {
      value: {
        mount: this.mount,
        update: this.update,
        unmount: this.unmount
      }
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: styles.container,
      collapsable: false,
      pointerEvents: "box-none"
    }, this.props.children), /*#__PURE__*/React.createElement(_PortalManager.default, {
      ref: this.setManager
    }));
  }
}
exports.default = PortalHost;
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=PortalHost.js.map