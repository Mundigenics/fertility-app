(function() {
  'use strict';

  angular
    .module('theFertilityApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Menstruation1', {
        templateUrl: 'app/views/mensesFlow.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Menstruation2', {
        templateUrl: 'app/views/mensesColour.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Menstruation3', {
        templateUrl: 'app/views/mensesSymptoms.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Visual1', {
        templateUrl: 'app/views/visual1.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Visual2', {
        templateUrl: 'app/views/visual2.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Visual4', {
        templateUrl: 'app/views/visual4.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Visual5', {
        templateUrl: 'app/views/visual5.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Sense', {
        templateUrl: 'app/views/sense.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/EnergyLevel', {
        templateUrl: 'app/views/energyLevel.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/BreastCheck', {
        templateUrl: 'app/views/breastCheck.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/ReminderBearDown', {
        templateUrl: 'app/views/reminderBearDown.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/LifeStyle', {
        templateUrl: 'app/views/lifeStyle.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/altLifeStyle', {
        templateUrl: 'app/views/altLifeStyle.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/GeneralHealth', {
        templateUrl: 'app/views/generalHealth.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Intercourse', {
        templateUrl: 'app/views/intercourse.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/IntercourseDescription', {
        templateUrl: 'app/views/intercourseDescription.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/PersonalDetails', {
        templateUrl: 'app/views/personalDetails.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Intentions', {
        templateUrl: 'app/views/intentions.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/IntentionsStrength', {
        templateUrl: 'app/views/intentionsStrength.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Pregnancy', {
        templateUrl: 'app/views/pregnancy.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/LiveBirth', {
        templateUrl: 'app/views/liveBirth.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Miscarriage', {
        templateUrl: 'app/views/miscarriage.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/EctopicPregnancy', {
        templateUrl: 'app/views/ectopicPregnancy.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Abortion', {
        templateUrl: 'app/views/abortion.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/StillBirth', {
        templateUrl: 'app/views/stillBirth.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/Contraception', {
        templateUrl: 'app/views/contraception.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
