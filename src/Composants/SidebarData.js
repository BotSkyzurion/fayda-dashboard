import React from 'react';
import HomeIcon from '@material-ui/icons/Home'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
export const SidebarData = [
  {
    "title":"Principal",
    icon: <HomeIcon/>,
    link:"/principal",
  },
  {
   "title":"Sécurité",
    icon: <VerifiedUserIcon/>,
    link:"/s%C3%A9curit%C3%A9",
  },
  {
   "title":"RolePlay",
    icon: <AccountBalanceIcon/>,
    link:"/roleplay",
  },
  {
   "title":"Utilitaire",
    icon: <AssignmentIcon/>,
    link:"/utilitaire",
  },
  {
   "title":"Commandes",
    icon: <HomeIcon/>,
    link:"/commandes",
  }
]