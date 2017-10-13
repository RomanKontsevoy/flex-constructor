$(function() {


    let setSize = function() {
        // let w, h;
        width = 100;
        height = 100;
    }



    let make = function(e, i) {
        let target = e.target;
        if (target = testarea) {
            let element = document.createElement('div');
            setSize();
            let ind = ++i;
            element.className = '.el';
            element.style.minWidth = width + 10 + 'px';
            element.style.minHeight = height + 10 + 'px';
            element.style.backgroundColor = '#5f5';
            let numer = document.createElement('p');
            numer.innerHTML = ind;
            element.appendChild(numer);
            element.style.display = 'flex';
            element.style.justifyContent = 'center';
            element.style.alignItems = 'center';
            element.style.margin = '1px';
            element.style.color = '#f00';
            element.style.fontSize = "25px";
            target.appendChild(element);
        }

    }

    let create = function(e) {
        let elements = document.getElementsByClassName('.el');
        console.log(elements);
        if (elements.length <= 19) {
            if (e = testarea) {
                make(e, elements.length);
            }

        } else {
            alert('Извините, создание более двадцати фигур невозможно!');
        }


    }

    testarea.addEventListener('click', create);



    let display = function() {
        let displayRadios = document.getElementsByName("display");
        for (var i = 0; i < displayRadios.length; i++) {
            if (displayRadios[i].checked) {
                testarea.style.display = displayRadios[i].value;
            }
        }
        console.log(testarea.style.display)
    }

    let justifyContent = function() {
        let justifyContent = document.getElementsByName("justify-content");
        for (var i = 0; i < justifyContent.length; i++) {
            if (justifyContent[i].checked) {
                testarea.style.justifyContent = justifyContent[i].value;
            }
        }
        console.log(testarea.style.justifyContent)
    }

    let alignItems = function() {
        let alignItems = document.getElementsByName("align-items");
        for (var i = 0; i < alignItems.length; i++) {
            if (alignItems[i].checked) {
                testarea.style.alignItems = alignItems[i].value;
            }
        }
        console.log(testarea.style.alignItems)
    }

    let flexDirection = function() {
        let flexDirection = document.getElementsByName("flex-direction");
        for (var i = 0; i < flexDirection.length; i++) {
            if (flexDirection[i].checked) {
                testarea.style.flexDirection = flexDirection[i].value;
            }
        }
        console.log(testarea.style.flexDirection)
    }

    let flexWrap = function() {
        let flexWrap = document.getElementsByName("flex-wrap");
        for (var i = 0; i < flexWrap.length; i++) {
            if (flexWrap[i].checked) {
                testarea.style.flexWrap = flexWrap[i].value;
            }
        }
        console.log(testarea.style.flexWrap)
    }

    let alignContent = function() {
        let alignContent = document.getElementsByName("align-content");
        for (var i = 0; i < alignContent.length; i++) {
            if (alignContent[i].checked) {
                testarea.style.alignContent = alignContent[i].value;
            }
        }
        console.log(testarea.style.alignContent)
    }

    let acceptParent = function() {
        display();
        justifyContent();
        alignItems();
        flexDirection();
        flexWrap();
        alignContent();
    }

    parentStylesBtn.addEventListener('click', acceptParent);


});