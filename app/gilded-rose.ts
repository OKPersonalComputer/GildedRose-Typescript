export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        let ourItems = this.items;

        const specialItems = {
            backstage: 'Backstage passes to a TAFKAL80ETC concert',
            brie: 'Aged Brie',
            sulfuras: 'Sulfuras, Hand of Ragnaros',
        }

        for (let i = 0; i < ourItems.length; i++) {

            // non-special cases - Once the sell by date has passed, Quality degrades twice as fast
            if (!Object.values(specialItems).includes(ourItems[i].name)) {
                // special case - conjured item
                if (ourItems[i].name.startsWith('Conjured ')) {
                    if (ourItems[i].quality > 0) {
                        if (ourItems[i].sellIn > 0) {
                            ourItems[i].quality = Math.max(0, ourItems[i].quality - 2);
                        } else {
                            ourItems[i].quality = Math.max(0, ourItems[i].quality - 4);
                        }
                    }
                }
                else {
                    if (ourItems[i].quality > 0) {
                        if (ourItems[i].sellIn > 0) {
                            ourItems[i].quality--;
                        } else {
                            ourItems[i].quality = Math.max(0, ourItems[i].quality - 2);
                        }
                    }
                }
            }



            // special case - backstage pass
            else if (ourItems[i].name === specialItems.backstage) {
                if (ourItems[i].quality < 50) {
                    if (ourItems[i].sellIn <= 0) {
                        ourItems[i].quality = 0;
                    } else if (ourItems[i].sellIn < 6) {
                        ourItems[i].quality += 3;
                    } else if (ourItems[i].sellIn < 11) {
                        ourItems[i].quality += 2;
                    } else {
                        ourItems[i].quality++;
                    }
                }
            }
            // special case - brie
            else if (ourItems[i].name === specialItems.brie) {
                if (ourItems[i].quality < 50) {
                    ourItems[i].quality++;
                }
            }

            // reduce sellIn date
            if (ourItems[i].name != specialItems.sulfuras) {
                ourItems[i].sellIn--;
            }
        }
        return ourItems;
    }
}
