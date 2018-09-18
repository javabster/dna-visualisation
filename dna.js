var current_x = 10;
var current_y = 160;

function addRock(helix_id, name, rockstar, helixColour, rock_id, pc_moved, green_status) {
    var x1 = current_x + (rock_id*175);
    var y1 = current_y;

    var xmlns = "http://www.w3.org/2000/svg";
    
    var x_offset = [34.8, 59.9, 85, 110.1, 135.2];
    var y1_offset = [94, 66, 56, 66, 94];
    var y2_offset = [225, 252, 260, 252, 225];
    var lineLength = [131, 186, 194, 186, 131]

    
    
    x_offset.forEach((x_item, index) => {
        var bgLine = document.createElementNS(xmlns, 'line');
        bgLine.setAttributeNS(null, 'x1', x1+x_item);
        bgLine.setAttributeNS(null, 'x2', x1+x_item);
        bgLine.setAttributeNS(null, 'y1', y1_offset[index]);
        bgLine.setAttributeNS(null, 'y2', y2_offset[index]);
        bgLine.setAttributeNS(null,"style", 'stroke-width: 10;');
        bgLine.setAttributeNS(null,"stroke-linecap","round");

        if (green_status === 'sg') {
            bgLine.setAttributeNS(null, 'stroke', '#b5e7a0');
        } else {
            bgLine.setAttributeNS(null, 'stroke', '#d5e1df');
        };

        document.getElementById(helix_id).appendChild(bgLine);

        var fLine = document.createElementNS(xmlns, 'line');
        fLine.setAttributeNS(null, 'x1', x1+x_item);
        fLine.setAttributeNS(null, 'x2', x1+x_item);
        fLine.setAttributeNS(null, 'y1', y1_offset[index] + (lineLength[index]-(lineLength[index]*(pc_moved/100))) );
        fLine.setAttributeNS(null, 'y2', (y2_offset[index]));
        fLine.setAttributeNS(null,"style", 'stroke-width: 10;');

        fLine.setAttributeNS(null,"stroke-linecap","round");

        if (green_status === 'sg') {
            fLine.setAttributeNS(null, 'stroke', '#86af49');
        } else {
            fLine.setAttributeNS(null, 'stroke', '#b5e7a0');
        };

        document.getElementById(helix_id).appendChild(fLine);

        });

    var pathElem = document.createElementNS(xmlns, "path");
    pathElem.setAttributeNS(null,"style", 'stroke-width: 9; stroke:' 
                                + helixColour );
    pathElem.setAttributeNS(null,"d", 'M ' + (x1) +' ' + y1 + ' C ' + (x1+60) + ' ' + (20) + ' , ' + (x1+110) + ' ' + (20) 
    + ' , ' + (x1+170) + ' ' + y1 + ',C ' + (x1+110) + ' ' + (300) + ', ' + (x1+60)+ ' ' + (300) + ', ' + x1 + ' ' + y1);
    pathElem.setAttributeNS(null,"fill","transparent");
    document.getElementById(helix_id).appendChild(pathElem);
    
    var fo = document.createElementNS(xmlns, 'foreignObject');
    fo.setAttribute('x', x1+35);
    fo.setAttribute('y', y1*1.8);
    fo.setAttribute('id', 'foreignObj' + rock_id);
    fo.innerHTML = name + '<br>'+ '('+rockstar+')';
    fo.setAttribute('height', 100);
    fo.setAttribute('width', 100);
    fo.setAttribute('style', ' display: flex; text-align: center; font-family: arial');
    document.getElementById(helix_id).appendChild(fo);

    var cap = document.createElementNS(xmlns, 'p');
    cap.innerHTML = name;
    cap.setAttribute('x', 0);
    cap.setAttribute('y', 0);
    cap.setAttribute('style', 'font-family: arial; color: black');
    // cap.setAttribute('textLength', 140);
    // cap.setAttribute('lengthAdjust', 'spacingAndGlyphs');
    document.getElementById('foreignObj' + rock_id).appendChild(cap);

    // var pc = document.createElementNS(xmlns, 'text');
    // pc.innerHTML = pc_moved + '% complete';
    // pc.setAttribute('x', x1);
    // pc.setAttribute('y', y1*2 + 30);
    // pc.setAttribute('style', 'font-family: arial; fill: transparent; animation: text; animation-duration: 3s; animation-iteration-count: infinite; animation-delay: ' 
    // + (rock_id)*2 + 's');
    // document.getElementById(helix_id).appendChild(pc);
}

