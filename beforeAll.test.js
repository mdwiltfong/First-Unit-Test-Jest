let database={
    person1:{
        name: `Mark`,
        hobby:`Unit Testing`
    }
}

console.log(database)
beforeAll(()=>{
    database={
        ...database,
        person2:{
            name:`Ruby`,
            hobby:`Sword Fighting`
        },
        person3:{
            name:`Jake`,
            hobby:`TDD`
        }
    }
})

test('Length of object should be higher',()=>{
    expect(Object.keys(database).length).toBeGreaterThan(0);
    console.log(database)
})

afterAll(()=>{
  let {person1}=database;
  database=person1;
  console.log(database)
})

console.log(database)