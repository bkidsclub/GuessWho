var obj = {0:"Alex",1:"Alfred",2:"Anita",3:"Anne",4:"Bernard",5:"Bill",6:"Charles",7:"Claire",8:"David",9:"Eric",
            10:"Frans",11:"George",12:"Herman",13:"Joe",14:"Maria",15:"Max",16:"Paul",17:"Peter",18:"Phillip",
            19:"Richard",20:"Robert",21:"Sam",22:"Susan",23:"Tom"
}
function processClick(charNum, connection) {
    connection.send(obj[charNum], () => console.log("Sent data to websocket: " + obj[charNum]));
    return;
}