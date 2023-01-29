let cities = [
    {name:'Barcelona', country:'Spain', visited: false},
    {name:'London', country:'England', visited: false},
    {name:'New York', country:'USA', visited: true},
]

for (let i = 0; i < cities.length; i++){

    if (cities[i].visited ===false)
    console.log (cities[i].name)
}