/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const FinalList = [];
  const n = transactions.length;  
  let j,i;

  for(i = 0; i < n; i++){
    let m = FinalList.length;
    for(j = 0; j < m; j++){
      if(transactions[i].category == FinalList[j].category){
        FinalList[j].totalSpent = FinalList[j].totalSpent + transactions[i].price;
        break; 
      }
    }
    if(j == m){
    var myObject = {
      category: "",
      totalSpent: 0
    };

    myObject.category = transactions[i].category;
    myObject.totalSpent = transactions[i].price;
    FinalList.push(myObject);
  }

  }

  return FinalList;
}

module.exports = calculateTotalSpentByCategory;
