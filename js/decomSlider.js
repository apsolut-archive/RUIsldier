function decomSlajder($container, slajdTrajanje, slajdFejd){
    $container[0].faderConfig = {};
    var slideSelector = '.slide',
        slajdVrijeme,
        aktivniSlajd,
        noviSlajd,
        $slides = $container.find(slideSelector),
        sviSlajdovi = $slides.length,
        config = $container[0].faderConfig;
    config = {
        slajdTrajanje : slajdTrajanje,
        slajdFejd : slajdFejd   
    };  
    $slides.eq(0).css('opacity', 0.5);
    aktivniSlajd = 0;
    slajdVrijeme = setTimeout(function(){
        changeSlides('next');
    },config.slajdTrajanje);
    function changeSlides(target){
        if(target == 'next'){
            noviSlajd = aktivniSlajd + 1;
            if(noviSlajd > sviSlajdovi - 1){ 
                noviSlajd = 0;
            }
        } else if(target === 'prev'){
            noviSlajd = aktivniSlajd - 1;
            if(noviSlajd < 0){ 
                noviSlajd = sviSlajdovi - 1;
            };
        } else {
            noviSlajd = target;
        };
        animateSlides(aktivniSlajd, noviSlajd);
    };
    function animateSlides(activeNdx, newNdx){
        $slides.eq(activeNdx).css('z-index', 3);
        $slides.eq(newNdx).css({
            'z-index': 2,
            'opacity': 1
        });
        $slides.eq(activeNdx).animate({'opacity': 0}, config.slajdFejd, function(){
            $slides.eq(activeNdx).removeAttr('style');
            aktivniSlajd = newNdx;
            waitForNext();
        });
        
          $slides.eq(activeNdx).css('z-index', 3);
          
      		
    };
    function waitForNext(){
        slajdVrijeme = setTimeout(function(){
            changeSlides('next');   
        },config.slajdTrajanje);
    };
};

