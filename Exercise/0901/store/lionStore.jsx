import { makeAutoObservable } from "mobx";

class LionStore {
  count = 0;
  constructor() { makeAutoObservable(this); }
  increase() { this.count += 1; }
  decrease() { this.count -= 1; }
}

const ts2 = new LionStore();

export default ts2;