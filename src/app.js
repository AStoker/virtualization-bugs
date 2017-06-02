import { computedFrom } from 'aurelia-framework';

export class App {
  constructor() {
    //Sorted Items
    this.controlItems = [];
    for (let i = 0; i < 1000; i++) {
      this.controlItems.push({index: i, value: `Test Item: ${i}`});
    }
    this.sortedItems = this.controlItems.slice();
    this.sortedItemsWithReplacement = this.controlItems.slice();
    this.sortedAddedItems = this.controlItems.slice();
    this._filteredItems = this.controlItems.slice();
    this._filteredSortedItems = this.controlItems.slice();

    this.filterQuery = '';
    this.filterSortQuery = '';
  }

  sortDescending() {
    this.sortedItems.sort((a, b) => {
      if (a.index > b.index) {
        return -1;
      } else if (a.index < b.index) {
        return 1;
      }
      return 0;
    });
  }
  sortAscending() {
    this.sortedItems.sort((a, b) => {
      if (a.index < b.index) {
        return -1;
      } else if (a.index > b.index) {
        return 1;
      }
      return 0;
    });
  }

  sortDescendingByReplacing() {
    let newArr = this.sortedItemsWithReplacement.slice().sort((a, b) => {
      if (a.index > b.index) {
        return -1;
      } else if (a.index < b.index) {
        return 1;
      }
      return 0;
    });
    this.sortedItemsWithReplacement = newArr;
  }
  sortAscendingByReplacing() {
    let newArr = this.sortedItemsWithReplacement.slice().sort((a, b) => {
      if (a.index < b.index) {
        return -1;
      } else if (a.index > b.index) {
        return 1;
      }
      return 0;
    });
    this.sortedItemsWithReplacement = newArr;
  }

  sortDescendingWithFilter() {
    let newArr = this._filteredSortedItems.slice().sort((a, b) => {
      if (a.index > b.index) {
        return -1;
      } else if (a.index < b.index) {
        return 1;
      }
      return 0;
    });
    this._filteredSortedItems = newArr;
  }
  sortAscendingWithFilter() {
    let newArr = this._filteredSortedItems.slice().sort((a, b) => {
      if (a.index < b.index) {
        return -1;
      } else if (a.index > b.index) {
        return 1;
      }
      return 0;
    });
    this._filteredSortedItems = newArr;
  }

  sortDescendingWhenAdding() {
    let newArr = this.sortedAddedItems.slice().sort((a, b) => {
      if (a.index > b.index) {
        return -1;
      } else if (a.index < b.index) {
        return 1;
      }
      return 0;
    });
    this.sortedAddedItems = newArr;
  }
  sortAscendingWhenAdding() {
    let newArr = this.sortedAddedItems.slice().sort((a, b) => {
      if (a.index < b.index) {
        return -1;
      } else if (a.index > b.index) {
        return 1;
      }
      return 0;
    });
    this.sortedAddedItems = newArr;
  }
  addToTopOfSortedAddedItems() {
    for (let i = 10; i >= 0; i--) {
      this.sortedAddedItems.unshift({index: i, value: `Test Item B: ${i}`});
    }
  }

  @computedFrom('filterQuery')
  get filteredItems() {
    return this._filteredItems.filter(item => item.value.toLowerCase().indexOf(this.filterQuery.toLowerCase()) > -1);
  }

  @computedFrom('filterSortQuery', '_filteredSortedItems')
  get filteredSortedItems() {
    return this._filteredSortedItems.filter(item => item.value.toLowerCase().indexOf(this.filterSortQuery.toLowerCase()) > -1);
  }
}
