exports.up = (pgm) => {
  pgm.createTable("continent", {
    continent_id: "id",
    name: {
      type: "VARCHAR(32)",
      notNull: true
    },
    iso_code: {
      type: "VARCHAR(2)",
      notNull: true
    }
  });
  pgm.createIndex("continent", ["name"], { unique: true });
  pgm.createIndex("continent", ["iso_code"], { unique: true });
};

exports.down = (pgm) => {
  pgm.dropIndex("continent", ["name"], { unique: true });
  pgm.dropIndex("continent", ["iso_code"], { unique: true });
  pgm.dropTable("contient");
};
