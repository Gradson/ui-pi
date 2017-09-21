export class InvoiceService {
  constructor ($log, $http, toastr) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.toastr = toastr;
    this.apiHost = 'http://localhost:8080/atech/api/invoices';
  }

  getAll() {
    return this.$http.get(this.apiHost)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.toastr.error('Sorry, ' + error.data.error);
        this.$log.error('XHR Failed for Invoice.\n' + angular.toJson(error.data, true));
      });
  }

  save(invoice) {
    return this.$http.post(this.apiHost, invoice).then((response) => {
      this.toastr.success(invoice.number + ' saved!');
      return response.data;
    }).catch((error) => {
      this.toastr.error('Sorry, ' + error.data.error);
      this.$log.error('XHR Failed for Invoice.\n' + angular.toJson(error.data, true));
    });
  }

  search(invoiceParams) {
    return this.$http.get(this.apiHost+"/search", {params:{
                                                      'productName': invoiceParams.productName,
                                                      'issuer': invoiceParams.issuer
                                                    }}).then((response) => {
      return response.data;
    }).catch((error) => {
      this.toastr.error('Sorry, ' + error.data.error);
      this.$log.error('XHR Failed for Invoice.\n' + angular.toJson(error.data, true));
    })
  }
}
