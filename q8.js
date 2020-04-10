function findVovels(str){
    var txt = '';
    var arr = [];
    var vo_array = ['a','e','i','o','u'];
    for(var i = 0; i<str.length ; i++){
        if ( vo_array.includes(str[i].toLowerCase()) ){
            if (!(arr.includes(str[i]) || arr.includes(str[i].toLowerCase()))){
                arr.push(str[i]);
            }
        }
    }
    if (arr.length){
        document.getElementById('demo').innerHTML = str + " has following vovels : <br>" + arr
    }
    else{
        document.getElementById('demo').innerHTML ="There are no vovels in " + str
    }
}