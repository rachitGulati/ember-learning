import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ItemController extends Controller {
  @tracked color = this.model.colors[0].color;
  @tracked isZoomed = false;

  get productImage() {
    return this.model.colors.find(({ color }) => color === this.color).image;
  }

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }

  @action
  toggleZoomed() {
    this.isZoomed = !this.isZoomed;
  }
}
