import React, { useState } from 'react';
import { createStyles, Navbar, Group,  getStylesRef, rem } from '@mantine/core';
import {  
  IconLogout,
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[6],
  },

  version: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
      0.1
    ),
    color: theme.white,
    fontWeight: 700,
  },

  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
      0.1
    )}`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background ,
      0.1
    )}`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      ),
    },
  },

  
  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.colors.red[6],
      [`& .${getStylesRef('icon')}`]: {
        opacity: 0.9,
      },
    },
  },
}));

const data = [
  { link: '', label: 'Mon Profil'},
  { link: '', label: 'Mes Machines' },
  { link: '', label: 'Etats des Machines'},
  { link: '', label: 'Mes Chariots Endoscopies' },
  { link: '', label: 'Mes Réclamations' },
  { link: '', label: 'Admin Réponse' },
  
];
const ClientDashboard = () => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');
  
  
 
  
  const links = data.map((item) => (
  <NavLink
  className={cx(classes.link, { [classes.linkActive]: item.label === active })}
  to={item.link}
  key={item.label}
  onClick={(e) => {
  e.preventDefault();
  setActive(item.label);
  }}
  >
  {item.label}
  </NavLink>
  ));
  
  return (
  <Navbar height={720} width={{ sm: 300 }} p="md" className={classes.navbar}>
  <Navbar.Section grow>
  <Group className={classes.header} position="apart">
  </Group>
  {links}
  </Navbar.Section>
  <Navbar.Section className={classes.footer}>
   

    <a href="#" className={classes.link} >
      <IconLogout className={classes.linkIcon} stroke={1.5} />
      <span>Logout</span>
    </a>
  </Navbar.Section>
</Navbar>

);
};

export default ClientDashboard;