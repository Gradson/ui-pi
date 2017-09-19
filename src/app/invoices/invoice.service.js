export class InvoiceService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.apiHost = 'http://localhost:8080/atech/apiHost/invoices';
  }

  getAll() {
    return this.$http.get(this.apiHost)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for Invoice.\n' + angular.toJson(error.data, true));
      });
  }

  save(invoice) {
    return this.$http.post(this.apiHost, invoice).then((response) => {
      return response.data;
    }).catch((error) => {
      this.$log.error('XHR Failed for Invoice.\n' + angular.toJson(error.data, true));
    });
  }
}
