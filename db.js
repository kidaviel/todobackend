const db = [
  { id: 1, toDo: "make apple juice", date: new Date() },
  { id: 2, toDo: "make orange juice", date: new Date() },
];

async function addToDo(toDo) {
  db.push({
    id: db.length + 1,
    toDo: toDo,
    date: new Date(),
  });
}

module.exports = { db, addToDo };
