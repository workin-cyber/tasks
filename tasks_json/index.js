const
    fileName = `${__dirname}/list.json`,
    fs = require('fs')
let counter = 0

if (!fs.existsSync(fileName))
    fs.writeFileSync(fileName, '[]')

// CRUD 
function read() {
    return getListFromJSON()
}

function create(newTask) {
    const list = getListFromJSON()
    newTask.id = counter++
    list.push(newTask)
    saveListToJSON(list)
    return newTask
}

function update(id) {
    const
        list = getListFromJSON(),
        index = list.findIndex(t => t.id == id)

    list[index].done = !list[index].done

    saveListToJSON(list)

    return list[index]
}


function remove(id) {
    const
        list = getListFromJSON(),
        index = list.findIndex(t => t.id == id),
        deleted = list[index]

    list.splice(index, 1)

    saveListToJSON(list)

    return deleted
}


//EXPORT
module.exports = {
    read,
    create,
    update,
    delete: remove
}


//INTERNAL
function getListFromJSON() {
    return require(fileName)
}

function saveListToJSON(list) {
    fs.writeFileSync(fileName, JSON.stringify(list))
}