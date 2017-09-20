export class InvoiceController {
  constructor ($timeout, invoiceService, toastr, productService) {
    'ngInject';

    this.invoice = {};

    this.list = undefined;
    this.products = [];
    this.items = undefined;
    this.toastr = toastr;

    this.service = invoiceService;
    this.productService = productService;

    this.load();
  }

  load() {
    this.productService.getAll().then((data) => {
      this.products = data.content;
    });
    this.service.getAll().then((data) => {
      this.list = data.content;
    });
  }

  search(productName) {
    this.service.search(productName).then((data) => {
      this.list = data.content;
    })
  }

  save() {
    let items = [];
    for(var i=0; i < this.items.length; i++) {
      let item = this.items[i];
      let product = {};
      product.id = item.id;
      product.name = item.name;
      product.description = item.description;

      item.product = product;
      item.id = null;

      items.push(item);
    }

    this.invoice.items = items;

    this.service.save(this.invoice).then((data) => {
      this.list.push(data);
      this.clear();
    });
  }

  clear() {
    this.invoice={};
    this.items = undefined;
  }
}
