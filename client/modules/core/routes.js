import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import Home from './components/home.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/logout', {
    name: 'logout',
    action() {
      Meteor.logout();
      FlowRouter.go('/login');
    }
  });


}