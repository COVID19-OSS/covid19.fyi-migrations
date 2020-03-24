exports.up = (pgm) => {
  pgm.createExtension("citext");
};

exports.down = (pgm) => {
  pgm.dropExtension("citext");
};
