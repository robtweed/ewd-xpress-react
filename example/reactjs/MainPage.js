/*

 ------------------------------------------------------------------------------------
 | Template MainPage module for ewd-xpress React.js applications                    |
 |                                                                                  |
 | Copyright (c) 2016 M/Gateway Developments Ltd,                                   |
 | Reigate, Surrey UK.                                                              |
 | All rights reserved.                                                             |
 |                                                                                  |
 | http://www.mgateway.com                                                          |
 | Email: rtweed@mgateway.com                                                       |
 |                                                                                  |
 |                                                                                  |
 | Licensed under the Apache License, Version 2.0 (the "License");                  |
 | you may not use this file except in compliance with the License.                 |
 | You may obtain a copy of the License at                                          |
 |                                                                                  |
 |     http://www.apache.org/licenses/LICENSE-2.0                                   |
 |                                                                                  |
 | Unless required by applicable law or agreed to in writing, software              |
 | distributed under the License is distributed on an "AS IS" BASIS,                |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.         |
 | See the License for the specific language governing permissions and              |
 |  limitations under the License.                                                  |
 ------------------------------------------------------------------------------------

  6 May 2016

*/

"use strict"

var React = require('react');
var ReactToastr = require('react-toastr');
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

// Now your application's next-level modules...

var Banner = require('./Banner');
var Content = require('./Content');

// ============

var controller;
var title = 'Test App';

var MainPage = React.createClass({

  getInitialState: function() {
    return {
      status: 'initial'
    }
  },

  componentWillMount: function() {
    // load and augment the controller for this module...
    controller = require('./controller-MainPage')(this.props.controller, this);
  },

  componentDidMount: function() {
    this.props.controller.toastr('warning', 'started!');
  },

  render: function() {

     console.log('rendering MainPage');

     // comment this next line out if you don't want to create a representation of your app's module tree
     //  and also remove the componentPath = {componentPath} props from the sub-modules....

     var componentPath = controller.updateComponentPath(this);

     return (
      <div>
        <Banner
          title = {title}
          controller = {controller}
          componentPath = {componentPath}
        />

        <ToastContainer 
          ref="toastContainer"
          toastMessageFactory={ToastMessageFactory}
          className="toast-top-right"
          newestOnTop={true}
          autoDismiss={true}
          target="body"
        />

        <Content
          controller = {controller}
          componentPath = {componentPath}
        />

      </div>

    );
  }
});

module.exports = MainPage;
