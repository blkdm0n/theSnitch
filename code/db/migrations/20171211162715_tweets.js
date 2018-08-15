
//added a knex.schema for tweets table
//remember to return a our PROMISE
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tweets', function (table) {
      table.increments();
      table.string('created_at', 100);
      table.string('text', 140);
      table.string('username', 25);
      table.string('user_url', 100);
      table.string('user_avatar', 100);
  });
};

//down lets us roll back our migration if we need to
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tweets');
};
