/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'circular_gen_emp',
    {
      circular_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        comment: 'null',
      },
      circular_cat: {
        type: DataTypes.STRING(40),
        allowNull: false,
        comment: 'null',
      },
      dept_id: {
        type: DataTypes.STRING(11),
        allowNull: false,
        comment: 'null',
      },
      emp_auth_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: 'null',
      },
    },
    {
      tableName: 'circular_gen_emp',
      timestamps: false,
    }
  );
};
