import {
  CheckList,
  FileHourglass,
  FileValid,
  Home,
  Tag,
  Users,
} from '@/assets/icons';
import theme from '@/providers/theme';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const ITEMS = [
  {
    icon: (color?: string) => <Home color={color} />,
    label: 'Home',
    path: '/dashboard',
  },
  {
    icon: (color?: string) => <FileHourglass color={color} />,
    label: 'Activate session',
    path: '/activate-session',
  },
  {
    icon: (color?: string) => <FileValid color={color} />,
    label: 'Finished session',
    path: '/finished-session',
  },
  {
    icon: (color?: string) => <CheckList color={color} />,
    label: 'Assessment',
    path: '/assessment',
  },
  {
    icon: (color?: string) => <Tag color={color} />,
    label: 'Category/Tags',
    path: '/category-tags',
  },
  {
    icon: (color?: string) => <Users color={color} />,
    label: 'User',
    path: '/users',
  },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <List>
      {ITEMS.map((item) => {
        const selected = item.path === pathname;
        return (
          <Link to={item.path}>
            <ListItem
              disablePadding
              className={`rounded-lg my-2 ${selected && 'bg-accentPurple'}`}
            >
              <ListItemButton disableGutters>
                <ListItemIcon className="px-4">
                  {item.icon(selected ? theme.palette.primary.main : undefined)}
                </ListItemIcon>
                <ListItemText
                  className={`${selected ? 'text-primary' : 'text-textLight'}`}
                >
                  {item.label}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default Navbar;
