const Sequelize = require('sequelize');
const sequelize = require('../Models');

const notifications = require('./models/user_notifications')(
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
const CircularGroups = require('./models/circular_group_id')(
  sequelize,
  Sequelize
);
const IndividualsCircular = require('./models/circular_individuals');
const Courses = require('./models/courses')(sequelize, Sequelize);
const CircularArchive = require('./models/info_circular_archieve_details')(
  sequelize,
  Sequelize
);
const CircularDetails = require('./models/info_circular_details')(
  sequelize,
  Sequelize
);
const Groups = require('./models/info_group_global')(sequelize, Sequelize);
const NoticeDetail = require('./models/info_notice_details')(
  sequelize,
  Sequelize
);
const NoticeArchive = require('./models/info_notice_archieve_details')(
  sequelize,
  Sequelize
);
const AuthTypes = require('./models/user_auth_types')(sequelize, Sequelize);
const UserDetails = require('./models/user_details')(sequelize, Sequelize);

const EmployeeNotices = require('./models/notice_gen_emp'){sequelize, Sequelize};
const StudentNotices = require('./models/notice_general')(sequelize, Sequelize);
const NoticeGroups = require('./models/notice_group')(sequelize, Sequelize);
const NoticeGroupMap = require('./models/notice_group_global_id')(sequelize, Sequelize);
