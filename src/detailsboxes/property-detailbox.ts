import { Detailbox } from '../detailbox/detailbox';
import './property-detailbox.scss';
//import * as paper from 'paper';

export class PropertyDetailbox extends Detailbox {
    private name: HTMLElement;
    private xValue: HTMLElement;
    private yValue: HTMLElement;
    private isSizable: HTMLElement;
    private isRotatable: HTMLElement; 
    private isHanging: HTMLElement;

    public setProperties(path: paper.Path): void {
        this.name.textContent = path.data.title;
        this.xValue.textContent = Math.round(path.position.x).toString();
        this.yValue.textContent = Math.round(path.position.y).toString();

        if(typeof path.data.isSizable !== 'undefined'){
            this.isSizable.textContent = (path.data.isSizable ? "true" : "false");
        }
        if(typeof path.data.isRotatable !== 'undefined'){
            this.isRotatable.textContent = (path.data.isRotatable ? "true" : "false");
        }
        if(typeof path.data.isHanging !== 'undefined'){
            this.isHanging.textContent = (path.data.isHanging ? "true" : "false");
        }
    }

    public setPosition(point: paper.Point): void {
        this.xValue.textContent = Math.round(point.x).toString();
        this.yValue.textContent = Math.round(point.y).toString();
    }

    public createElement(): HTMLElement {
        const element = super.createElement();

        element.style.display = 'none';


        const detailElement = document.createElement('div');
        detailElement.classList.add("detail-window");

        // Section - Nom de l'objet
        const nameElement = document.createElement('div');
        nameElement.classList.add("detail-name")
        this.name = document.createElement('div');
        this.name.textContent = "";
        nameElement.appendChild(this.name);
        
        detailElement.appendChild(nameElement);

        // Section - Position X
        const xValueElement = document.createElement('div');

        const xValueLabelElement = document.createElement('div');
        xValueLabelElement.textContent = "X";
        xValueElement.appendChild(xValueLabelElement);

        this.xValue = document.createElement('div');
        this.xValue.textContent = "";
        xValueElement.appendChild(this.xValue);
        
        detailElement.appendChild(xValueElement);


        // Section - Position Y
        const yValueElement = document.createElement('div');

        const yValueLabelElement = document.createElement('div');
        yValueLabelElement.textContent = "Y";
        yValueElement.appendChild(yValueLabelElement);

        this.yValue = document.createElement('div');
        this.yValue.textContent = "";
        yValueElement.appendChild(this.yValue);
        
        detailElement.appendChild(yValueElement);

        // Section - Taille changable
        const isSizableElement = document.createElement('div');

        const isSizableLabelElement = document.createElement('div');
        isSizableLabelElement.textContent = "Taille modifiable";
        isSizableElement.appendChild(isSizableLabelElement);

        this.isSizable = document.createElement('div');
        this.isSizable.textContent = "";
        isSizableElement.appendChild(this.isSizable);
        
        detailElement.appendChild(isSizableElement);


        // Section - Rotation 
        const isRotatableElement = document.createElement('div');

        const isRotatableLabelElement = document.createElement('div');
        isRotatableLabelElement.textContent = "Rotation";
        isRotatableElement.appendChild(isRotatableLabelElement);

        this.isRotatable = document.createElement('div');
        this.isRotatable.textContent = "";
        isRotatableElement.appendChild(this.isRotatable);
        
        detailElement.appendChild(isRotatableElement);


        // Section - Objet suspendu
        const isSuspendedElement = document.createElement('div');

        const isSuspendedLabelElement = document.createElement('div');
        isSuspendedLabelElement.textContent = "Suspendu";
        isSuspendedElement.appendChild(isSuspendedLabelElement);

        this.isHanging = document.createElement('div');
        this.isHanging.textContent = "";
        isSuspendedElement.appendChild(this.isHanging);
        
        detailElement.appendChild(isSuspendedElement);

        element.appendChild(detailElement);

        return element;
    }
}