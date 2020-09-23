/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'info_notice_modification_details',
    {
      notice_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
      },
      notice_no: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'null',
      },
      notice_cat: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'null',
      },
      notice_sub: {
        type: DataTypes.STRING(400),
        allowNull: false,
        comment: 'null',
      },
      notice_path: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: 'null',
      },
      issued_by: {
        type: DataTypes.STRING(50),
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
      last_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: 'null',
      },
      modification_value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
      },
    },
    {
      tableName: 'info_notice_modification_details',
      timestamps: false,
    }
  );
};
