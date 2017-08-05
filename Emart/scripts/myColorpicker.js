$(document).ready(function () {

    var colorPicker = $.farbtastic("#colorpicker");

    colorPicker.linkTo(pickerUpdate);

    $("#red,#green,#blue").slider({

        orientation: "horizontal",

        range: "min",

        max: 255,

        slide: sliderUpdate

    });

    function sliderUpdate() {

        var red = $("#red").slider("value");

        var green = $("#green").slider("value");

        var blue = $("#blue").slider("value");

        var hex = hexFromRGB(red, green, blue);

        colorPicker.setColor("#" + hex);

    }

    function hexFromRGB(r, g, b) {

        var hex = [r.toString(16), g.toString(16), b.toString(16)];

        $.each(hex, function (nr, val) {

            if (val.length === 1) {

                hex[nr] = "0" + val;

            }

        });

        return hex.join("").toUpperCase();

    }

    function pickerUpdate(color) {

        $("#swatch").css("background-color", color);




        if (colorPicker.hsl[2] > 0.5) {

            $("#innerswatch").css("color", "#000000");

        }

        else {


            $("#innerswatch").css("color", "#ffffff");

        }
        $('#Code').attr('value', color.toUpperCase())

        $("#innerswatch").html(color.toUpperCase())


        //var red = parseint(color.substring(1,3),16);

        //var green = parseint(color.substring(3,5),16);

        //var blue = parseint(color.substring(5,7),16);

        $("#red").slider("value", red);

        $("#green").slider("value", green);

        $("#blue").slider("value", blue);

    }

});
$(document).ready(function () {

    var colorPicker = $.farbtastic("#colorpicker1");

    colorPicker.linkTo(pickerUpdate);

    $("#red,#green,#blue").slider({

        orientation: "horizontal",

        range: "min",

        max: 255,

        slide: sliderUpdate

    });

    function sliderUpdate() {

        var red = $("#red").slider("value");

        var green = $("#green").slider("value");

        var blue = $("#blue").slider("value");

        var hex = hexFromRGB(red, green, blue);

        colorPicker.setColor("#" + hex);

    }

    function hexFromRGB(r, g, b) {

        var hex = [r.toString(16), g.toString(16), b.toString(16)];

        $.each(hex, function (nr, val) {

            if (val.length === 1) {

                hex[nr] = "0" + val;

            }

        });

        return hex.join("").toUpperCase();

    }

    function pickerUpdate(color) {

        $("#swatch1").css("background-color", color);


        if (colorPicker.hsl[2] > 0.5) {

            $("#innerswatch1").css("color", "#000000");

        }

        else {


            $("#innerswatch1").css("color", "#ffffff");

        }
        $('#Code1').attr('value', color.toUpperCase())

        $("#innerswatch1").html(color.toUpperCase())


        //var red = parseint(color.substring(1,3),16);

        //var green = parseint(color.substring(3,5),16);

        //var blue = parseint(color.substring(5,7),16);

        $("#red").slider("value", red);

        $("#green").slider("value", green);

        $("#blue").slider("value", blue);

    }

});
$(document).ready(function () {

    var colorPicker = $.farbtastic("#colorpicker2");

    colorPicker.linkTo(pickerUpdate);

    $("#red,#green,#blue").slider({

        orientation: "horizontal",

        range: "min",

        max: 255,

        slide: sliderUpdate

    });

    function sliderUpdate() {

        var red = $("#red").slider("value");

        var green = $("#green").slider("value");

        var blue = $("#blue").slider("value");

        var hex = hexFromRGB(red, green, blue);

        colorPicker.setColor("#" + hex);

    }

    function hexFromRGB(r, g, b) {

        var hex = [r.toString(16), g.toString(16), b.toString(16)];

        $.each(hex, function (nr, val) {

            if (val.length === 1) {

                hex[nr] = "0" + val;

            }

        });

        return hex.join("").toUpperCase();

    }

    function pickerUpdate(color) {

        $("#swatch2").css("background-color", color);


        if (colorPicker.hsl[2] > 0.5) {

            $("#innerswatch2").css("color", "#000000");

        }

        else {


            $("#innerswatch2").css("color", "#ffffff");

        }
        $('#Code2').attr('value', color.toUpperCase())

        $("#innerswatch2").html(color.toUpperCase())


        //var red = parseint(color.substring(1,3),16);

        //var green = parseint(color.substring(3,5),16);

        //var blue = parseint(color.substring(5,7),16);

        $("#red").slider("value", red);

        $("#green").slider("value", green);

        $("#blue").slider("value", blue);

    }

});
$(document).ready(function () {

    var colorPicker = $.farbtastic("#colorpicker3");

    colorPicker.linkTo(pickerUpdate);

    $("#red,#green,#blue").slider({

        orientation: "horizontal",

        range: "min",

        max: 255,

        slide: sliderUpdate

    });

    function sliderUpdate() {

        var red = $("#red").slider("value");

        var green = $("#green").slider("value");

        var blue = $("#blue").slider("value");

        var hex = hexFromRGB(red, green, blue);

        colorPicker.setColor("#" + hex);

    }

    function hexFromRGB(r, g, b) {

        var hex = [r.toString(16), g.toString(16), b.toString(16)];

        $.each(hex, function (nr, val) {

            if (val.length === 1) {

                hex[nr] = "0" + val;

            }

        });

        return hex.join("").toUpperCase();

    }

    function pickerUpdate(color) {

        $("#swatch3").css("background-color", color);


        if (colorPicker.hsl[2] > 0.5) {

            $("#innerswatch3").css("color", "#000000");

        }

        else {


            $("#innerswatch3").css("color", "#ffffff");

        }
        $('#Code3').attr('value', color.toUpperCase())

        $("#innerswatch3").html(color.toUpperCase())


        //var red = parseint(color.substring(1,3),16);

        //var green = parseint(color.substring(3,5),16);

        //var blue = parseint(color.substring(5,7),16);

        $("#red").slider("value", red);

        $("#green").slider("value", green);

        $("#blue").slider("value", blue);

    }

});
$(document).ready(function () {

    var colorPicker = $.farbtastic("#colorpicker4");

    colorPicker.linkTo(pickerUpdate);

    $("#red,#green,#blue").slider({

        orientation: "horizontal",

        range: "min",

        max: 255,

        slide: sliderUpdate

    });

    function sliderUpdate() {

        var red = $("#red").slider("value");

        var green = $("#green").slider("value");

        var blue = $("#blue").slider("value");

        var hex = hexFromRGB(red, green, blue);

        colorPicker.setColor("#" + hex);

    }

    function hexFromRGB(r, g, b) {

        var hex = [r.toString(16), g.toString(16), b.toString(16)];

        $.each(hex, function (nr, val) {

            if (val.length === 1) {

                hex[nr] = "0" + val;

            }

        });

        return hex.join("").toUpperCase();

    }

    function pickerUpdate(color) {

        $("#swatch4").css("background-color", color);


        if (colorPicker.hsl[2] > 0.5) {

            $("#innerswatch4").css("color", "#000000");

        }

        else {


            $("#innerswatch4").css("color", "#ffffff");

        }
        $('#Code4').attr('value', color.toUpperCase())

        $("#innerswatch4").html(color.toUpperCase())


        //var red = parseint(color.substring(1,3),16);

        //var green = parseint(color.substring(3,5),16);

        //var blue = parseint(color.substring(5,7),16);

        $("#red").slider("value", red);

        $("#green").slider("value", green);

        $("#blue").slider("value", blue);

    }

});
$(document).ready(function () {

    var colorPicker = $.farbtastic("#colorpicker5");

    colorPicker.linkTo(pickerUpdate);

    $("#red,#green,#blue").slider({

        orientation: "horizontal",

        range: "min",

        max: 255,

        slide: sliderUpdate

    });

    function sliderUpdate() {

        var red = $("#red").slider("value");

        var green = $("#green").slider("value");

        var blue = $("#blue").slider("value");

        var hex = hexFromRGB(red, green, blue);

        colorPicker.setColor("#" + hex);

    }

    function hexFromRGB(r, g, b) {

        var hex = [r.toString(16), g.toString(16), b.toString(16)];

        $.each(hex, function (nr, val) {

            if (val.length === 1) {

                hex[nr] = "0" + val;

            }

        });

        return hex.join("").toUpperCase();

    }

    function pickerUpdate(color) {

        $("#swatch5").css("background-color", color);


        if (colorPicker.hsl[2] > 0.5) {

            $("#innerswatch5").css("color", "#000000");

        }

        else {


            $("#innerswatch5").css("color", "#ffffff");

        }
        $('#Code5').attr('value', color.toUpperCase())

        $("#innerswatch5").html(color.toUpperCase())


        //var red = parseint(color.substring(1,3),16);

        //var green = parseint(color.substring(3,5),16);

        //var blue = parseint(color.substring(5,7),16);

        $("#red").slider("value", red);

        $("#green").slider("value", green);

        $("#blue").slider("value", blue);

    }

});
$(document).ready(function () {

    var colorPicker = $.farbtastic("#colorpicker6");

    colorPicker.linkTo(pickerUpdate);

    $("#red,#green,#blue").slider({

        orientation: "horizontal",

        range: "min",

        max: 255,

        slide: sliderUpdate

    });

    function sliderUpdate() {

        var red = $("#red").slider("value");

        var green = $("#green").slider("value");

        var blue = $("#blue").slider("value");

        var hex = hexFromRGB(red, green, blue);

        colorPicker.setColor("#" + hex);

    }

    function hexFromRGB(r, g, b) {

        var hex = [r.toString(16), g.toString(16), b.toString(16)];

        $.each(hex, function (nr, val) {

            if (val.length === 1) {

                hex[nr] = "0" + val;

            }

        });

        return hex.join("").toUpperCase();

    }

    function pickerUpdate(color) {

        $("#swatch6").css("background-color", color);


        if (colorPicker.hsl[2] > 0.5) {

            $("#innerswatch6").css("color", "#000000");

        }

        else {


            $("#innerswatch6").css("color", "#ffffff");

        }
        $('#Code6').attr('value', color.toUpperCase())

        $("#innerswatch6").html(color.toUpperCase())


        //var red = parseint(color.substring(1,3),16);

        //var green = parseint(color.substring(3,5),16);

        //var blue = parseint(color.substring(5,7),16);

        $("#red").slider("value", red);

        $("#green").slider("value", green);

        $("#blue").slider("value", blue);

    }

});
$(document).ready(function () {

    var colorPicker = $.farbtastic("#colorpicker7");

    colorPicker.linkTo(pickerUpdate);

    $("#red,#green,#blue").slider({

        orientation: "horizontal",

        range: "min",

        max: 255,

        slide: sliderUpdate

    });

    function sliderUpdate() {

        var red = $("#red").slider("value");

        var green = $("#green").slider("value");

        var blue = $("#blue").slider("value");

        var hex = hexFromRGB(red, green, blue);

        colorPicker.setColor("#" + hex);

    }

    function hexFromRGB(r, g, b) {

        var hex = [r.toString(16), g.toString(16), b.toString(16)];

        $.each(hex, function (nr, val) {

            if (val.length === 1) {

                hex[nr] = "0" + val;

            }

        });

        return hex.join("").toUpperCase();

    }

    function pickerUpdate(color) {

        $("#swatch7").css("background-color", color);


        if (colorPicker.hsl[2] > 0.5) {

            $("#innerswatch7").css("color", "#000000");

        }

        else {


            $("#innerswatch7").css("color", "#ffffff");

        }
        $('#Code7').attr('value', color.toUpperCase())

        $("#innerswatch7").html(color.toUpperCase())


        //var red = parseint(color.substring(1,3),16);

        //var green = parseint(color.substring(3,5),16);

        //var blue = parseint(color.substring(5,7),16);

        $("#red").slider("value", red);

        $("#green").slider("value", green);

        $("#blue").slider("value", blue);

    }

});
$(document).ready(function () {

    var colorPicker = $.farbtastic("#colorpicker8");

    colorPicker.linkTo(pickerUpdate);

    $("#red,#green,#blue").slider({

        orientation: "horizontal",

        range: "min",

        max: 255,

        slide: sliderUpdate

    });

    function sliderUpdate() {

        var red = $("#red").slider("value");

        var green = $("#green").slider("value");

        var blue = $("#blue").slider("value");

        var hex = hexFromRGB(red, green, blue);

        colorPicker.setColor("#" + hex);

    }

    function hexFromRGB(r, g, b) {

        var hex = [r.toString(16), g.toString(16), b.toString(16)];

        $.each(hex, function (nr, val) {

            if (val.length === 1) {

                hex[nr] = "0" + val;

            }

        });

        return hex.join("").toUpperCase();

    }

    function pickerUpdate(color) {

        $("#swatch8").css("background-color", color);


        if (colorPicker.hsl[2] > 0.5) {

            $("#innerswatch8").css("color", "#000000");

        }

        else {


            $("#innerswatch8").css("color", "#ffffff");

        }
        $('#Code8').attr('value', color.toUpperCase())

        $("#innerswatch8").html(color.toUpperCase())


        //var red = parseint(color.substring(1,3),16);

        //var green = parseint(color.substring(3,5),16);

        //var blue = parseint(color.substring(5,7),16);

        $("#red").slider("value", red);

        $("#green").slider("value", green);

        $("#blue").slider("value", blue);

    }

});
$(document).ready(function () {

    var colorPicker = $.farbtastic("#colorpicker9");

    colorPicker.linkTo(pickerUpdate);

    $("#red,#green,#blue").slider({

        orientation: "horizontal",

        range: "min",

        max: 255,

        slide: sliderUpdate

    });

    function sliderUpdate() {

        var red = $("#red").slider("value");

        var green = $("#green").slider("value");

        var blue = $("#blue").slider("value");

        var hex = hexFromRGB(red, green, blue);

        colorPicker.setColor("#" + hex);

    }

    function hexFromRGB(r, g, b) {

        var hex = [r.toString(16), g.toString(16), b.toString(16)];

        $.each(hex, function (nr, val) {

            if (val.length === 1) {

                hex[nr] = "0" + val;

            }

        });

        return hex.join("").toUpperCase();

    }

    function pickerUpdate(color) {

        $("#swatch9").css("background-color", color);


        if (colorPicker.hsl[2] > 0.5) {

            $("#innerswatch9").css("color", "#000000");

        }

        else {


            $("#innerswatch9").css("color", "#ffffff");

        }
        $('#Code9').attr('value', color.toUpperCase())

        $("#innerswatch9").html(color.toUpperCase())


        //var red = parseint(color.substring(1,3),16);

        //var green = parseint(color.substring(3,5),16);

        //var blue = parseint(color.substring(5,7),16);

        $("#red").slider("value", red);

        $("#green").slider("value", green);

        $("#blue").slider("value", blue);

    }

});
$(document).ready(function () {

    var colorPicker = $.farbtastic("#colorpicker10");

    colorPicker.linkTo(pickerUpdate);

    $("#red,#green,#blue").slider({

        orientation: "horizontal",

        range: "min",

        max: 255,

        slide: sliderUpdate

    });

    function sliderUpdate() {

        var red = $("#red").slider("value");

        var green = $("#green").slider("value");

        var blue = $("#blue").slider("value");

        var hex = hexFromRGB(red, green, blue);

        colorPicker.setColor("#" + hex);

    }

    function hexFromRGB(r, g, b) {

        var hex = [r.toString(16), g.toString(16), b.toString(16)];

        $.each(hex, function (nr, val) {

            if (val.length === 1) {

                hex[nr] = "0" + val;

            }

        });

        return hex.join("").toUpperCase();

    }

    function pickerUpdate(color) {

        $("#swatch10").css("background-color", color);


        if (colorPicker.hsl[2] > 0.5) {

            $("#innerswatch10").css("color", "#000000");

        }

        else {


            $("#innerswatch10").css("color", "#ffffff");

        }
        $('#Code10').attr('value', color.toUpperCase())

        $("#innerswatch10").html(color.toUpperCase())


        //var red = parseint(color.substring(1,3),16);

        //var green = parseint(color.substring(3,5),16);

        //var blue = parseint(color.substring(5,7),16);

        $("#red").slider("value", red);

        $("#green").slider("value", green);

        $("#blue").slider("value", blue);

    }

});
$(document).ready(function () {

    var colorPicker = $.farbtastic("#colorpicker11");

    colorPicker.linkTo(pickerUpdate);

    $("#red,#green,#blue").slider({

        orientation: "horizontal",

        range: "min",

        max: 255,

        slide: sliderUpdate

    });

    function sliderUpdate() {

        var red = $("#red").slider("value");

        var green = $("#green").slider("value");

        var blue = $("#blue").slider("value");

        var hex = hexFromRGB(red, green, blue);

        colorPicker.setColor("#" + hex);

    }

    function hexFromRGB(r, g, b) {

        var hex = [r.toString(16), g.toString(16), b.toString(16)];

        $.each(hex, function (nr, val) {

            if (val.length === 1) {

                hex[nr] = "0" + val;

            }

        });

        return hex.join("").toUpperCase();

    }

    function pickerUpdate(color) {

        $("#swatch11").css("background-color", color);


        if (colorPicker.hsl[2] > 0.5) {

            $("#innerswatch11").css("color", "#000000");

        }

        else {


            $("#innerswatch11").css("color", "#ffffff");

        }
        $('#Code11').attr('value', color.toUpperCase())

        $("#innerswatch11").html(color.toUpperCase())


        //var red = parseint(color.substring(1,3),16);

        //var green = parseint(color.substring(3,5),16);

        //var blue = parseint(color.substring(5,7),16);

        $("#red").slider("value", red);

        $("#green").slider("value", green);

        $("#blue").slider("value", blue);

    }

});