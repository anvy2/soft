const Sequelize = require('sequelize');
const sequelize = require('../Models');

const Notifications = require('./models/user_notifications')(
  sequelize,
  Sequelize
);
const Departments = require('./models/cbcs_departments')(sequelize, Sequelize);
const Branches = require('./models/cbcs_branches')(sequelize, Sequelize);
const EmployeeCirculars = require('./models/circular_gen_emp')(
  sequelize,
  Sequelize
);
const StudentsCircular = require('./models/circular_general')(
  sequelize,
  Sequelize
);

const IndividualCircular = require('./models/circular_individuals')(
  sequelize,
  Sequelize
);
const Courses = require('./models/courses')(sequelize, Sequelize);
const CircularArchive = require('./models/info_circular_archieve_details')(
  sequelize,
  Sequelize
);

const CircularGroupMap = require('./models/circular_group_id')(
  sequelize,
  Sequelize
);
const CircularDetails = require('./models/info_circular_details')(
  sequelize,
  Sequelize
);
const UserGroupMap = require('./models/group_user_id')(sequelize, Sequelize);
const NoticeDetails = require('./models/info_notice_details')(
  sequelize,
  Sequelize
);
const NoticeArchive = require('./models/info_notice_archieve_details')(
  sequelize,
  Sequelize
);
const AuthTypes = require('./models/user_auth_types')(sequelize, Sequelize);
const UserDetails = require('./models/user_details')(sequelize, Sequelize);

const EmployeeNotices = require('./models/notice_gen_emp')(
  sequelize,
  Sequelize
);
const StudentNotices = require('./models/notice_general')(sequelize, Sequelize);
const GroupInfo = require('./models/group_info')(sequelize, Sequelize);
const NoticeGroupMap = require('./models/notice_groups_id')(
  sequelize,
  Sequelize
);
const IndividualNotice = require('./models/notice_individuals')(
  sequelize,
  Sequelize
);
const User = require('./models/users')(sequelize, Sequelize);
const Permissions = require('./models/auth_menu_detail')(sequelize, Sequelize);

module.exports = {
  Notifications,
  IndividualNotice,
  IndividualCircular,
  Departments,
  Branches,
  EmployeeCirculars,
  EmployeeNotices,
  StudentsCircular,
  StudentNotices,
  CircularDetails,
  CircularArchive,
  Courses,
  UserGroupMap,
  GroupInfo,
  NoticeDetails,
  NoticeArchive,
  User,
  NoticeGroupMap,
  AuthTypes,
  UserDetails,
  Permissions,
  CircularGroupMap,
};
