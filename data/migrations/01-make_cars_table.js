// DO YOUR MAGIC
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('VIN').unique().notNullable();
        tbl.string('Make').notNullable();
        tbl.string('Model').notNullable();
        tbl.integer('Mileage').notNullable();
        tbl.string('Title');
        tbl.string('Transmission');
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cars');
}