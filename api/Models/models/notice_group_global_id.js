/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('notice_group_global_id', {
		'notice_id': {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'group_id': {
			type: DataTypes.STRING(65),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		}
	}, {
		tableName: 'notice_group_global_id',
		timestamps: false
	});
};
