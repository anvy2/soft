/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('circular_group_id', {
		'circular_id': {
			type: DataTypes.BIGINT,
			allowNull: false,
			comment: "null"
		},
		'group_id': {
			type: DataTypes.STRING(65),
			allowNull: false,
			comment: "null"
		},
		'created_by': {
			type: DataTypes.STRING(11),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'circular_group_id',
		timestamps: false
	});
};
