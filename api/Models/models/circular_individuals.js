/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('circular_individuals', {
		'circular_id': {
			type: DataTypes.BIGINT,
			allowNull: false,
			comment: "null"
		},
		'user_id': {
			type: DataTypes.STRING(11),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'circular_individuals',
		timestamps: false
	});
};
