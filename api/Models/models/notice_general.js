/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('notice_general', {
		'notice_id': {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'notice_cat': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		},
		'dept_id': {
			type: DataTypes.STRING(11),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'course_id': {
			type: DataTypes.STRING(200),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'Semester': {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'notice_general',
		timestamps: false
	});
};
