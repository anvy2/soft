/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('auth_menu_detail', {
		'menu_id': {
			type: DataTypes.STRING(5),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'auth_id': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		},
		'submenu1': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'submenu2': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'submenu3': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'submenu4': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'link': {
			type: DataTypes.STRING(255),
			allowNull: true,
			comment: "null"
		},
		'status': {
			type: DataTypes.STRING(2),
			allowNull: false,
			defaultValue: 'Y',
			comment: "null"
		}
	}, {
		tableName: 'auth_menu_detail',
		timestamps: false
	});
};
