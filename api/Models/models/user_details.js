/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_details', {
		'id': {
			type: DataTypes.STRING(11),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'salutation': {
			type: DataTypes.STRING(5),
			allowNull: true,
			comment: "null"
		},
		'first_name': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'middle_name': {
			type: DataTypes.STRING(150),
			allowNull: true,
			comment: "null"
		},
		'last_name': {
			type: DataTypes.STRING(150),
			allowNull: true,
			comment: "null"
		},
		'sex': {
			type: DataTypes.STRING(1),
			allowNull: false,
			comment: "null"
		},
		'category': {
			type: DataTypes.STRING(25),
			allowNull: false,
			comment: "null"
		},
		'allocated_category': {
			type: DataTypes.STRING(25),
			allowNull: true,
			comment: "null"
		},
		'dob': {
			type: DataTypes.DATEONLY,
			allowNull: false,
			comment: "null"
		},
		'email': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'photopath': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'marital_status': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		},
		'physically_challenged': {
			type: DataTypes.STRING(5),
			allowNull: false,
			comment: "null"
		},
		'dept_id': {
			type: DataTypes.STRING(11),
			allowNull: false,
			comment: "null",
			references: {
				model: 'departments',
				key: 'id'
			}
		},
		'updated': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'user_details',
		timestamps: false
	});
};
