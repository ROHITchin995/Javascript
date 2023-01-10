var search = function(ar,x)
{
    let l = 0, r = arr.length - 1, mid
    if(r>=l)
    {
        let mid1 = l + (r-l)/3;
        let mid2 = r - (r-l)/3;
        if(arr[mid1] == x)
            return mid1;
        if(arr[mid2] == x)
            return mid2;
        if(x<arr[mid1])
            return ternary_search(l,mid1-1,x);
        else if(x>arr[mid2])
            return ternary_search(mid2+1,r,x);
        else
            return ternary_search(mid1+1,mid2-1,x);
 
    }
    return -1;
}