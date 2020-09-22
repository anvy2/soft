/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_auth_types', {
		'id': {
			type: DataTypes.STRING(20),
			allowNull: false,
			primaryKey: true,
			comment: "null",
			references: {
				model: 'users',
				key: 'id'
			}
		},
		'auth_id': {
			type: DataTypes.STRING(20),
			allowNull: false,
			primaryKey: true,
			comment: "null",
			references: {
				model: 'auth_types',
				key: 'id'
			}
		}
	}, {
		tableName: 'user_auth_types',
		timestamps: false
	});
};
