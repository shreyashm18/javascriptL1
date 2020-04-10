function arrayReverse(arr)
{
    var txt = '';
    for (x in arr){
        txt += arr[x] + " ";
    }
    document.getElementById('p1').innerHTML = "Main array is: <br>" + txt;
    arr.reverse()
    document.getElementById('p2').innerHTML = "Rverse array is: <br>" + arr;
}

function arraySize(arr)
{
	// var txt = '';
    // for (x in arr){
    //     txt += arr[x] + " ";
    // }
    //document.getElementById('p3').innerHTML = "Main array is: <br>" + txt;
    document.getElementById('p3').innerHTML = "Array length is = " + arr.length
}
