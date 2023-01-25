import { Item, GildedRose } from '../app/gilded-rose';

// Add a master test here create a list of class items, run update quality, log result, save results, compare after refactoring

const gildedRose1 = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 4, 80)]);
console.log(gildedRose1.updateQuality())

const gildedRose2 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 30)]);
console.log(gildedRose2.updateQuality())

const gildedRose4 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)]);
console.log(gildedRose4.updateQuality())

const gildedRose5 = new GildedRose([new Item('Aged Brie', 4, 20)]);
console.log(gildedRose5.updateQuality())

const gildedRose6 = new GildedRose([new Item('Prawns', 4, 20)]);
console.log(gildedRose6.updateQuality())

/*
[ Item { name: 'Sulfuras, Hand of Ragnaros', sellIn: 4, quality: 80 } ]
[
  Item {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 3,
    quality: 33
  }
]
[
  Item {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: -1,
    quality: 0
  }
]
[ Item { name: 'Aged Brie', sellIn: 3, quality: 21 } ]
[ Item { name: 'Prawns', sellIn: 3, quality: 19 } ]
*/