//Implement MSD RadiL Sort using Linked List MSD RadiL Sort sort given input based on a most significant digit or index

function print(arr , n) {
    for (var i = 0; i < n; i++) {
        console.log(arr[i] + " ");
    }
    console.log();
}


function digit_at(x , d) {
    return parseInt( x / Math.pow(10, d - 1)) % 10;
}


function MSDSort(arr , lo , hi , d) {

    if (hi <= lo) {
        return arr;
    }

    var count = Array(10 + 2).fill(0);


    var temp = new Map();


    for (var i = lo; i <= hi; i++) {
        var c = digit_at(arr[i], d);
        count++;
    }


    for (var r = 0; r < 10 + 1; r++)
        count[r + 1] += count[r];


    for (i = lo; i <= hi; i++) {
        var c = digit_at(arr[i], d);
        if (temp.has(count + 1))
            temp.set(count++, arr[i]);
        else
            temp.set(count++, arr[i]);
    }

    for (i = lo; i <= hi; i++)
        if (temp.has(i - lo))
            arr[i] = temp.get(i - lo);



    for (r = 0; r < 10; r++)
        arr = MSDSort(arr, lo + count[r], lo + count[r + 1] - 1, d - 1);
    return arr;
}


function getMax(arr , n) {
    var mx = arr[0];
    for (i = 1; i < n; i++)
        if (arr[i] > mx)
            mx = arr[i];
    return mx;
}


function radixsort(arr , n) {

    var m = getMax(arr, n);


    var d = parseInt( Math.floor(Math.log10(Math.abs(m)))) + 1;

    return MSDSort(arr, 0, n - 1, d);
}


    var arr = [ 1234, 690, 518, 897, 571 ];

    var n = arr.length;

    console.log("Unsorted array : ");


    print(arr, n);

    arr = radixsort(arr, n);

    console.log("<br/>Sorted array : ");

    print(arr, n);
