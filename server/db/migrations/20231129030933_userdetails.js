/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("userdetails", (table) => {
        table.increments("id").primary();
        table.string("firstname").notNullable();
        table.string("lastname").nullable();
        table.date("dateofbirth").notNullable();
        table.string("email").notNullable();
        table.bigint("phno").notNullable();
        table.string("address").notNullable();
        table.string("city").notNullable();
        table.string("state").notNullable();
        table.bigint("zipcode").notNullable();
        table.bigint("aadharno").notNullable().unique();
        table.bigint("pancardno").notNullable().unique();
        table.timestamps(true, true);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("userdetails");
};
