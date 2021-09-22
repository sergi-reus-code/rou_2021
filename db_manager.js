//Node js class: Here a quick code example

// Basic class
class Rectangle {
  
    // Constructor
    constructor(height, width) {
      // Member variables
      this.height = height;
      this.width = width;
  
      // Access static member variable
      Rectangle.count++;
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
  
  // Static member variable
  Rectangle.count = 0;
  


exports.Rectangle = Rectangle;


/*
  
  // Class instantiation
  const square = new Rectangle(10, 10);
  
  // Access member variable
  console.log(square.height, square.width); // 10 10
  
  // Call getter
  console.log(square.area);	// 100
  
  // Call method
  console.log(square.calcArea()); // 100
  
  
  // Access static member variable
  console.log(Rectangle.count); // 1
  
  // Call static method
  console.log(Rectangle.calcArea(15, 15));  // 225

  */