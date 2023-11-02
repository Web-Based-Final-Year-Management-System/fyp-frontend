import {
  GroupAdd,
  Groups,
  Assignment,
  AddTask,
  Analytics,
  MenuBook,
  UploadFile,
  Home,
  PersonSearch,
  Add,
  PreviewRounded,
  PanTool,
  ManageAccounts
} from '@mui/icons-material';

// routes
import useAuth from '../../hooks/useAuth';
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------
let user1;
function Testing() {
  user1 = useAuth();
  return <div />;
}
const getIcon = (name) => (
  <>
    <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
  </>
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),

  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard')
};
const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------

  {
    subheader: 'general',
    roleQ: ['Student', 'Supervisor', 'Super Admin', 'Coordinator'],
    items: [
      {
        title: 'Home Page',
        path: PATH_DASHBOARD.general.appPage,
        roleP: ['Student', 'Supervisor', 'Super Admin', 'Coordinator'],
        icon: <Home color="primary" />
      },
      {
        title: 'Announcements',
        path: PATH_DASHBOARD.app.announcements,
        roleP: ['Coordinator', 'Super Admin'],
        icon: <MenuBook color="primary" />
      },
      {
        title: 'Reports Management',
        path: PATH_DASHBOARD.general.reports,
        roleP: ['Coordinator', 'Super Admin'],
        icon: <Assignment color="primary" />
      },

      {
        title: 'Group Management',
        path: PATH_DASHBOARD.general.viewGroups,
        roleP: ['Coordinator', 'Super Admin'],
        icon: <Groups color="primary" />
      },
      {
        title: 'Groups Under Supervision',
        path: PATH_DASHBOARD.general.groupsUnderSupervision,
        roleP: ['Coordinator', 'Supervisor', 'Super Admin'],
        icon: <Groups color="primary" />
      },

      {
        title: 'Create Group',
        path: PATH_DASHBOARD.general.createGroup,
        roleP: ['Student', 'Super Admin'],
        icon: <GroupAdd color="primary" />
      },
      {
        title: 'Supervisor Specialization',
        path: PATH_DASHBOARD.app.supervisorSpecialization,
        roleP: ['Coordinator', 'Supervisor', 'Super Admin', 'Student'],
        icon: <Assignment color="primary" />
      },
      {
        title: 'View All Attendances',
        path: PATH_DASHBOARD.general.viewAllAttendance,
        roleP: ['Coordinator', 'Super Admin'],
        icon: <PanTool color="primary" />
      },
      {
        title: 'View Attendance',
        path: PATH_DASHBOARD.general.viewStudentAttendance,
        roleP: ['Super Admin', 'Student'],
        icon: <PanTool color="primary" />
      },
      {
        title: 'Submit Reports',
        path: PATH_DASHBOARD.general.submitReports,
        roleP: ['Student'],
        icon: <UploadFile color="primary" />
      },
      {
        title: 'View Announcements',
        path: PATH_DASHBOARD.general.viewAnnouncements,
        roleP: ['Student', 'Supervisor', 'Super Admin'],
        icon: <PreviewRounded color="primary" />
      }
    ]
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    roleQ: ['Coordinator', 'Super Admin'],
    items: [
      {
        title: 'User Management',
        path: PATH_DASHBOARD.user.list,
        roleP: ['Coordinator', 'Super Admin'],
        icon: <ManageAccounts color="primary" />
      },
      {
        title: 'Batch Management',
        path: PATH_DASHBOARD.user.userbatch,
        roleP: ['Coordinator', 'Super Admin'],
        icon: <ManageAccounts color="primary" />
      },
      {
        title: 'Role Management',
        path: PATH_DASHBOARD.user.userRole,
        roleP: ['Super Admin'],
        icon: <ManageAccounts color="primary" />
      }
    ]
  }
];

export default sidebarConfig;
