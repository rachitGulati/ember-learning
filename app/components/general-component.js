import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class GeneralComponentComponent extends Component {
  @service('shopping-cart') cart;

  get itemCount() {
    return this.cart.itemList.reduce((total, item) => (total += item.count), 0);
  }
}
