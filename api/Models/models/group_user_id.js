/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'info_group_global',
    {
      group_id: {
        type: DataTypes.STRING(65),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
      },
      user_id: {
        type: DataTypes.STRING(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
      },
      timestamp: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: 'null',
      },
    },
    {
      tableName: 'info_group_global',
      timestamps: false,
    }
  );
};
