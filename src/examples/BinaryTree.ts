interface BNodeInterface {
    left: BNodeInterface;
    right: BNodeInterface;
}

export default class BNode implements BNodeInterface {
    value: number = null;
    left: BNode = null;
    right: BNode = null;
    
    constructor(value: number) {
        this.value = value;
    }
    
    getValue() {
        return this.value
    }
    
    putChildInPreOrder(value: number) {
        
        let childRef: string;

        if(value === this.getValue()) {
            return;
        }         
        if(value < this.getValue()) {
            childRef = 'left';
        }
        if(value > this.getValue()) {
            childRef = 'right';
        }
        
        const keyTyped = childRef as keyof BNodeInterface;
        
        if(!this[keyTyped]) {
            this[keyTyped] = new BNode(value);
        } else {
            this[keyTyped].putChildInPreOrder(value);
        }

    }
    
    private find(value: number, results: Array<Number>): Array<Number> {
        
        let childRef: string;

        if(value === this.getValue()) {
            results.push(value);

            return results;
        }         
        if(value < this.getValue()) {
            childRef = 'left';
        }
        if(value > this.getValue()) {
            childRef = 'right';
        }
        
        const keyTyped = childRef as keyof BNodeInterface;
        
        if(!this[keyTyped]) {
            return null; // Hit a leaf, find value not found
        } else {
            results.push(this.getValue());
            return this[keyTyped].find(value, results); // find value in child tree.
        }

    }
    
    findValuePath(value: number) {
        const results: Array<Number> = [];
        return this.find(value, results);
    }

}

export { BNode, BNodeInterface };