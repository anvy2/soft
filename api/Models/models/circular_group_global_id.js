/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'circular_group_global_id',
    {
      circular_id: {
        type: DataTypes.UUID,
        allowNull: false,
        comment: 'null',
      },
      group_id: {
        type: DataTypes.STRING(65),
        allowNull: false,
        comment: 'null',
      },
    },
    {
      tableName: 'circular_group_global_id',
      timestamps: false,
    }
  );
};
