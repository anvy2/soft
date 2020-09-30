/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'info_circular_archieve_details',
    {
      circular_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
      },
      circular_no: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'null',
      },
      circular_cat: {
        type: DataTypes.STRING(40),
        allowNull: false,
        comment: 'null',
      },
      circular_sub: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: 'null',
      },
      circular_path: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: 'null',
      },
      issued_by: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'null',
      },
      auth_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: 'null',
      },
      posted_on: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'null',
      },
      valid_upto: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: 'null',
      },
      modification_value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'null',
      },
    },
    {
      tableName: 'info_circular_archieve_details',
      timestamps: false,
    }
  );
};
