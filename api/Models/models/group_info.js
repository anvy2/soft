/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'notice_group',
    {
      group_id: {
        type: DataTypes.STRING(65),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
      },
      created_by: {
        type: DataTypes.STRING(11),
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
      date_of_creation: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: 'null',
      },
    },
    {
      tableName: 'notice_group',
      timestamps: false,
    }
  );
};
