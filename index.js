const dbConnection= require('./mongodb')


// dbConnection().then((res) => {
//     res.find({}).toArray().then((data) => {

//         console.log(data)
//     })
// })

const main= async ()=>{

    let data= await dbConnection();
    data= await data.find().toArray();
    console.log(data)
}
// main();


const insert= async ()=>{

    let data= await dbConnection();

    data= data.insertMany([{name:"Seema", class:"HouseWife"},{name: "Rahul", class:"11th"}])
    data= await data.find().toArray();

    console.log(data)



}
//insert();

const update= async ()=>{

    let data= await dbConnection();
    data=  await data.updateOne({name:"Rahul"},{$set:{name:"Rohit",class: "BA"}})

    console.log(data)

}

update();