import "./styles.css";

// document.getElementById("app").innerHTML = `
// `;

 let price = [10, 20, 15, 7, 0.5];

 let items = [9, 5, 5, 2, 300];

 let name = ['mouse', 'cat', 'frog', 'dolfin', 'mouse'];

 let sum = 0;

 for(let i = 0; i < 5; i++) {
  if (name[i] === 'mouse' && items[i] > 10) {
    console.log('!!!!!!!!');
  }
  else {
    const rowResult = price[i]*items[i];
    sum = sum + rowResult;
    console.log(
      name[i] + 
      '\t ' + 
      price[i] + 
      '\t' + 
      items[i] + 
      '\t' + 
      rowResult);
  }
 }

console.log('итого: ' + sum)