/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('courses', {
		'id': {
			type: DataTypes.STRING(200),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'name': {
			type: DataTypes.STRING(200),
			allowNull: false,
			comment: "null"
		},
		'duration': {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'courses',
		timestamps: false
	});
};
