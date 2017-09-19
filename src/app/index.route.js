export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/products', {
      templateUrl: 'app/products/product.html',
      controller: 'ProductController',
      controllerAs: 'product'
    })
    .when('/invoices', {
      templateUrl: 'app/invoices/invoice.html',
      controller: 'InvoiceController',
      controllerAs: 'invoice'
    })
    .otherwise({
      redirectTo: '/'
    });
}
