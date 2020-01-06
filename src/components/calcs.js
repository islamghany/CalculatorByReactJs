

class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
  
   // push function 
    push(element) 
    { 
        // push element into the items 
        this.items.push(element); 
    }
    // pop function 
    pop() 
    { 
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.items.length === 0) 
            return "Underflow"; 
        return this.items.pop(); 
    } 
    // isEmpty function 
      empty() 
      { 
          // return true if stack is empty 
          return this.items.length === 0; 
      }
      printStack() 
      { 
          var str = ""; 
          for (var i = 0; i < this.items.length; i++) 
              str += this.items[i] + " "; 
          return str; 
      }  
      top() 
        { 
            // return the top most element from the stack 
            // but does'nt delete it. 
            return this.items[this.items.length - 1]; 
        } 
}

const precedence=(op)=>{ 
    if(op === '+'||op === '-') 
    return 1; 
    if(op === '*'||op === '/' || op==='%') 
    return 2; 
    if(op === '^' || op==='$') return 3;
    return 0; 
} 
const applyOp=( a, b, op)=>{ 
    switch(op){ 
        case '+': return a + b; 
        case '-': return a - b; 
        case '*': return a * b; 
        case '/': return a / b; 
        case '%': return a % b;
        case '^': return Math.pow(a,b);
        default:return 0; 
    } 
} 

// Function that returns value of 
// expression after evaluation. 
export const evaluate=(tokens)=>{ 
    var i; 
      
    // stack to store integer values. 
        var values = new Stack(); 
      
    // stack to store operators. 
       var ops= new Stack(); 
      
    for(i = 0; i < tokens.length; i++){ 
        // Current token is a whitespace, 
        // skip it. 
        if(tokens[i] === ' ') 
            continue; 
          
        // Current token is an opening  
        // brace, push it to 'ops' 
        else if(tokens[i] === '('){ 
            ops.push(tokens[i]); 
        } 
          
     
          
        // Closing brace encountered, solve  
        // entire brace. 
        else if(tokens[i] === ')') 
        {  
            while(!ops.empty() && ops.top() !== '(') 
            { 
                let val2 = values.top(); 
                values.pop(); 
                  
                let val1 = values.top(); 
                values.pop(); 
                  
                let op = ops.top(); 
                ops.pop(); 
                values.push(applyOp(val1, val2, op)); 
            } 
              
            // pop opening brace. 
            if(!ops.empty()) 
               ops.pop(); 
        } 
          
        // Current token is an operator. 
           // Current token is a number, push  
        // it to stack for numbers. 
        else if(/^\d+$/.test(tokens[i]) || ( tokens[i]==='-' && (i=== 0 || tokens[i-1] ==='(' )) ){ 
            let val = 0; 
            let f = (tokens[i] === '-');
            if(f) i++;
          // console.log('abo',tokens[i]);
            // There may be more than one 
            // digits in number. 
            let str='';
            while(i < tokens.length &&
             (/^\d+$/.test(tokens[i]) || tokens[i] === '.')) 
            {   
                str+=tokens[i]; 
                val = (parseFloat(val)*10) + parseFloat(tokens[i]); 
                i++; 
               
            } 
            
            if(!/^\d+$/.test(tokens[i]) && tokens[i] !== ' '){
              --i;
            }
           

            if(str.includes('.')) val = parseFloat(str);
            if(f) val*=-1;
            
            values.push(val);
              
        } 
        else
        { 
            // While top of 'ops' has same or greater  
            // precedence to current token, which 
            // is an operator. Apply operator on top  
            // of 'ops' to top two elements in values stack. 
            while(!ops.empty() && precedence(ops.top()) 
                                >= precedence(tokens[i])){ 
                if(ops.top() !== '$'){
                let val2 = values.top(); 
                values.pop(); 
                  
                let val1 = values.top(); 
                values.pop(); 
                  
                let op = ops.top(); 
                ops.pop(); 
                  
                values.push(applyOp(val1, val2, op));
                }
                else{
                    let val1 =values.top();
                    values.pop();

                    ops.pop(); 
                    values.push(Math.sqrt(val1));
                } 
            } 
              
            // Push current token to 'ops'. 
            ops.push(tokens[i]); 
        } 
    } 
      
    // Entire expression has been parsed at this 
    // point, apply remaining ops to remaining 
    // values. 
    while(!ops.empty()){
        if(ops.top() !== '$') {
        let val2 = values.top(); 
        values.pop(); 
                  
        let val1 = values.top(); 
        values.pop(); 
                  
        let op = ops.top(); 
        ops.pop(); 
                  
        values.push(applyOp(val1, val2, op)); 
    }
    else{
                    let val1 =values.top();
                    values.pop();

                    ops.pop(); 
                    values.push(Math.sqrt(val1));
                } 
    } 
      
    // Top of 'values' contains result, return it. 
    return values.top(); 
} 
