/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { AuthController } from './auth/auth.controller';
import { PageController } from './pages/page.controller';
import { EventController } from './pages/event.controller';
import { ProfileController } from './profile/profile.controller';
import { ProfileUploaderController } from './profile/profile-uploader.controller';
import { ApplyController } from './apply/apply.controller';
import { NavbarController } from './components/navbar/navbar.controller';
import { CompareToDirective } from './directives/compareTo.directive.js';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('project1', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr', 'satellizer', 'ngFileUpload'])
  .constant('API_URL', "http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/")
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('AuthController', AuthController)
  .controller('PageController', PageController)
  .controller('EventController', EventController)
  .controller('ProfileController', ProfileController)
  .controller('ApplyController', ApplyController)
  .controller('NavbarController', NavbarController)
  .controller('ProfileUploaderController', ProfileUploaderController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('compareTo', CompareToDirective)
  .filter('renderHTMLCorrectly', function($sce){
    return function(stringToParse)
    {
      return $sce.trustAsHtml(stringToParse);
    }
  });
