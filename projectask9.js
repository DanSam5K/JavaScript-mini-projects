//creating a factory object
const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
  //creating setter and getter methods
    get appetizers(){
      return this._courses.appetizers;
    },
    get mains(){
      return this._courses.mains
    },
  
    get desserts(){
      return this._courses.desserts
    },
  
    set appetizers(appetizerIn){
       return this._courses.appetizers = appetizerIn;
    },
    
    set mains(mainIn){
      return this._courses.mains = mainIn;
    },
    
    set desserts(dessertIn){
      return this._courses.desserts = dessertIn;
    },
    
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
  
  //add dish to course method
    addDishToCourse (courseName, dishName, dishPrice){
        const dish = {
          name: dishName,
          price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },
  // get random dish from course
    getRandomDishFromCourse(courseName){
      let dishes = this.courses[courseName];
      const randomIndex = Math.floor(Math.random()* dishes.length);
      return dishes[randomIndex];
    },
  //generate random meal
    generateRandomMeal (){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts')
      let totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice}.`;
    }
  };
  //testing after adding amnd genrating meal
  
  menu.addDishToCourse('appetizers', 'Caezer Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Salad', 4.00);
  menu.addDishToCourse('appetizers', 'Augustus Beans', 25);
  
  menu.addDishToCourse('mains', 'rice', 4.25);
  menu.addDishToCourse('mains', 'wheat', 3.55);
  menu.addDishToCourse('mains', 'spatacus',5.33);
  
  menu.addDishToCourse('desserts', 'cupcakes', 4.25);
  menu.addDishToCourse('desserts', 'royal king', 4.0);
  menu.addDishToCourse('desserts', 'donuts', 2.5);
  
  
  let meal = menu.generateRandomMeal();
  
  console.log(meal);