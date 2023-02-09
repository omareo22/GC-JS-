let cities = [
    {name:'Barcelona', country:'Spain', visited: false},
    {name:'London', country:'England', visited: false},
    {name:'New York', country:'USA', visited: true},
]

const notVisited = cities.filter(city => city.visited === false);
console.log(notVisited)