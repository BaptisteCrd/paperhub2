import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../item/item';

export class StorageBox implements Item {
    public readonly isSizable : boolean;
    public readonly title: string;
    public readonly icon: Icon

    constructor() {
        this.isSizable = false;
        this.title = "Bloc caisse";
        this.icon = icon(faBox);
    }

    drawItem() {
        
    }
}