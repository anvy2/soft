/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_notifications', {
		'user_to': {
			type: DataTypes.STRING(11),
			allowNull: false,
			primaryKey: true,
			comment: "null",
			references: {
				model: 'users',
				key: 'id'
			}
		},
		'user_from': {
			type: DataTypes.STRING(11),
			allowNull: false,
			primaryKey: true,
			comment: "null",
			references: {
				model: 'users',
				key: 'id'
			}
		},
		'send_date': {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'rec_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'auth_id': {
			type: DataTypes.STRING(20),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'module_id': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null",
			references: {
				model: 'modules',
				key: 'id'
			}
		},
		'notice_title': {
			type: DataTypes.STRING(250),
			allowNull: false,
			comment: "null"
		},
		'description': {
			type: DataTypes.STRING(200),
			allowNull: false,
			comment: "null"
		},
		'notice_path': {
			type: DataTypes.STRING(200),
			allowNull: false,
			comment: "null"
		},
		'notice_type': {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: '',
			comment: "null"
		},
		'status': {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '0',
			comment: "null"
		}
	}, {
		tableName: 'user_notifications',
		timestamps: false
	});
};
