console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height
      this.weight = weight
    }

    getAge() {
      return `${this.name} is age ${this.age}`
    }

    getHeight() {
      return `${this.name} is ${this.height}cm`
    }

    getWeight() {
      return `${this.name} weighs ${this.weight}kg`
    }
  }
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    number1;
    number2;
    construct(numeber1, number2) {
      this.number1 = number1
      this.number2 = number2
    }

    add(number1, number2) {
      return number1 + number2
    }
    subtract(number1, number2) {
      return number1 - number2
    }
    multiply(number1, number2) {
      return number1 * number2
    }
    divide(number1, number2) {
      return number1 / number2
    }
  }
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname
      this.lastname = lastname
      this.fullname = firstname + ' ' + lastname
      this.email = firstname.toLowerCase() + '.' + lastname.toLowerCase() + '@company.com'
    }
  }
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (this.age < other.age) {
        return `${other.name} is older than me.`
      } else if (this.age > other.age) {
        return `${other.name} is younger than me.`
      } else {
        return `${other.name} is the same age as me.`
      }
    }
  }
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea() { return this.sideA * this.sideB }
    getPerimeter() { return (this.sideA + this.sideB) * 2 }
  }


  class Circle {
    line
    constructor(line) {
      this.line = line
    }

    getArea() {
      return Math.PI * this.line ** 2
    }
    getPerimeter() {
      return 2 * Math.PI * this.line
    }
  }


  // unquote and use run to test these cases:

  /*let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
  */
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    fname;
    lname;
    fullname;
    initials;

    constructor(fname, lname, fullname, initials) {
      this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
      this.fullname = this.fname + ' ' + this.lname;
      this.initials = this.fname[0] + '.' + this.lname[0];
    }
  }
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  function sweetestIcecream(arr) {
    let flavors = {
      Plain: 0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry: 10,
      Chocolate: 10
    }

    return Math.max(...arr.map(sweet => flavors[sweet.flavor] + sweet.numSprinkles))
  }
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  // ... code
}
console.groupEnd();
