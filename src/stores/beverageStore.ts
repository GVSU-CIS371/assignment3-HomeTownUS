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
  }),
  actions: {
    makeBeverage() {},
    showBeverage() {},
  },
  persist: true,
});
