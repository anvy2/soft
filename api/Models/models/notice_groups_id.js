/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'notice_group_id',
    {
      notice_id: {
        type: DataTypes.UUID,
        allowNull: false,
        comment: 'null',
      },
      group_id: {
        type: DataTypes.STRING(65),
        allowNull: false,
        comment: 'null',
      },
      created_by: {
        type: DataTypes.STRING(11),
        allowNull: false,
        comment: 'null',
      },
    },
    {
      tableName: 'notice_group_id',
      timestamps: false,
    }
  );
};
