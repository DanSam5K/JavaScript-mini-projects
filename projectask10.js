const _ = {
    //implement clamp
    clamp(number, lower, upper){
      const  lowerClampedValue =  Math.max(number, lower);
      const clampedValue =  Math.min(lowerClampedValue, upper);
      return clampedValue
    },
    //implementing in range
    inRange(number, start, end){
       if(end === undefined){
         end = start;
         start = 0;
      }
       if(start > end){
        let temp = end;
         end = start;
         start = temp;
      } 
      let isInRange = true;
      if(number >= start && number < end){
        isInRange;
      } else{ 
        isInRange = false;
      }
        return isInRange;
      },
  
      //implement words
      words(word){
      return word.split(' ');
      },
    //implement pad methods
      pad(word, length){
        if(length <= word.length){
          return word;
        };
        const startPaddingLength = Math.floor((length - word.length)/2); 
        const endPaddingLength = length - (word.length + startPaddingLength);
        const paddedString = ' '.repeat(startPaddingLength) + word + ' '.repeat(endPaddingLength);
        return paddedString; 
      },
  
      //implement has method
      has(object, key){
        const hasValue = object[key];
        if(hasValue !== undefined){
           return true;
        }
        return false;
      },
  
      //implement invert method
      invert(object){
        let invertedObject = {};
        for(let key in object){
          const originalValue = object[key];
          invertedObject = {originalValue: key};
        }
        return invertedObject;
      },
  
    //implement findKey method
    findKey(object, predicate){
      for(let key in object){
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if(predicateReturnValue){
          return key;
        }
      } return undefined;
    },
  
    //drop array method
      drop(array, n){
        if(n === undefined){
          n = 1;
        }
        let droppedArray = array.slice(n, array.length);
        return droppedArray;
      },
  
      //dropwhile method
      dropWhile(array, predicate){
        const cb=  (element, index) => {
          return !predicate(element, index, array);
      }
        let dropNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, dropNumber)
        return droppedArray;
      },
  
      //implementing chunk method
      chunk(array, size){
        if(size === undefined){
          size = 1;
        };
        let arrayChunks = [];
        for(let i = 0; i < array.length; i+=size){
        let arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk)};
        return arrayChunks;
      },
    }
  