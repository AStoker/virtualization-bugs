define('app',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _desc, _value, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.computedFrom)('filterQuery'), (_class = function () {
    function App() {
      _classCallCheck(this, App);

      this.controlItems = [];
      this.sortedItems = [];
      this.sortedItemsWithReplacement = [];
      this._filteredItems = [];
      for (var i = 0; i < 1000; i++) {
        this.controlItems.push({ index: i, value: 'Test Item: ' + i });
      }
      this.sortedItems = this.controlItems.slice();
      this.sortedItemsWithReplacement = this.controlItems.slice();
      this._filteredItems = this.controlItems.slice();

      this.filterQuery = '';
    }

    App.prototype.sortDescending = function sortDescending() {
      this.sortedItems.sort(function (a, b) {
        if (a.index > b.index) {
          return -1;
        } else if (a.index < b.index) {
          return 1;
        }
        return 0;
      });
    };

    App.prototype.sortAscending = function sortAscending() {
      this.sortedItems.sort(function (a, b) {
        if (a.index < b.index) {
          return -1;
        } else if (a.index > b.index) {
          return 1;
        }
        return 0;
      });
    };

    App.prototype.sortDescendingByReplacing = function sortDescendingByReplacing() {
      var newArr = this.sortedItemsWithReplacement.slice().sort(function (a, b) {
        if (a.index > b.index) {
          return -1;
        } else if (a.index < b.index) {
          return 1;
        }
        return 0;
      });
      this.sortedItemsWithReplacement = newArr;
    };

    App.prototype.sortAscendingByReplacing = function sortAscendingByReplacing() {
      var newArr = this.sortedItemsWithReplacement.slice().sort(function (a, b) {
        if (a.index < b.index) {
          return -1;
        } else if (a.index > b.index) {
          return 1;
        }
        return 0;
      });
      this.sortedItemsWithReplacement = newArr;
    };

    _createClass(App, [{
      key: 'filteredItems',
      get: function get() {
        var _this = this;

        return this._filteredItems.filter(function (item) {
          return item.value.toLowerCase().indexOf(_this.filterQuery.toLowerCase()) > -1;
        });
      }
    }]);

    return App;
  }(), (_applyDecoratedDescriptor(_class.prototype, 'filteredItems', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'filteredItems'), _class.prototype)), _class));
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-ui-virtualization');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.css', ['module'], function(module) { module.exports = ".scroll-container {\n    border: 1px solid black;\n    width: 400px;\n}\n.scroll-container > .even {\n    background-color: rgb(208, 223, 255);\n}"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from='./app.css'></require>\n  <h1>Virtualization Bug Examples</h1>\n\n  <section>\n    <h3>Control</h3>\n    <div class=\"scroll-container\" style=\"height: 200px; overflow: auto\">\n      <div class=\"${item.index % 2 === 0 ? 'even' : ''}\" virtual-repeat.for=\"item of controlItems\">\n        ${$index} ${item.value}\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h3>Sorting</h3>\n    <p>(Broken period)</p>\n    <p>When scrolled down the list, and a sort takes place, the list does not resume its previous location and items don't appear currectly</p>\n    <button click.trigger=\"sortDescending()\">Sort Descending</button>\n    <button click.trigger=\"sortAscending()\">Sort Ascending</button>\n    <div class=\"scroll-container\" style=\"height: 200px; overflow: auto\">\n      <div class=\"${item.index % 2 === 0 ? 'even' : ''}\" virtual-repeat.for=\"item of sortedItems\">\n        ${$index} ${item.value}\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h3>Sorting By Replacing Array</h3>\n    <p>(Broken when scrolled too far down)</p>\n    <p>When scrolled down the list, and a sort takes place, the list does not resume its previous location and items don't appear currectly</p>\n    <button click.trigger=\"sortDescendingByReplacing()\">Sort Descending</button>\n    <button click.trigger=\"sortAscendingByReplacing()\">Sort Ascending</button>\n    <div class=\"scroll-container\" style=\"height: 200px; overflow: auto\">\n      <div class=\"${item.index % 2 === 0 ? 'even' : ''}\" virtual-repeat.for=\"item of sortedItemsWithReplacement\">\n        ${$index} ${item.value}\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h3>Filtering</h3>\n    <p></p>\n    <input placeholder=\"filter\" value.bind=\"filterQuery\" />\n    <div class=\"scroll-container\" style=\"height: 200px; overflow: auto\">\n      <div class=\"${item.index % 2 === 0 ? 'even' : ''}\" virtual-repeat.for=\"item of filteredItems\">\n        ${$index} ${item.value}\n      </div>\n    </div>\n  </section>\n\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map