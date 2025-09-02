import { makeAutoObservable } from "mobx";

class TigerStore {
  count = 0;
  constructor() { makeAutoObservable(this); }
  increase() { this.count += 1; }
  decrease() { this.count -= 1; }
}

const ts1 = new TigerStore();

export default ts1;