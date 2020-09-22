/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cbcs_branches', {
		'id': {
			type: DataTypes.STRING(200),
			allowNull: false,
			comment: "null"
		},
		'name': {
			type: DataTypes.STRING(200),
			allowNull: false,
			comment: "null"
		},
		'status': {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "null"
		},
		'wef': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		},
		'wet': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'cbcs_branches',
		timestamps: false
	});
};
