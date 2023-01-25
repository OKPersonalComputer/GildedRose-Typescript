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
            if (!Object.values(specialItems).includes(ourItems[i].name)) {
                if (ourItems[i].quality > 0) {
                    ourItems[i].quality--;
                }
            } else {
                if (ourItems[i].quality < 50) {
                    ourItems[i].quality = ourItems[i].quality + 1
                    if (ourItems[i].name == specialItems.backstage) {
                        if (ourItems[i].sellIn < 11) {
                            if (ourItems[i].quality < 50) {
                                ourItems[i].quality++;
                            }
                        }
                        if (ourItems[i].sellIn < 6) {
                            if (ourItems[i].quality < 50) {
                                ourItems[i].quality++;
                            }
                        }
                    }
                }
            }
            if (ourItems[i].name != specialItems.sulfuras) {
                ourItems[i].sellIn--;
            }
            if (ourItems[i].sellIn < 0) {
                if (ourItems[i].name != specialItems.brie) {
                    if (ourItems[i].name != specialItems.backstage) {
                        if (ourItems[i].quality > 0) {
                            if (ourItems[i].name != specialItems.sulfuras) {
                                ourItems[i].quality--;
                            }
                        }
                    } else {
                        ourItems[i].quality = ourItems[i].quality - ourItems[i].quality
                    }
                } else {
                    if (ourItems[i].quality < 50) {
                        ourItems[i].quality++;
                    }
                }
            }
        }

        return ourItems;
    }
}
