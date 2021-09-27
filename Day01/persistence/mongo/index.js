(async () => {
    const { MongoClient } = require('mongodb')

    const client = new MongoClient(
        'mongodb://localHost:27017',
        {
            useNewUrlParser: true
        }
    )

    console.log(client)
    let ret = await client.connect()
    const db = client.db('test')

    const fruits = db.collection('fruits')
    // 添加文档

    ret = await fruits.insertOne({
        name: '瓜瓜',
        price: 3.5
    })

    console.log('insert: ', ret)
})()