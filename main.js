class HashMap{
    constructor(){
        this.loadfactor = .7;
        this.capacity = 16;
        this.table = new Array(this.capacity);
        this.size = 0;
    }

    hash(key){
        let hashCode = 0;

        const primenumber = 31;
        for(let i=0; i < key.length; i++){
            hashCode = (primenumber * hashCode + key.charCodeAt(i));
        }

        return hashCode % this.capacity;
    }


    set(key, value){
        const index = this.hash(key);

        if(!this.table[index]){
            this.table[index] = [];
        }

        for(let i=0; i < this.table[index].length; i++){
            if(this.table[index][i][0] === key){
                this.table[index][i][1] = value;
                return;
            }
        }

        this.table[index].push([key, value]);
        this.size++;

        if(this.size / this.capacity > this.loadfactor){
            this.resize();
        }
    }

    get(key){
        const index = this.hash(key);

        if(!this.table[index]){return null;}
        
        for(let i=0; i < this.table[index].length; i++){
            if(this.table[index][i][0] === key){
                return this.table[index][i][1];
            }
        }
        return null;
    }

    has(key){
        const index = this.hash(key);

        if(!this.table[index]){return false;}
        for(let i = 0; i < this.table[index].length; i++){
            if(this.table[index][i][0] === key){return true;}
        }
        return false;
    }

    remove(key){
        const index = this.hash(key);

        if(!this.table[index]){return false;}

        for( let i = 0; i < this.table[index].length; i++){
            if(this.table[index][i][0] === key){
                this.table[index].splice(i, 1);
                this.size--;
                return true;    
            }
        }
        return false;
    }

    length(){
        return this.size;
    }

    clear(){
        this.table = new Array(this.capacity);
        this.size = 0;
        this.capacity = 16;
    }

    keys(){
        const keys = [];
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                for(let j = 0; j < this.table[i].length; j++){
                    keys.push(this.table[i][j][0]);
                }
            }
        }
        return keys;
    }

    values(){
        const values = [];
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                for(let j = 0; j < this.table[i].length; j++){
                    values.push(this.table[i][j][1]);
                }
            }
        }
        return values;
    }


    entries(){
        const entries = [];
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                for(let j = 0; j < this.table[i].length; j++){
                    entries.push(this.table[i][j]);
                }
            }
        }
        return entries;
    }

    resize(){
        const oldTable = this.table;
        this.capacity *= 2;
        this.table = new Array(this.capacity);
        this.size = 0;

        for(let i = 0; i < oldTable.length; i++){
            if(oldTable[i]){
                for(let j = 0; j < oldTable[i].length; j++){
                    this.set(oldTable[i][j][0], oldTable[i][j][1]);
                }
            }
        }
    }

    
}








const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')


console.log(test.get('apple')); 
console.log(test.entries());