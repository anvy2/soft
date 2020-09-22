/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('circular_general', {
		'circular_id': {
			type: DataTypes.BIGINT,
			allowNull: false,
			comment: "null"
		},
		'circular_cat': {
			type: DataTypes.STRING(40),
			allowNull: false,
			comment: "null"
		},
		'dept_id': {
			type: DataTypes.STRING(11),
			allowNull: false,
			comment: "null"
		},
		'course_id': {
			type: DataTypes.STRING(200),
			allowNull: false,
			comment: "null"
		},
		'Semester': {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'circular_general',
		timestamps: false
	});
};
