document.querySelector('#push').onclick = function(){
    if(document.querySelector('#addTask input').value.length == 0){
        document.querySelector('#addTask').innerHTML += `
            <span>O campo não pode ser vazio</span>
        `;
    }
    else{
        document.querySelector('#task').innerHTML += `
            <div class="task">
                <span id="taskName">
                    ${document.querySelector('#addTask input').value}
                </span>
            </div>
        `;
    }

    
}