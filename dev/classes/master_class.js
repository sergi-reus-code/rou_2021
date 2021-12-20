module.exports = class Master {
  
    // Constructor
    /*
    constructor(height, width) {
      // Member variables
      this.height = height;
      this.width = width;
  
   
    }
*/
    constructor() {
      // Member variables
      this.height = 10;
      this.width = 10;
  
         
    }



    
    // Getter
    get area() {
      return this.calcArea();
    }
    
  
  
  
  
    
    // Method
    calcArea() {
      return this.height * this.width;
    }
  
    // Static method
    static calcArea(width, height) {
      return width * height;
    }
  }