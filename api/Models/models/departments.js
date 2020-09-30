/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'departments',
    {
      id: {
        type: DataTypes.STRING(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
        comment: 'null',
      },
      type: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'null',
      },
    },
    {
      tableName: 'departments',
      timestamps: false,
    }
  );
};
