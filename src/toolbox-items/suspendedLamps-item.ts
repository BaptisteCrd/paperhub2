import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import * as paper from 'paper';
import { ColorHelper } from '../helpers';
import { ToolboxItem } from '../toolbox-item/toolbox-item';

export class SuspendedLampsItem extends ToolboxItem {
    public readonly title: string;
    public readonly icon: Icon;
    public readonly name: string;

    constructor() {
        super("Lampes suspendues", "suspendedLamps", icon(faBoltLightning));
    }

    public drawItem(): paper.Path {
      var rectangle = new paper.Rectangle(new paper.Point(0, 0), new paper.Point(100, 15));
      var radius = new paper.Size(20, 20);
      var path = new paper.Path.Rectangle(rectangle, radius);
      path.fillColor = new paper.Color(ColorHelper.suspendedLampsColor);
      path.opacity = .7;

      return path;
    }
}