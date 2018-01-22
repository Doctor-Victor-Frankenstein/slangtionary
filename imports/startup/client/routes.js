import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//import to load these templates
//import '../imports/ui/pages/home.js';
//import '../imports/ui/pages/about.js';
//import '../imports/ui/pages/notFound.js';

FlowRouter.route('/home', {
  name: 'home',
  action() {
    BlazeLayout.render('mainLayout', {
      appHeader: 'appHeaderLayout',
      content: 'home',
      appFooter: 'appFooterLayout'
    });
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    BlazeLayout.render('mainLayout', {
      appHeader: 'appHeaderLayout',
      content: 'about',
      appFooter: 'appFooterLayout'
    });
  }
});

/* FlowRouter.route('/contact', {
  name: 'contact',
  action() {
    this.render('contact')
  }
});

FlowRouter.route('/define', {
  name: 'define',
  action() {
    this.render('define')
  }
});

FlowRouter.route('/submit', {
  name: 'submit',
  action() {
    this.render('submit')
  }
});

FlowRouter.route('/RandomWord', {
  name: 'RandomWord',
  action() {
    this.render('RandomWord')
  }
});

FlowRouter.route('/UsersName', {
  name: 'UsersName',
  action() {
    this.render('UserName')
  }
});

FlowRouter.route('/BrowseByLetter', {
  name: 'BrowseByLetter',
  action() {
    this.render('Browse')
  }
});

FlowRouter.route('/review', {
  name: 'review',
  action() {
    this.render('Review')
  }
}); */

FlowRouter.route('*', {
  action() {
    BlazeLayout.render('notFound');
  }
});
