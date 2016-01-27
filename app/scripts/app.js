'use strict';

/**
 * @ngdoc overview
 * @name fertilityAppApp
 * @description
 * # fertilityAppApp
 *
 * Main module of the application.
 */
angular
  .module('fertilityAppApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/MensesVid', {
        templateUrl: '../views/mensesVid.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/MensesFlow', {
        templateUrl: '../views/mensesFlow.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/MensesColour', {
        templateUrl: '../views/mensesColour.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/MensesSymptoms', {
        templateUrl: '../views/mensesSymptoms.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/VisualVid', {
        templateUrl: '../views/visualVid.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Visual1', {
        templateUrl: '../views/visual1.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Visual2', {
        templateUrl: '../views/visual2.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Visual4', {
        templateUrl: '../views/visual4.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Visual5', {
        templateUrl: '../views/visual5.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Sense', {
        templateUrl: '../views/sense.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/EnergyLevel', {
        templateUrl: '../views/energyLevel.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/BreastCheck', {
        templateUrl: '../views/breastCheck.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/ReminderBearDown', {
        templateUrl: '../views/reminderBearDown.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/LifeStyle', {
        templateUrl: '../views/lifeStyle.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/altLifeStyle', {
        templateUrl: '../views/altLifeStyle.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/GeneralHealth', {
        templateUrl: '../views/generalHealth.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Intercourse', {
        templateUrl: '../views/intercourse.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/IntercourseDescription', {
        templateUrl: '../views/intercourseDescription.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/PersonalDetails', {
        templateUrl: '../views/personalDetails.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/PartnerDetails', {
        templateUrl: '../views/partnerDetails.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Intentions', {
        templateUrl: '../views/intentions.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/IntentionsStrength', {
        templateUrl: '../views/intentionsStrength.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Pregnancy', {
        templateUrl: '../views/pregnancy.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/LiveBirth', {
        templateUrl: '../views/liveBirth.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Miscarriage', {
        templateUrl: '../views/miscarriage.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/EctopicPregnancy', {
        templateUrl: '../views/ectopicPregnancy.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Abortion', {
        templateUrl: '../views/abortion.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/StillBirth', {
        templateUrl: '../views/stillBirth.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Contraception', {
        templateUrl: '../views/contraception.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Infertility', {
        templateUrl: '../views/infertility.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Treatment', {
        templateUrl: '../views/treatment.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/IVFTreatment', {
        templateUrl: '../views/ivfTreatment.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/IVFTreatmentDetails', {
        templateUrl: '../views/ivfTreatmentDetails.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/LetsGo', {
        templateUrl: '../views/letsGo.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
