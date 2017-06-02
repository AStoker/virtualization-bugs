import { computedFrom } from 'aurelia-framework';

export class App {
  constructor() {
    //Sorted Items
    this.controlItems = [];
    this.sortedItems = [];
    this.sortedItemsWithReplacement = [];
    this._filteredItems = [];
    for (let i = 0; i < 1000; i++) {
      this.controlItems.push({index: i, value: `Test Item: ${i}`});
    }
    this.sortedItems = this.controlItems.slice();
    this.sortedItemsWithReplacement = this.controlItems.slice();
    this._filteredItems = this.controlItems.slice();

    this.filterQuery = '';
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

  @computedFrom('filterQuery')
  get filteredItems() {
    return this._filteredItems.filter(item => item.value.toLowerCase().indexOf(this.filterQuery.toLowerCase()) > -1);
  }
}
