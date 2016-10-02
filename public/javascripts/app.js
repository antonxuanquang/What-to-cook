'use strict';

angular.module('whatToCookApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        // route for the home page
        .state('app', {
            url: '',
            views: {
                'header': {
                    templateUrl: '../views/header.html'
                },
                'content': {
                    templateUrl : '../views/menu.html',
                    controller  : 'IndexController'
                },
                'footer': {
                    templateUrl: '../views/footer.html'
                }
            },
        })
        .state('upload', {
            url: '/upload',
            views: {
                'header': {
                    templateUrl: '../views/header.html'
                },
                'content': {
                    templateUrl: '../views/upload.html'
                },
                'footer': {
                    templateUrl: '../views/footer.html'
                }
            }
        });
        // })
        // // route for aboutus page
        // .state('app.aboutus', {
        //     url: 'aboutus',
        //     views: {
        //         'content@' : {
        //             templateUrl : 'views/aboutus.html',
        //             controller  : 'AboutController'
        //         }
        //     }
        // })
        // .state('app.contactus', {
        //     url: 'contactus',
        //     views: {
        //         'content@' : {
        //             templateUrl: 'views/contactus.html',
        //             controller: 'ContactController'
        //         }
        //     }
        // })
        // .state('app.menu', {
        //     url: 'menu',
        //     views: {
        //         'content@' : {
        //             templateUrl: 'views/menu.html',
        //             controller: 'MenuController'
        //         }
        //     }
        // })
        // // route for the dishdetail page
        // .state('app.dishdetails', {
        //     url: 'menu/:id',
        //     views: {
        //         'content@' : {
        //             templateUrl: 'views/dishdetail.html',
        //             controller: 'DishDetailController'
        //         }
        //     }

        $urlRouterProvider.otherwise('/');
});
