var response = "no";
function action(str, nuM, mv, x, y, m){
    if(x == nuM-1 && y == str[nuM-1].length -1){
        response = "yes"
    }
    if(m < mv){ 
        if(y <str[x].length-1){
            if(str[x][y+1] !=="#"){
                action(str,nuM,mv, x, y+1,m+1)
            }
        }
        if(x < nuM -1){
            if(str[x +1][y] !=="#"){
                action(str,nuM,mv, x+1, y,m+1)
            }
            if(x<0 && y<0){
                if(str[x+1][y-1] !=="#" && str[x][y-1] !=="#"){
                    action(str,nuM,mv, x+1, y-1,m+1)
                }
            }
        }

    }
}
function start(){
    let num = 3;
    let stringss =[];
    let moves = 5;


    let pos;
    let md = moves;

    stringss[0] ="...";
    stringss[1] ="..#";
    stringss[2] ="#..";


    action(stringss,num,moves,0,0,0)
    console.log(response)
}

start();
