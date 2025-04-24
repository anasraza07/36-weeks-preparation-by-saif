/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const resultArr = [];
  const categories = [];

  transactions.forEach(transaction => {
    const category = transaction.category;
    
    if (!categories.includes(category)) {
      categories.push(category)
      resultArr.push({
        category,
        totalSpent: transaction.price
      })

    } else {
      const sameCategoryObj = resultArr.find(eachObj => {
        return eachObj.category == category
      })

      sameCategoryObj.totalSpent += transaction.price;
    }
  })

  return resultArr;

  // 1. transactions pr loop chalao each object milega
  // 2. agr same category waala obj pehle se nhi hai to obj ko array mein push krdo
  // 3. wrna usi obj ke price mein current price add krdo
  // 4. array return krdo

  // return [];
}
console.log(calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
]))
module.exports = calculateTotalSpentByCategory;
