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

  var _dec, _dec2, _desc, _value, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.computedFrom)('filterQuery'), _dec2 = (0, _aureliaFramework.computedFrom)('filterSortQuery', '_filteredSortedItems'), (_class = function () {
    function App() {
      _classCallCheck(this, App);

      this.controlItems = [];
      for (var i = 0; i < 1000; i++) {
        this.controlItems.push({ index: i, value: 'Test Item: ' + i });
      }
      this.sortedItems = this.controlItems.slice();
      this.sortedItemsWithReplacement = this.controlItems.slice();
      this.sortedAddedItems = this.controlItems.slice();
      this._filteredItems = this.controlItems.slice();
      this._filteredSortedItems = this.controlItems.slice();

      this.filterQuery = '';
      this.filterSortQuery = '';
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

    App.prototype.sortDescendingWithFilter = function sortDescendingWithFilter() {
      var newArr = this._filteredSortedItems.slice().sort(function (a, b) {
        if (a.index > b.index) {
          return -1;
        } else if (a.index < b.index) {
          return 1;
        }
        return 0;
      });
      this._filteredSortedItems = newArr;
    };

    App.prototype.sortAscendingWithFilter = function sortAscendingWithFilter() {
      var newArr = this._filteredSortedItems.slice().sort(function (a, b) {
        if (a.index < b.index) {
          return -1;
        } else if (a.index > b.index) {
          return 1;
        }
        return 0;
      });
      this._filteredSortedItems = newArr;
    };

    App.prototype.sortDescendingWhenAdding = function sortDescendingWhenAdding() {
      var newArr = this.sortedAddedItems.slice().sort(function (a, b) {
        if (a.index > b.index) {
          return -1;
        } else if (a.index < b.index) {
          return 1;
        }
        return 0;
      });
      this.sortedAddedItems = newArr;
    };

    App.prototype.sortAscendingWhenAdding = function sortAscendingWhenAdding() {
      var newArr = this.sortedAddedItems.slice().sort(function (a, b) {
        if (a.index < b.index) {
          return -1;
        } else if (a.index > b.index) {
          return 1;
        }
        return 0;
      });
      this.sortedAddedItems = newArr;
    };

    App.prototype.addToTopOfSortedAddedItems = function addToTopOfSortedAddedItems() {
      for (var i = 10; i >= 0; i--) {
        this.sortedAddedItems.unshift({ index: i, value: 'Test Item B: ' + i });
      }
    };

    _createClass(App, [{
      key: 'filteredItems',
      get: function get() {
        var _this = this;

        return this._filteredItems.filter(function (item) {
          return item.value.toLowerCase().indexOf(_this.filterQuery.toLowerCase()) > -1;
        });
      }
    }, {
      key: 'filteredSortedItems',
      get: function get() {
        var _this2 = this;

        return this._filteredSortedItems.filter(function (item) {
          return item.value.toLowerCase().indexOf(_this2.filterSortQuery.toLowerCase()) > -1;
        });
      }
    }]);

    return App;
  }(), (_applyDecoratedDescriptor(_class.prototype, 'filteredItems', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'filteredItems'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'filteredSortedItems', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'filteredSortedItems'), _class.prototype)), _class));
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
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from='./app.css'></require>\n  <h1>Virtualization Bug Examples</h1>\n\n  <section>\n    <h3>Control</h3>\n    <div class=\"scroll-container\" style=\"height: 213px; overflow: auto\">\n      <div class=\"${item.index % 2 === 0 ? 'even' : ''}\" virtual-repeat.for=\"item of controlItems\">\n        ${$index} ${item.value}\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h3>Sorting</h3>\n    <p>(Broken period)</p>\n    <p>When scrolled down the list, and a sort takes place, the list does not resume its previous location and items don't appear currectly</p>\n    <p>What's broken: handleCollectionMutated is ultimately trying to recalculate buffer heights. \n      I believe this is part of the problem as the buffer heights do match what they should be. </p>\n    <button click.trigger=\"sortDescending()\">Sort Descending</button>\n    <button click.trigger=\"sortAscending()\">Sort Ascending</button>\n    <div class=\"scroll-container\" style=\"height: 200px; overflow: auto\">\n      <div class=\"${item.index % 2 === 0 ? 'even' : ''}\" virtual-repeat.for=\"item of sortedItems\">\n        ${$index} ${item.value}\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h3>Sorting By Replacing Array</h3>\n    <p>(Broken when scrolled too far down)</p>\n    <p>When scrolled down the list, and a sort takes place, the list does not resume its previous location and items don't appear currectly</p>\n    <p>Could be broken due to scroll direction not being set correctly?\n      Ultimately, when you're at the bottom of the list and you sort, the scroll top appears to just be a bit off, half of the items are in the view, but the other half are out of bounds.</p>\n    <button click.trigger=\"sortDescendingByReplacing()\">Sort Descending</button>\n    <button click.trigger=\"sortAscendingByReplacing()\">Sort Ascending</button>\n    <div class=\"scroll-container\" style=\"height: 200px; overflow: auto\">\n      <div class=\"${item.index % 2 === 0 ? 'even' : ''}\" virtual-repeat.for=\"item of sortedItemsWithReplacement\">\n        ${$index} ${item.value}\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h3>Sorting and Adding To Top</h3>\n    <p>(Broken)</p>\n    <p>Looks like when the items are added to the top, the buffer is added, but the bound items remain the same. \n      So the viewed items now appear lower on the view than they should be (in relation to how many items were added to the top)</p>\n    <button click.trigger=\"addToTopOfSortedAddedItems()\">Add To Top</button>\n    <button click.trigger=\"sortDescendingWhenAdding()\">Sort Descending</button>\n    <button click.trigger=\"sortAscendingWhenAdding()\">Sort Ascending</button>\n    <div class=\"scroll-container\" style=\"height: 200px; overflow: auto\">\n      <div class=\"${item.index % 2 === 0 ? 'even' : ''}\" virtual-repeat.for=\"item of sortedAddedItems\">\n        ${$index} ${item.value}\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h3>Filtering</h3>\n    <p></p>\n    <input placeholder=\"filter\" value.bind=\"filterQuery\" />\n    <div class=\"scroll-container\" style=\"height: 200px; overflow: auto\">\n      <div class=\"${item.index % 2 === 0 ? 'even' : ''}\" virtual-repeat.for=\"item of filteredItems\">\n        ${$index} ${item.value}\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h3>Filtering &amp; Sorting</h3>\n    <p>(Broken)</p>\n    <p>Could be something to do with how many items are rebound when sorting. If the view is expecting 40 items, and only 20 are viewed at a time, when you sort, if you have less than 40, you get stuck numbers.\n      Additionally, could be that because you're scrolled down, it's thinking you're farther down the height than you are, causing the bound elements to be blank since they don't match (but if you scroll up, you'll see those elements start to appear).</p>\n    <input placeholder=\"filter\" value.bind=\"filterSortQuery\" />\n    <button click.trigger=\"sortDescendingWithFilter()\">Sort Descending</button>\n    <button click.trigger=\"sortAscendingWithFilter()\">Sort Ascending</button>\n    <div class=\"scroll-container\" style=\"height: 200px; overflow: auto\">\n      <div class=\"${item.index % 2 === 0 ? 'even' : ''}\" virtual-repeat.for=\"item of filteredSortedItems\">\n        ${$index} ${item.value}\n      </div>\n    </div>\n  </section>\n\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map