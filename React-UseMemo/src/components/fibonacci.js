const memo = {};
export function findfibo(n){
    if(n in memo){
        return memo[n];
    }
    if(n<=1){
        return n;
    }

    memo[n] = findfibo(n-1) + findfibo(n-2);
    return memo[n];
}