function addPebble(helix_id, pebble_description, helixColour, rock_id, rock_key, pc_moved, green_status) {
    var x1 = 10 + ((rock_key - rock_id*100)*85);
    var y1 = 80;

    var xmlns = "http://www.w3.org/2000/svg";
    
    var x_offset = [17.4, 29.95, 42.5, 55.05, 67.6];
    var y1_offset = [47, 33, 28, 33, 47];
    var y2_offset = [113, 127, 132, 127, 113];
    var lineLength = [66, 94, 104, 94, 66];

    var num;

    if (rock_key-(rock_id*100) > 5 && rock_key-(rock_id*100) < 11) {
        num = (rock_key-(rock_id*100)-5); 
    } else if (rock_key-(rock_id*100) > 10 && rock_key-(rock_id*100) < 16) {
        num = (rock_key-(rock_id*100)-10);
    } else if (rock_key-(rock_id*100) > 15) {
        num = (rock_key-(rock_id*100)-15);
    } else {
        num = (rock_key-(rock_id*100));
    }
    
    x_offset.forEach((x_item, index) => {
        var bgLine = document.createElementNS(xmlns, 'line');
        bgLine.setAttributeNS(null, 'x1', x1+x_item);
        bgLine.setAttributeNS(null, 'x2', x1+x_item);
        bgLine.setAttributeNS(null, 'y1', y1_offset[index]);
        bgLine.setAttributeNS(null, 'y2', y2_offset[index]);
        bgLine.setAttributeNS(null,"style", 
        'stroke-width: 5; animation-name: peb' + num 
        +'; animation-duration: 20s; animation-iteration-count: infinite; transform-origin: 50% 25%;');
        bgLine.setAttributeNS(null,"stroke-linecap","round");

        if (green_status === 'sg') {
            bgLine.setAttributeNS(null, 'stroke', '#b5e7a0');
        } else {
            bgLine.setAttributeNS(null, 'stroke', '#d5e1df');
        };

        document.getElementById(helix_id).appendChild(bgLine);

        var fLine = document.createElementNS(xmlns, 'line');
        fLine.setAttributeNS(null, 'x1', x1+x_item);
        fLine.setAttributeNS(null, 'x2', x1+x_item);
        fLine.setAttributeNS(null, 'y1', y1_offset[index] + (lineLength[index]-(lineLength[index]*(pc_moved/100))) );
        fLine.setAttributeNS(null, 'y2', (y2_offset[index]));
        fLine.setAttributeNS(null,"style", 
        'stroke-width: 5; animation-name: peb' +num 
        +'; animation-duration: 20s; animation-iteration-count: infinite; transform-origin: 50% 25%;');
        fLine.setAttributeNS(null,"stroke-linecap","round");

        if (green_status === 'sg') {
            fLine.setAttributeNS(null, 'stroke', '#86af49');
        } else {
            fLine.setAttributeNS(null, 'stroke', '#b5e7a0');
        };

        document.getElementById(helix_id).appendChild(fLine);

        });

    var pathElem = document.createElementNS(xmlns, "path");
    pathElem.setAttributeNS(null,"style", 'stroke-width: 5; animation-name: peb' +num +
    '; transform-origin: 50% 25%; animation-duration: 20s; animation-iteration-count: infinite; stroke:' 
                                + helixColour + ';');
    pathElem.setAttributeNS(null,"d", 'M ' + (x1) +' ' + y1 + ' C ' + (x1+30) + ' 10 , ' + (x1+55) + ' 10, ' 
    + (x1+85) + ' ' + y1 + ',C ' + (x1+55) + ' 150, ' + (x1+30)+ ' 150, ' + x1 + ' ' + y1);
    
    pathElem.setAttributeNS(null,"fill","transparent");
    document.getElementById(helix_id).appendChild(pathElem);
    
    var fo = document.createElementNS(xmlns, 'foreignObject');
    fo.setAttribute('x', x1);
    fo.setAttribute('y', (y1*2)+3);
    fo.setAttribute('id', 'foreignObj' + rock_key);
    fo.innerHTML = pebble_description;
    fo.setAttribute('height', 200);
    fo.setAttribute('width', 250);
    fo.setAttribute('style', 'display: flex; font-family: arial; color: transparent; animation: pebtxt' + 
    num + '; animation-duration: 20s; animation-iteration-count: infinite');
    document.getElementById(helix_id).appendChild(fo);

    var pcTxt = document.createElementNS(xmlns, 'foreignObject');
    pcTxt.setAttribute('x', x1-7);
    pcTxt.setAttribute('y', y1-15);
    pcTxt.setAttribute('id', 'foreignObj' + rock_key);
    pcTxt.innerHTML = pc_moved + '% <br> complete';
    pcTxt.setAttribute('height', 50);
    pcTxt.setAttribute('width', 100);
    pcTxt.setAttribute('style', 'display: flex; font-family: arial; text-align: center; color: transparent; animation: pebtxt' + 
    num + '; animation-duration: 20s; animation-iteration-count: infinite');
    document.getElementById(helix_id).appendChild(pcTxt);

    
}




