var winner; 
var player1 = 'PLAYER 1';
var player2 = 'PLAYER 2';
var turn = 1;
const gameBoard =(() =>{
     
    const create = (size) => //creates a dynamic grid with coordinates as class list
        {
            let gameboard = document.createElement('div');
            gameboard.className = 'gameboard';
            document.getElementsByClassName('container')[0].appendChild(gameboard);
            for (let x = 1; x<=size; x++)
        {
            let cellrow = document.createElement('div');
            cellrow.className = `row ${(+x)}`;
            document.getElementsByClassName('gameboard')[0].appendChild(cellrow);
            for(let y = -1; y>=-size; y--)
            {
               
                let cell = document.createElement('div');
                console.log(x, y);
                cell.classList.add(`${x}`, `${y}`,`cell`);
                cell.addEventListener('click', (e)=>{//add X or O to grid when clicking 
                    console.log('clicked:',cell.classList.contains('clicked'));
                    console.log(turn);
                    if(!cell.classList.contains('clicked'))
                    {
                        if(turn == 1)
                    {
                        cell.classList.add('clicked', 'tic');
                        let checkList = document.getElementsByClassName('tic');
                        for(let i = 0; i<checkList.length; i++)
                        {
                            console.log(checkList[i]);
                            checkWinner(checkList[i]);
                        }
                        turn++                
                    }
                        else
                    {
                        cell.classList.add('clicked', 'tac');
                        let checkList = document.getElementsByClassName('tac');
                        for(let i = 0; i<checkList.length; i++)
                        {
                            console.log(checkList[i]);
                            checkWinner(checkList[i]);
                        }       
                        turn--;
                    }
                    }
                })
                console.log(cell.classList);
                document.getElementsByClassName(`row ${+x}`)[0].appendChild(cell);
            }
        }
        
    };
    const placeHolder =() =>{ //used to generate a 3x3 board before game start
        create(3);
        {for (let x = 1; x<=3; x++)
            {
                if(x%2 == 0)
                {
                for(let y = -1; y>=-3; y--)
                {

                    if(y%2 == 0)                
                    {
                        document.getElementsByClassName(`${+x} ${+y}`)[0].classList.add('ph', 'clicked');
                    }
                    else{
                        document.getElementsByClassName(`${+x} ${+y}`)[0].classList.add('ph', 'clicked');   
                    }
                }
                }
                else
                {
                    for(let y = -1; y>=-3; y--)
                {
                    if(y%2 == 0)                
                    {
                        document.getElementsByClassName(`${+x} ${+y}`)[0].classList.add('ph', 'clicked');
                    }
                    else{
                        document.getElementsByClassName(`${+x} ${+y}`)[0].classList.add('ph', 'clicked');   
                    }
                }
                }
        }
    }};
    const menu = () => {   //creates a removable menu div   
        let menu = document.createElement('div');
        menu.className = 'menu';
        let title = document.createElement('div');
        title.className = 'title';
        title.innerHTML = 'TIC-TAC-TOE';
        let desc = document.createElement('div');
        desc.className = 'desc';
        desc.innerHTML = 'First to make a line of 3 wins!';
        let l1 = document.createElement('label');
        l1.htmlFor = 'player1';
        l1.className = 'player1';
        l1.innerHTML = 'Player 1';
        let i1 = document.createElement('input');
        i1.type = 'text';
        i1.id = 'player1';
        i1.placeholder = 'enter player 1 name';
        i1.pattern = '[a-zA-Z0-9]{1,20}';
        let l2 = document.createElement('label');
        l2.htmlFor = 'player2';
        l2.className = 'player2';
        l2.innerHTML = 'Player 2';
        let i2 = document.createElement('input');
        i2.type = 'text';
        i2.id = 'player2';
        i2.placeholder = 'enter player 2 name';
        i2.pattern = '[a-zA-Z0-9]{1,20}';
        let btn = document.createElement('button');
        btn.className = 'start';
        btn.innerHTML = 'Start';
        menu.append(title,desc,l1,i1,l2,i2,btn);
        let replace = document.getElementsByClassName('container')[0];
        replace.appendChild(menu);
        let startbtn = document.getElementsByClassName('start')[0];
        startbtn.addEventListener('click',function remove(){
        if(document.getElementById('player1').value.length>0) 
            player1 = document.getElementById('player1').value;
        if(document.getElementById('player2').value.length>0) 
            player2 = document.getElementById('player2').value;
            this.parentNode.remove()
            let gameboard = document.getElementsByClassName('row')[0];
            gameboard.parentNode.remove();
            gameBoard.create(3);
        });
        
    };
    const checkWinner = (check) =>{//checks for three in a diagonal, antidiagonal, horizontal, and vertical
        let yd1 = ((+check.classList[0])-1);
        let xd1 = ((+check.classList[1])+1);
        let yd2 = ((+check.classList[0])+1);
        let xd2 = ((+check.classList[1])-1);
        let yad1 = ((+check.classList[0])+1);
        let xad1 = ((+check.classList[1])+1);
        let yad2 = ((+check.classList[0])-1);
        let xad2 = ((+check.classList[1])-1);
        let yh1 = (+check.classList[0]);
        let xh1 = ((+check.classList[1])+1);
        let yh2 = (+check.classList[0]);
        let xh2 = ((+check.classList[1])-1);
        let yv1 = ((+check.classList[0])-1);
        let xv1 = (+check.classList[1]);
        let yv2 = ((+check.classList[0])+1);
        let xv2 = (+check.classList[1]);
        //console.log(+check.classList[0],+check.classList[1])
        //console.log(yd1,xd1,yd2,xd2,yad1,xad1,yad2,xad2,yh1,xh1,yh2,xh2,yv1,xv1,yv2,xv2)
        let d1 = document.getElementsByClassName(`${yd1} ${xd1}`)[0];
        let d2 = document.getElementsByClassName(`${yd2} ${xd2}`)[0];
        let ad1 = document.getElementsByClassName(`${yad1} ${xad1}`)[0];
        let ad2 = document.getElementsByClassName(`${yad2} ${xad2}`)[0];
        let h1 = document.getElementsByClassName(`${yh1} ${xh1}`)[0];
        let h2 = document.getElementsByClassName(`${yh2} ${xh2}`)[0];
        let v1 = document.getElementsByClassName(`${yv1} ${xv1}`)[0];
        let v2 = document.getElementsByClassName(`${yv2} ${xv2}`)[0];
        console.log(d1);
        console.log(d2);
        console.log(ad1);
        console.log(ad2);
        console.log(h1);
        console.log(h2);
        console.log(v1);
        console.log(v2);
        if(turn == 1)
        {
            if((d1 != null && d1.classList.contains('clicked') && d2 != null && d2.classList.contains('clicked')) && (d1.classList.contains('tic') && d2.classList.contains('tic')) )
            {
                d1.classList.add('win'); check.classList.add('win'); d2.classList.add('win');
    
                winner = player1; console.log(winner); setTimeout ( () => {gameStop(); congrats(winner);}, 1000); 
            }
            else if((ad1 != null && ad1.classList.contains('clicked') && ad2 != null && ad2.classList.contains('clicked')) && (ad1.classList.contains('tic') && ad2.classList.contains('tic')))
            {
                ad1.classList.add('win'); check.classList.add('win'); ad2.classList.add('win');
                winner = player1; console.log(winner);; setTimeout ( () => {gameStop(); congrats(winner);}, 1000); 
            }
            else if((h1 != null && h1.classList.contains('clicked') && h2 != null && h2.classList.contains('clicked')) && (h1.classList.contains('tic') && h2.classList.contains('tic')) )
            {
                h1.classList.add('win'); check.classList.add('win'); h2.classList.add('win');
                winner = player1; console.log(winner);; setTimeout ( () => {gameStop(); congrats(winner);}, 1000); 
                        
            }   
            else if((v1 != null && v1.classList.contains('clicked') && v2 != null && v2.classList.contains('clicked')) && (v1.classList.contains('tic') && v2.classList.contains('tic')) )
            {
                v1.classList.add('win'); check.classList.add('win'); v2.classList.add('win');
                winner = player1; console.log(winner);; setTimeout ( () => {gameStop(); congrats(winner);}, 1000); 
            }        
        }
        else if(turn == 2)
        {
           /* try{console.log(v1 !=null);} catch(err){};
            try{console.log(v1.classList.contains('clicked'))} catch(err){};
                try{console.log(v2 != null);} catch(err){};
                try{console.log(v2.classList.contains('clicked'));  } catch(err){};
                try{console.log(v1.classList[4]);
                    console.log(v2.classList[4]);
                    console.log(check.classList[4]);
                    console.log(v1.classList.contains('tac') == v2.classList[4] == check.classList[4]) ;} catch(err){};*/
            if((d1 != null && d1.classList.contains('clicked') && d2 != null && d2.classList.contains('clicked')) && (d1.classList.contains('tac') && d2.classList.contains('tac')) )
            {
                d1.classList.add('win'); check.classList.add('win'); d2.classList.add('win');

                winner = player2; console.log('tac won'); setTimeout ( () => {gameStop(); congrats(winner);}, 1000); 
            }
            else if((ad1 != null && ad1.classList.contains('clicked') && ad2 != null && ad2.classList.contains('clicked')) && (ad1.classList.contains('tac') && ad2.classList.contains('tac')))
            {
                ad1.classList.add('win'); check.classList.add('win'); ad2.classList.add('win');

                winner = player2; console.log('tac won'); setTimeout ( () => {gameStop(); congrats(winner);}, 1000); 
            }
            else if((h1 != null && h1.classList.contains('clicked') && h2 != null && h2.classList.contains('clicked')) && (h1.classList.contains('tac') && h2.classList.contains('tac')))
            {
                h1.classList.add('win'); check.classList.add('win'); h2.classList.add('win');

                winner = player2; console.log('tac won'); setTimeout ( () => {gameStop(); congrats(winner);}, 1000);             
            }   
            else if((v1 != null && v1.classList.contains('clicked') && v2 != null && v2.classList.contains('clicked')) && (v1.classList.contains('tac') && v2.classList.contains('tac')))
            {
    
                v1.classList.add('win'); check.classList.add('win'); v2.classList.add('win');

                winner = player2; console.log('tac won'); setTimeout ( () => {gameStop(); congrats(winner);}, 1000); 
            }        
        }
    }
    const congrats = (winner) => {
        let msg = document.createElement('div');
        msg.className = 'winner';
        let msgbody = document.createElement('p');
        msgbody.innerHTML = `${winner} WINS!`;
        msg.appendChild(msgbody);
        document.getElementsByClassName('container')[0].appendChild(msg);
        let restartgame = document.createElement('div');
        restartgame.className = 'restart';
        restartgame.innerHTML = 'restart';
        restartgame.addEventListener('click',function restart(){
            this.parentNode.remove();
            gameFlow();
        })
        msg.appendChild(restartgame);
        document.getElementsByClassName('container')[0].appendChild(msg);

    }
    const gameStop = () =>{
        document.getElementsByClassName('row')[0].parentNode.remove();
    }
    return {create, placeHolder, menu, turn, checkWinner, gameStop, congrats};
    })();

const playerFactory =   (name = 'PLAYER',number) => {
    {
        return {name, number};
}};

const gameFlow = ()=>{
    turn = 1;
    gameBoard.menu();
    gameBoard.placeHolder();
};
gameFlow();



   

