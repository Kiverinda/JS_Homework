function functionToExecScriptTask(x) {
    let htmlHeader, myScript;
    htmlHeader = document.getElementsByTagName("body")[0];
    myScript = document.createElement('script');
    myScript.type = 'text/javascript';
    switch (x) {
        case 1:
            myScript.src = 'task-1.js';
            break;
        case 2:
            myScript.src = 'task-2.js';
            break;
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
    }

    htmlHeader.appendChild(myScript);
    htmlHeader.removeChild(myScript);
}