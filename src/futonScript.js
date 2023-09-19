// 神のフェードイン
function takadafadeIn() {
    var tkID = document.getElementById('takadakenshi');
    var mkID = document.getElementById('mikotoba');
    
    tkID.style.opacity = 0;
    tkID.style.display = "block";
    setTimeout(function() {
        tkID.style.transition = "opacity 5s";
        tkID.style.opacity = 1;
    }, 0);

    mkID.style.opacity = 0;
    mkID.style.display = "block";
    setTimeout(function() {
        mkID.style.transition = "opacity 5s";
        mkID.style.opacity = 1;
    }, 0);
}
