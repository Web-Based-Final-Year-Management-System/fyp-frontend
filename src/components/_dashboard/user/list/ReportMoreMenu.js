import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { paramCase } from 'change-case';
import { useRef, useState } from 'react';
import editFill from '@iconify/icons-eva/edit-fill';
import { Link as RouterLink } from 'react-router-dom';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
// material
import { Assignment } from '@mui/icons-material';
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';

// ----------------------------------------------------------------------

ReportMoreMenu.propTypes = {
  onDelete: PropTypes.func,
  userName: PropTypes.object
};

export default function ReportMoreMenu({ onDelete, userName }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          component={RouterLink}
          to={`${PATH_DASHBOARD.user.root}/${paramCase(String(userName.id))}/submitted-reports`}
          sx={{ color: 'text.secondary' }}
        >
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Submitted Reports" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem
          component={RouterLink}
          to={`${PATH_DASHBOARD.user.root}/${paramCase(String(userName.id))}/reportedit`}
          sx={{ color: 'text.secondary' }}
        >
          <ListItemIcon>
            <Icon icon={editFill} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
