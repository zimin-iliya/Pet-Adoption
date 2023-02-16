
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments('id').primary();
    table.string('username').notNull();
    table.string('email').notNull();
    table.string('password').notNull();
    table.string('repassword').notNull();
    table.boolean('isAdmin').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
