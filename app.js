// document.getElementById("app").innerHTML = `
// `;
//  const goods = [
//    {
//      name: 'mouse',
//      price: 0.5,
//      items: 15
//    }, 
//    {
//     name: 'cat',
//     price: 20,
//     items: 10
//    },
//    {
//     name: 'frog',
//     price: 15,
//     items: 7
//    }
//  ];

class good {
  constructor (name, price, items){
    this.name = name;
    this.price = price;
    this.items = items;
  }

  calc() {
    return this.price * this.items;
  }

  print() {
    console.log(
      this.name + 
      '\t ' + 
      this.price + 
      '\t' + 
      this.items + 
      '\t' + 
      this.calc());
  }
}

const cat = new good('cat', 10, 5);
const mouse = new good('mouse', 5, 20);
const dog = new good('dog', 30, 7);
const goods = [cat, mouse, dog];

 let sum = 0;

 for(let i = 0; i <= goods.length -1; i++) {
  if (goods[i].name === 'mouse' && goods[i].items > 10) {
    console.log('!!!!!!!!');
  }
  else {
    const rowResult = goods[i].calc();
    sum = sum + rowResult;
    goods[i].print();
  }
 }

console.log('итого: ' + sum);
console.log(goods);