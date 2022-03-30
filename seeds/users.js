const users = [
  {
    id: 1,
    username: "sandro.saldutto",
    name: "Sandro Saldutto",
    password: "abc123",
  }
];

exports.seed = function(knex) {
  return knex("users")
  .del()
  .then(() => {
    return knex("users")
      .insert(users);
  })
};
