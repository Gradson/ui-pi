export class ProductController {
  constructor ($timeout, productService, toastr) {
    'ngInject';

    this.product = {};
    this.toastr = toastr;
    this.list = [];
    this.wanted = true;

    this.service = productService;

    this.load();
  }

  load() {
    this.service.getAll().then((data) => {
      this.list = data.content;
    });
  }

  clear() {
    this.product = {};
  }

  save() {
    this.service.save(this.product).then((data) => {
      this.list.push(data);
      this.load();
      this.clear();
    });
  }
}
