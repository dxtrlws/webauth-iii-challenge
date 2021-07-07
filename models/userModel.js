const db = require('../data/dbConfig')

module.exports = {
    findById,
    add,
    find,
    findBy
}


function findById(id) {
    return db('users')
    .where({id})
    .first()
}

async function add(user) {
    const [id] = await db('users').insert(user);
    return findById(id)
}

function find() {
    return db('users')
}

function findBy(user) {
    return db('users').where(user).first()
}