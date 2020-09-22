/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('notice_gen_emp', {
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
		'emp_auth_id': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'notice_gen_emp',
		timestamps: false
	});
};
