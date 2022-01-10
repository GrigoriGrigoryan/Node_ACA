class MyNode {
public value: any; 
public next:  MyNode;
public prev:  MyNode;

    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    private head: MyNode;
    private tail: MyNode;
    private length:  number;
    constructor () {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }

    public push(data) {
        const node = new MyNode(data);
        if ( !this.count() ) {
            this.tail = node;
            this.head = node;
        } else {
           node.prev = this.tail;
           this.tail = node;
           this.tail.prev.next = this.tail; 
        }

        this.length++;

    }
    public pop() {
        const tail = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return tail;
    }
    public shift() {
        const head = this.head;
        this.head = this.head.next;
        this.length--;
        return head;

    }
    public unshift(...data) {
        
        for (let i =0; i < arguments.length; i++) {
            const node = new MyNode(arguments[i]);
            if ( !this.count() ) {
                this.tail = node;
                this.head = node;
                this.length++;
            } else {
                this.head.prev = node;
                node.next = this.head;
                this.head = node;
                this.length++
            }
            
        }

        return this.length;
    }
    public delete(data): MyNode {
        let current = this.head;
        while (current) {

            if (current.value === data) {
                const value = current
                if (current.next && current.prev) {
                    current.prev.next = current.next
                } 
                if (!current.prev && current.next) {
                    this.shift();
                }
                if (!current.next) {
                    this.pop();
                }
                current = null
                return value;
            }
            current = current.next
        }

    }
    public count(): number {

        return this.length; 
    }
    public print() {
        let current = this.head;
        let output = '';    

        while (current) {
            output = `${output}${current.value} --> `
            current = current.next; 
        }
        
        console.log(output);
    }
}




