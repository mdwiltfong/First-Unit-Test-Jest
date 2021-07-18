let database={
    person1:{
        name: `Mark`,
        hobby:`Unit Testing`
    }
}


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
})

afterAll(()=>{
  let {person1}=database;
  database=person1;
})
