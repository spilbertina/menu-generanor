// document.getElementById("app").innerHTML = `
// `;

class Good {
  constructor (name, price){
    this.name = name;
    this.price = price;
  }
}

class CheckRow {
  good = 0;
  qty = 0;
  constructor(good, qty) {
    this.good = good;
    this.qty = qty;
  }

  get cost() {
    // const cost = this.good.price * this.qty;
    // return cost;
    return this.good.price * this.qty;
  }
}

class Check {
  constructor(number, nameCompany) {
    this.number = number;
    this.nameCompany = nameCompany;
    //Массив строк чека (class CheckRow)//
    // this.rows = new [];
  }

  get total() {
    let sum = 0;
    for(let i = 0; i <= this.rows.length -1; i++) {
      sum = sum + this.rows[i].cost;
    }
    return sum;
  }
}

let check = new Check(44, 'Apple');
console.log(check);