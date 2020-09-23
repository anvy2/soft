/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.STRING(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
      },
      password: {
        type: DataTypes.STRING(150),
        allowNull: false,
        comment: 'null',
      },
      auth_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: 'null',
        references: {
          model: 'auth_types',
          key: 'id',
        },
      },
      created_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'null',
      },
      status: {
        type: DataTypes.ENUM('A', 'D', 'P', 'L'),
        allowNull: false,
        defaultValue: 'A',
        comment: 'null',
      },
      remark: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'emp',
        comment: 'null',
      },
    },
    {
      tableName: 'users',
      timestamps: false,
    }
  );
};
