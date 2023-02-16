
exports.up = function(knex) {
  return knex.schema.createTable("pets", (table) => {
    table.increments("id").primary();
    table.string("userId");
    table.string("AdoptedBy");
    table.string("PetType").notNull();
    table.string("PetName").notNull();
    table.string("IsAdopted");
    table.float("Height");
    table.integer("Weight");
    table.string("Color");
    table.text("Bio");
    table.text("Hypoallergenic");
    table.string("dietrest");
    table.string("Breed");
    table.string('imageUrl')
    table.timestamp("created_at").defaultTo(knex.fn.now());
})
};
exports.down = function(knex) {
    return knex.schema.dropTable("pets");
  };
