function functionToExecScriptTask(x) {
    let htmlHeader, myScript;
    htmlHeader = document.getElementsByTagName("body")[0];
    myScript = document.createElement('script');
    myScript.type = 'text/javascript';
    switch(x)
    {
        case 3:
            myScript.src = 'task-3.js';
            break;
        case 4:
            myScript.src = 'task-4.js';
            break;
        case 5:
            myScript.src = 'task-5.js';
            break;
        case 6:
            myScript.src = 'task-6.js';
            break;
        case 7:
            myScript.src = 'task-7.js';
            break;
        case 8:
            myScript.src = 'task-8.js';
            break;
    }

    htmlHeader.appendChild(myScript);
    htmlHeader.removeChild(myScript);
}