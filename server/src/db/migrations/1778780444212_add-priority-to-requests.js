exports.up = pgm => {
    pgm.addColumn('requests', {
        priority: { type: 'integer', notNull: true, default: 0 }
    });
};

exports.down = pgm => {
    pgm.dropColumn('requests', 'priority');
};
