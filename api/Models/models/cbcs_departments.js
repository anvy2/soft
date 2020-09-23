/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'cbcs_departments',
    {
      id: {
        type: DataTypes.STRING(11),
        allowNull: false,
        comment: 'null',
        primaryKey: true,
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
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'null',
      },
      wef: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: 'null',
      },
      wet: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: 'null',
      },
    },
    {
      tableName: 'cbcs_departments',
      timestamps: false,
    }
  );
};
