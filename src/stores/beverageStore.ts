import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import base from "../data/bases.json";
import creamer from "../data/creamers.json";
import syrup from "../data/syrups.json";
import { BeverageType, BaseBeverageType, CreamerType, SyrupType } from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    bases: base as BaseBeverageType[],
    creamers: creamer as CreamerType[],
    syrups: syrup as SyrupType[],
    currentTemp: tempretures[0],
    beverages: [] as BeverageType[],
    currentBev: null as BeverageType | null,
    currentBase: base[0],
    currentCreamer: creamer[1],
    currentSyrup: syrup[1],
    currentName: "",
  }),
  actions: {
    makeBeverage(name: string, temp: string, base: BaseBeverageType, creamer: CreamerType, syrup: SyrupType) {
      const index = this.beverages.findIndex(bev => bev.id === (base.id + "-" + creamer.id + "-" + syrup.id + "-" + name));
      if(index === -1) {
        var currentBev = {
          id: base.id + "-" + creamer.id + "-" + syrup.id + "-" + name,
          name: name,
          temp: temp,
          base: base,
          syrup: syrup,
          creamer: creamer,
        };
        this.beverages.push(currentBev);}
      else {currentBev = this.beverages[index]}
    },
    showBeverage(b: BeverageType) {
      this.currentBase = b.base;
      this.currentCreamer = b.creamer;
      this.currentSyrup = b.syrup;
      this.currentTemp = b.temp;
      this.currentBev = b;
      this.currentName = b.name;
    },
  },
  persist: true,
});
