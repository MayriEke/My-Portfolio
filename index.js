// Scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.hero, .skills, .projects').forEach(el => {
      observer.observe(el);
    });

    // Scroll to top
    function scrollToTop() {
      window.scrollTo({ top:0, behavior:'smooth' });
    }

    

  // below are some basic JavaScript exercises to practice not part of the portfolio project
    function multiply(x,y) {
      return x*y;
    }

    let answer = multiply(4,5);
    console.log(answer)

    let items = ['shoes', 'bags', 'pants', 'cuflinks'];
    console.log(items[0]);

    items.push('gown', 'shirts', 'sneakers', 'hats', 'food');
    console.log(items);

    items.pop();
    console.log(items);

    let person = ['bags', 'shoes', 'dress'];
    console.log(person[0]);

    person.push('scarf');
    console.log(person);

    person[1] = 'heels';
    console.log(person);

    let personDetails = {
      name: 'Aliana',
      age: 28,
      city: 'Los Angeles'
    }
    
    console.log(personDetails)
    console.log(personDetails.city);
    console.log(personDetails.name);

    personDetails.age = 30;
    console.log(personDetails);

    personDetails.country = 'England'
    console.log(personDetails);

    let car = {
      brand: 'Toyota',
      year: 2020,
      color: 'red'
    }
    console.log(car);
    console.log(car.brand);

    car.color = 'blue';
    console.log(car.color);
    console.log(car);

    car.price = 20000;
    console.log(car.price);
    console.log(car);

    let fruits = ['mango', 'apple', 'banana'];

    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }

    for(let fruit of fruits) {
      console.log(fruit);
    }

    

    let numbers = [10,20, 30];

     for (let a = 0; a < numbers.length; a++) {
      console.log(numbers[a] *2);
     }

     for(let number of numbers) {
      console.log(number *2)
     }
