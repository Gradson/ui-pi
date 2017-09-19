export class InvoiceController {
  constructor ($timeout, invoiceService, toastr, productService) {
    'ngInject';

    this.invoice = {
      'number' : '',
      'itens' : []
    };

    this.list = [];
    this.toastr = toastr;

    this.service = invoiceService;
    this.productService = productService;

    this.load();
  }

  load() {
    this.productService.getAll((data) => {
      this.invoice.itens = data.content;
    });
    this.service.getAll().then((data) => {
      this.list = data.content;
    });
  }

  save() {
    this.service.save(this.invoice).then((data) => {
      this.list.push(data);
      this.clear();
    });
  }

  clear() {
    this.invoice.number = '';
    this.invoice.itens = [];
  }
}