addRock('rocksHelix', 'Category 1', 'Rosalind', '#5b9aa0', 1, 7.777);
addRock('rocksHelix', 'Category 2','Francis', '#034f84', 2, 22.458);
addRock('rocksHelix', 'Category 3', 'James', '#b8a9c9', 3, 16);
addRock('rocksHelix', 'Category 4', 'Maurice', '#622569', 4, 12.321);

addPebble('Category 1', 'Item 1.1', '#5b9aa0', 1, 101, 20);
addPebble('Category 1', 'Item 1.2', '#5b9aa0', 1, 102, 20);
addPebble('Category 1', 'Item 1.3', '#5b9aa0', 1, 103, 50);
addPebble('Category 1', 'Item 1.4', '#5b9aa0', 1, 104, 0);
addPebble('Category 1', 'Item 1.5', '#5b9aa0', 1, 105, 0);
addPebble('Category 1', 'Item 1.6', '#5b9aa0', 1, 106, 0);
addPebble('Category 1', 'Item 1.7', '#5b9aa0', 1, 107, 0);
addPebble('Category 1', 'Item 1.8', '#5b9aa0', 1, 108, 0);
addPebble('Category 1', 'Item 1.9', '#5b9aa0', 1, 109, 0);
addPebble('Category 1', 'Item 1.10', '#5b9aa0', 1, 110, 0);


addPebble('Category 2', 'Item 2.1', '#034f84', 2, 201, 7.1);
addPebble('Category 2', 'Item 2.2', '#034f84', 2, 202, 50);
addPebble('Category 2', 'Item 2.3', '#034f84', 2, 203, 50);
addPebble('Category 2', 'Item 2.4', '#034f84', 2, 204, 50);
addPebble('Category 2', 'Item 2.5', '#034f84', 2, 205, 5);
addPebble('Category 2', 'Item 2.6', '#034f84', 2, 206, 20);
addPebble('Category 2', 'Item 2.7', '#034f84', 2, 207, 20);
addPebble('Category 2', 'Item 2.8', '#034f84', 2, 208, 0);
addPebble('Category 2', 'Item 2.9', '#034f84', 2, 209, 0);

addPebble('Category 3', 'Item 3.1', '#b8a9c9', 3, 301, 30);
addPebble('Category 3', 'Item 3.2', '#b8a9c9', 3, 302, 30);
addPebble('Category 3', 'Item 3.3', '#b8a9c9', 3, 303, 10);
addPebble('Category 3', 'Item 3.4', '#b8a9c9', 3, 304, 0);
addPebble('Category 3', 'Item 3.5', '#b8a9c9', 3, 305, 10);

addPebble('Category 4', 'Item 4.1', '#622569', 4, 401, 25);
addPebble('Category 4', 'Item 4.2', '#622569', 4, 402, 28.6);
addPebble('Category 4', 'Item 4.3', '#622569', 4, 403, 0);
addPebble('Category 4', 'Item 4.4', '#622569', 4, 404, 0);
addPebble('Category 4', 'Item 4.5', '#622569', 4, 405, 0);
addPebble('Category 4', 'Item 4.6', '#622569', 4, 406, 10.9);
addPebble('Category 4', 'Item 4.7', '#622569', 4, 407, 50);
addPebble('Category 4', 'Item 4.8', '#622569', 4, 408, 33.3);
addPebble('Category 4', 'Item 4.9', '#622569', 4, 409, 0);
addPebble('Category 4', 'Item 4.10', '#622569', 4, 410, 0);
addPebble('Category 4', 'Item 4.11', '#622569', 4, 411, 0);
addPebble('Category 4', 'Item 4.12', '#622569', 4, 412, 0);
