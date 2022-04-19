import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../toolbox_item/item';
import * as paper from 'paper';

export class StorageBox extends Item {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        super("Bloc caisse", "storageBox", icon(faBox));
    }

    public drawItem(): paper.Path {
      var rectangle = new paper.Rectangle(new paper.Point(-120, -37.5), new paper.Point(120, 37.5));
      var path = new paper.Path.Rectangle(rectangle);
      path.fillColor = new paper.Color('yellow');
      path.opacity = .7;

      paper.view.emit('paper_changed', new Event('paper_changed'));

      return path;
    }
}
