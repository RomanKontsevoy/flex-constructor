$(function() {

    let width, height, color, newBorderRadius, order, flexBasis, flexGrow, flexShrink, alignSelf;

    let setSize = function() {
        if (newWidth.value > 20 && newHeight.value > 20) {
            width = newWidth.value;
            height = newHeight.value;
        } else {
            alert('К сожалению, ширина и высота элемента не могут быть менее 20px.')
        }

    };

    let setFigure = function() {
        let figures = document.getElementsByName("figure");
        for (var i = 0; i < figures.length; i++) {
            if (figures[i].checked) {
                newBorderRadius = figures[i].value;
            }
        }
    };

    let setColor = function() {
        color = newColor.value;
    };

    let setOrder = function() {
        let orderRadios = document.getElementsByName("order");
        newOrderValue.value = newOrder.value;
        for (var i = 0; i < orderRadios.length; i++) {
            if (orderRadios[i].checked) {
                order = orderRadios[i].value;
            };
        };
    };

    let flexBasisCount = function() {
        let flexBasisRadios = document.getElementsByName("flex-basis");
        newFlexBasisValue.value = newFlexBasis.value;
        for (var i = 0; i < flexBasisRadios.length; i++) {
            if (flexBasisRadios[i].checked) {
                flexBasis = flexBasisRadios[i].value;
            };
        };
    };

    let measure = function(a) {
        let measureSelect = document.getElementById(a);
        console.log(measureSelect);
        console.log(measureSelect[0].value);
        console.log(measureSelect.length);
        for (var i = 0; i < measureSelect.length; i++) {
            if (measureSelect[i].selected) {
                flexBasisMeasure = measureSelect[i].value;
            };
        };
    };

    let flexBasisValue = function(a) {
        flexBasisCount();
        measure(a);
        flexBasis = flexBasis + flexBasisMeasure;
        console.log(flexBasis);
    };

    let setFlexGrow = function() {
        let flexGrowRadios = document.getElementsByName("flex-grow");
        newFlexGrowValue.value = newFlexGrow.value;
        for (var i = 0; i < flexGrowRadios.length; i++) {
            if (flexGrowRadios[i].checked) {
                flexGrow = flexGrowRadios[i].value;
            };
        };
    };

    let setFlexShrink = function() {
        let flexShrinkRadios = document.getElementsByName("flex-shrink");
        newFlexShrinkValue.value = newFlexShrink.value;
        for (var i = 0; i < flexShrinkRadios.length; i++) {
            if (flexShrinkRadios[i].checked) {
                flexShrink = flexShrinkRadios[i].value;
            };
        };
    };

    let setAlignSelf = function() {
        let alignSelfRadios = document.getElementsByName("align-self");
        for (var i = 0; i < alignSelfRadios.length; i++) {
            if (alignSelfRadios[i].checked) {
                alignSelf = alignSelfRadios[i].value;
            };
        };
    }


    let make = function(e, i) {
        let target = e.target;
        if (target = testarea) {
            let element = document.createElement('div');
            setSize();
            setFigure();
            setColor();
            setOrder();
            setFlexGrow();
            setFlexShrink();
            setAlignSelf();
            let ind = ++i;
            element.className = '.el';
            element.style.width = width + 'px';
            element.style.height = height + 'px';
            element.style.minWidth = '20px';
            element.style.minHeight = '20px';
            element.style.backgroundColor = color;
            let numer = document.createElement('p');
            numer.innerHTML = ind;
            numer.style.display = "flex";
            numer.style.justifyContent = 'center';
            numer.style.alignItems = 'center';
            numer.style.width = "30px";
            numer.style.height = "30px";
            numer.style.borderRadius = "50%";
            numer.style.backgroundColor = "#0ff";
            numer.style.borderColor = "#00f";
            numer.style.borderWidth = "2px";
            numer.style.borderStyle = "solid";
            element.appendChild(numer);
            element.style.display = 'flex';
            element.style.justifyContent = 'center';
            element.style.alignItems = 'center';
            element.style.margin = '1px';
            element.style.color = '#f00';
            element.style.fontSize = "25px";
            if (newBorderRadius == "circle") {
                element.style.borderRadius = "50%";
            } else {
                element.style.borderRadius = "0";
            };
            target.appendChild(element);
            element.style.order = order;
            flexBasisValue("flexBasisMeasure");
            element.style.flexBasis = flexBasis;
            element.style.flexGrow = flexGrow;
            element.style.flexShrink = flexShrink;
            element.style.alignSelf = alignSelf;
        };
    };

    let create = function(e) {
        let elements = document.getElementsByClassName('.el');
        if (elements.length <= 19) {
            if (e = testarea) {
                make(e, elements.length);
            };

        } else {
            alert('Извините, создание более двадцати фигур невозможно!');
        };
    };



    testarea.addEventListener('click', create);


    let display = function() {
        let displayRadios = document.getElementsByName("display");
        for (var i = 0; i < displayRadios.length; i++) {
            if (displayRadios[i].checked) {
                testarea.style.display = displayRadios[i].value;
            };
        };
    };

    let justifyContent = function() {
        let justifyContent = document.getElementsByName("justify-content");
        for (var i = 0; i < justifyContent.length; i++) {
            if (justifyContent[i].checked) {
                testarea.style.justifyContent = justifyContent[i].value;
            }
        }
    }

    let alignItems = function() {
        let alignItems = document.getElementsByName("align-items");
        for (var i = 0; i < alignItems.length; i++) {
            if (alignItems[i].checked) {
                testarea.style.alignItems = alignItems[i].value;
            }
        }
    }

    let flexDirection = function() {
        let flexDirection = document.getElementsByName("flex-direction");
        for (var i = 0; i < flexDirection.length; i++) {
            if (flexDirection[i].checked) {
                testarea.style.flexDirection = flexDirection[i].value;
            }
        }
    }

    let flexWrap = function() {
        let flexWrap = document.getElementsByName("flex-wrap");
        for (var i = 0; i < flexWrap.length; i++) {
            if (flexWrap[i].checked) {
                testarea.style.flexWrap = flexWrap[i].value;
            }
        }
    }

    let alignContent = function() {
        let alignContent = document.getElementsByName("align-content");
        for (var i = 0; i < alignContent.length; i++) {
            if (alignContent[i].checked) {
                testarea.style.alignContent = alignContent[i].value;
            }
        }
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

    // Функция прописывания значения цвета

    let setHtmlValues = function() {
        document.getElementById('newColorValue').innerHTML = " " + newColor.value;
    }

    window.addEventListener("load", setHtmlValues); // Прописать значение цвета при загрузке страницы
    newColor.addEventListener('change', setHtmlValues); // Прописать значение цвета после его изменения

});