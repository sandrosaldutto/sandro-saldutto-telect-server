exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("username").notNullable();
      table.string("name").notNullable();
      table.string("password").notNullable();
    }).createTable("mylist", (table) => {
        table.increments("id").primary();
        table.integer("showId").notNullable();
        table.integer("users_id").unsigned().notNullable().references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE")
      });
  };
  
  exports.down = function (knex) {
      return knex.schema.dropTable("mylist").dropTable("users");
  };
  