// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // Implement your solution here
    const N = A.length;
    
    if (N <=1 || K % N === 0) {
        return A;
    }
    
   
     K = K % N;

     for (let i = 0; i < K; i++) {
        const lastElement = A.pop(); 
        A.unshift(lastElement); 
    }
    

    return A;
}