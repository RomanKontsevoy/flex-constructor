$(function() {


    let setSize = function() {
        // let w, h;
        width = 100;
        height = 100;
    }



    let make = function(e) {
        let target = e.target;
        let element = document.createElement('div');
        setSize();
        element.className = '.el';
        element.style.width = width + 'px';
        element.style.height = height + 'px';
        element.style.backgroundColor = '#5f5';
        target.appendChild(element);
    }

    let create = function(e) {
        let elements = document.getElementsByClassName('.el');
        console.log(elements);
        if (elements.length <= 4) {
            make(e);
        } else {
            alert('Извините, создание более пяти фигур невозможно!');
        }
    }

    testarea.addEventListener('click', create);

    let displayRadios = document.getElementsByName("display");

    let display = function() {
        for (var i = 0; i < displayRadios.length; i++) {
            if (displayRadios[i].checked) {
                testarea.style.display = displayRadios[i].value;
            }
        }
        console.log(testarea.style.display)
    }

    parentStylesBtn.addEventListener('click', display);


});