class Polygon{
    constructor(array){
        this.array = array
    }

    get getCount(){
        return this.array.length
    }

    get perimeter(){
        let sum = 0;
        this.array.forEach(function(x){
            sum += x
        })
        return sum
    }
}

class Triangle extends Polygon{ 
    get isValid(){
        if (this.array.length === 3 && this.array[0]+this.array[1] >= this.array[2] && this.array[1]+this.array[2] >= this.array[0] && this.array[0]+this.array[2] >= this.array[1]){
            return true
        }
        else {
            return false
        }
    }
}

class Square extends Polygon{
    get isValid() {
        if (this.array[0] === this.array[1] && this.array[0] === this.array[2] && this.array[0] === this.array[3]){
            return true
        }
        else {
            return false
        }
    }

    get area(){
        let area = this.array[0] * this.array[1]
        return area
    }
}