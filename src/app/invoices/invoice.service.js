export class InvoiceService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.apiHost = 'http://localhost:8080/atech/api/invoices';
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

  search(productName) {
    return this.$http.get(this.apiHost+"/search", {params:{'productName':productName}}).then((response) => {
      return response.data;
    }).catch((error) => {
      this.$log.error('XHR Failed for Invoice.\n' + angular.toJson(error.data, true));
    })
  }
}
