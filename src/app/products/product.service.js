export class ProductService {
  constructor ($log, $http, toastr) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.toastr = toastr;
    this.apiHost = 'http://localhost:8080/atech/api/products';
  }

  getAll() {
    return this.$http.get(this.apiHost)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.toastr.error('Sorry, ' + error.data.error);
        this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      });
  }

  save(product) {
    return this.$http({
            url: this.apiHost,
            method: "POST",
            data: product,
            headers: {'Content-Type': 'application/json'}
    }).then((response) => {
        this.toastr.success(product.name + ' saved!');
        return response.data;
      })
      .catch((error) => {
        this.toastr.error('Sorry, ' + error.data.error);
        this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      });
  }
}
