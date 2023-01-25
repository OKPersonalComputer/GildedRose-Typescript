import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    /*
    it('foo', function () {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('fixme');
    });
    */

    it('should decrease value of non-special item', function () {
        const gildedRose = new GildedRose([new Item('Prawns', 4, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(19);
    });

    it('should increase value of backstage pass by two close to SellIn', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(33);
    });

    it('should decrease value of backstage pass to 0 at sellIn', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('should increase value of aged brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 4, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(31);
    });

    it('should not decrease quality for sulfuras', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 4, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
    });

    it('should not decrease quality for sulfuras', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 4, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
    });

    it('should decrease quality for non-special items twice as fast after sell by date', function () {
        const gildedRose = new GildedRose([new Item('Prawns', -1, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(18);
    });

    it('should return 0 for quality is non-special items after sell by date', function () {
        const gildedRose = new GildedRose([new Item('Apples', -1, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('should decrease quality twice as fast as non-special items', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 4, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(18);
    });

    it('should decrease in quality by four in Conjured items after sell by date', function () {
        const gildedRose = new GildedRose([new Item('Conjured orange', -1, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(16);
    });

});
