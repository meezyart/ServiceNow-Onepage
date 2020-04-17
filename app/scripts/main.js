
$(document).ready(function () {
  gsap.defaultEase = Linear.easeNone;
   // build-scenario tabs
   $('.build-scenario-tabs').tabs({

    hide: { effect: 'fade', duration: 500 },
    show: { effect: 'fade', duration: 800 }
});

// Start Quickly tabs
$('.start-quickly-tabs').tabs({
 beforeActivate: function( ui ) {
   console.log( ui.currentTarget.id,ui)
   if(ui.currentTarget.id){
     let tl = gsap.timeline();
     tl.to('#backImg', .5, {opacity:0},'-=.25')
     .set('#backImg',{attr:{src:`../images/${ui.currentTarget.id}-img.jpg`}})
     .to('#backImg', 1, {opacity:1})
     .add(buildForAnimation(`#${ui.currentTarget.id}-content .subtabContent `));


   }

  },
    hide: { effect: 'fade', duration: 500 },
    show: { effect: 'fade', duration: 800 }
});
//
$('.subtabs').tabs({
 beforeActivate: function( ui ) {
   console.log( ui.currentTarget.hash,ui)
   let buildTL = gsap.timeline();
   buildTL.add(buildForAnimation(ui.currentTarget.hash));
   buildTL.restart();
   buildTL.play();

  },
 hide: { effect: 'fade', duration: 400 },
show: { effect: 'fade', duration: 400 }
});

// Scroll Effects


  function topGraphic(){
    let tl = gsap.timeline({ease: Linear.easeNone });
    // tl.from('#orange-box',.25,{opacity:0,scale:.1,ease:"elastic", transformOrigin:"50% 0%"},"-=.25")

  // 	step graphic

  tl.fromTo('.label-1',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:1}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1});
  tl.from('#talk-box',.5,{scale:0,width:0 , ease:'elastic.out', transformOrigin:'0 200'});
  tl.from('#pic-circle',.5,{scale:0,  ease:'elastic.out', transformOrigin:'50% 50%'},'-=.25');
  tl.from('#mainText',.5,{opacity:0});
  tl.to('.label-1',.25, {ease:'power',transformOrigin:'50% 50%',rotationX:90, opacity:0, delay:2});
  tl.fromTo('.label-2',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1});
  tl.from('#order-rect',.15,{opacity:0,width:0},'+=.15');
  tl.to('#order',.25,{fill:'#fff'},'-=.25');
  tl.from('#pink-line',.5,{opacity:0})
  tl.from('#pink-textbox',.5,{opacity:0,height:0, ease:'power3',transformOrigin:'50% 0'},'-=.25')
  tl.from('#pink-text',.4,{opacity:0},'-=.25')

  tl.to('.label-2',.25, {ease:'power',transformOrigin:'50% 50%',rotationX:90, opacity:0, delay:2})
  tl.fromTo('.label-3',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1})

  tl.from('#laptop-rect',.15,{opacity:0,width:0})
  tl.to('#laptop',.25,{fill:'#fff'},'-=.25')
  tl.from('#green-line',.5,{opacity:0})
  tl.from('#green-textbox',.5,{opacity:0,height:0, ease:'power3',transformOrigin:'50% 0'},'-=.25')
  tl.from('#green-text',.4,{opacity:0},'-=.25')

  tl.to('.label-3',.25, {ease:'power',transformOrigin:'50% 50%',rotationX:90, opacity:0, delay:2})
  tl.fromTo('.label-4',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1})

  tl.from('#me-rect',.15,{opacity:0,width:0})
  tl.to('#me',.25,{fill:'#fff'},'-=.25');
  tl.from('#orange-line',.5,{height:0,opacity:0})
  tl.from('#orange-textbox',.5,{opacity:0,height:0, ease:'power3',transformOrigin:'50% 0'},'-=.25');
  tl.from('.orange-text',.4,{opacity:0},'-=.25');
        tl.fromTo('.label-5',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1});

    tl.staggerFromTo(['#request-box','#get-box','#place-box','#send-box'], .5, {ease:'power',transformOrigin:'50% 50%',scale:.5, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',scale:1, opacity:0.5}, .25);
  // tl.from('#get-box',.5,{opacity:0,scale:.1,ease:"power", transformOrigin:"50% 50%",stagger: 0.5});
  // tl.from('#place-box',.5,{opacity:0,scale:.1,ease:"power", transformOrigin:"50% 50%",stagger: 0.5});
  // tl.from('#send-box',.5,{opacity:0,scale:.1,ease:"power", transformOrigin:"50% 50%",stagger: 0.5});

  // Request Box
  tl.to('#request-box',.5,{opacity:1}, '-=0.25');
  tl.from('#progress',.25,{width:0,transformOrigin:'50% 50%'})
  tl.from('#user',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'})
  tl.from('#checkmark-3',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'}, '-=0.25')
  tl.from('#arrow1',.5,{x:'-160.66', opacity:0, transformOrigin:'0 50%'}, '-=0.25');
  tl.to('#request-box',.5,{opacity:.5,ease:'power', transformOrigin:'50% 50%'}, '<');

  // Get Approval Box
  tl.to('#get-box',.5,{opacity:1}, '<');
  tl.from('#progressbar-2',.25,{width:0,transformOrigin:'50% 50%'})
  tl.from('#manager',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'})
  tl.from('#checkmark-2',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'}, '-=0.25')
  tl.from('#arrow2',.5,{x:'-160.66', opacity:0, transformOrigin:'0 50%'}, '-=0.25');
  tl.to(['#get-box','#arrow1'],.5,{opacity:.5,ease:'power', transformOrigin:'50% 50%'}, '<');


  // Place Order Box
  tl.to('#place-box',.5,{opacity:1}, '<');
  tl.from('#progressbar',.25,{width:0,transformOrigin:'50% 50%'})
  tl.from('#it',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'})
  tl.from('#checkmark',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'}, '-=0.25')
  tl.to(['#place-box','#arrow2'],.5,{opacity:.5,ease:'power', transformOrigin:'50% 50%'}, '-=0.25');
  tl.from('#arrow3',.5,{x:'-160.66', opacity:0, transformOrigin:'0 50%'}, '<');

  // Send Approval Box
  tl.to('#send-box',.25,{opacity:1}, '<');
  // user
  tl.from('#progress1',.25,{width:0,transformOrigin:'50% 50%'}, '-=0.25')
  tl.from('#user_sm',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'})
  tl.from('#checkmark1',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'}, '-=0.25')
  // manager
  tl.from('#progress2',.25,{width:0,transformOrigin:'50% 50%'}, '-=0.25')
  tl.from('#manager_sm',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'})
  tl.from('#checkmark2',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'}, '-=0.25')
  // it
  tl.from('#progress3',.25,{width:0,transformOrigin:'50% 50%'}, '-=0.25')
  tl.from('#it_sm',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'})
  tl.from('#checkmark3',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'}, '-=0.25')

    // return tl;
  }


  let stepGraphic = gsap.timeline({ease: Linear.easeNone });

  // animation Build
  //  bring in all of the boxes
  stepGraphic.fromTo('.label-5',1.3, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1});
  stepGraphic.staggerFromTo(['#request-box','#get-box','#place-box','#send-box'], 1, {ease:'power',transformOrigin:'50% 50%',scale:.5, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',scale:1, opacity:0.5}, .25);

  // Request Box
  stepGraphic.to('#request-box',.5,{opacity:1}, '-=0.25');
  stepGraphic.from('#progress',.25,{width:0,transformOrigin:'50% 50%'})
  stepGraphic.from('#user',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'})
  stepGraphic.from('#checkmark-3',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'}, '-=0.25')
  stepGraphic.from('#arrow1',.5,{x:'-160.66', opacity:0, transformOrigin:'0 50%'}, '-=0.25');
  stepGraphic.to('#request-box',.5,{opacity:.5,ease:'power', transformOrigin:'50% 50%'}, '<');

  // Get Approval Box
  stepGraphic.to('#get-box',.5,{opacity:1}, '<');
  stepGraphic.from('#progressbar-2',.25,{width:0,transformOrigin:'50% 50%'})
  stepGraphic.from('#manager',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'})
  stepGraphic.from('#checkmark-2',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'}, '-=0.25')
  stepGraphic.from('#arrow2',.5,{x:'-160.66', opacity:0, transformOrigin:'0 50%'}, '-=0.25');
  stepGraphic.to(['#get-box','#arrow1'],.5,{opacity:.5,ease:'power', transformOrigin:'50% 50%'}, '<');


  // Place Order Box
  stepGraphic.to('#place-box',.5,{opacity:1}, '<');
  stepGraphic.from('#progressbar',.25,{width:0,transformOrigin:'50% 50%'})
  stepGraphic.from('#it',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'})
  stepGraphic.from('#checkmark',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'}, '-=0.25')
  stepGraphic.to(['#place-box','#arrow2'],.5,{opacity:.5,ease:'power', transformOrigin:'50% 50%'}, '-=0.25');
  stepGraphic.from('#arrow3',.5,{x:'-160.66', opacity:0, transformOrigin:'0 50%'}, '<');

  // Send Approval Box
  stepGraphic.to('#send-box',.25,{opacity:1}, '<');
  // user
  stepGraphic.from('#progress1',.25,{width:0,transformOrigin:'50% 50%'}, '-=0.25')
  stepGraphic.from('#user_sm',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'})
  stepGraphic.from('#checkmark1',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'}, '-=0.25')
  // manager
  stepGraphic.from('#progress2',.25,{width:0,transformOrigin:'50% 50%'}, '-=0.25')
  stepGraphic.from('#manager_sm',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'})
  stepGraphic.from('#checkmark2',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'}, '-=0.25')
  // it
  stepGraphic.from('#progress3',.25,{width:0,transformOrigin:'50% 50%'}, '-=0.25')
  stepGraphic.from('#it_sm',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'})
  stepGraphic.from('#checkmark3',.5,{opacity:0,scale:.1,ease:'elastic', transformOrigin:'50% 50%'}, '-=0.25')





  let lastBox = gsap.timeline({ease:'power4'});

  lastBox.from('#circle_1',.5,{x:250,y:25, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'});
  lastBox.from('#slack_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  lastBox.from('#Slack',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');

  lastBox.from('#circle_2',.5,{x:250,y:225, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'},'<');
  lastBox.from('#workplace_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  lastBox.from('#Workplace_by_Facebook',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');

  lastBox.from('#circle_3',.5,{x:250,y:225, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'},'<');
  lastBox.from('#teams_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  lastBox.from('#Microsoft_Teams',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');

  lastBox.from('#circle_4',.5,{y:350, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'},'<');
  lastBox.from('#mobile_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  lastBox.from('#Now_Mobile',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');

  lastBox.from('#circle_5',.5,{x:-250,y:225, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'},'<');
  lastBox.from('#Service_portal_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  lastBox.from('#ServiceNow_Portals',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');

  lastBox.from('#circle_6',.5,{x:-250,y:25, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'},'<');
  lastBox.from('#web_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  lastBox.from('#Web_Pages',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');

  lastBox.from('#circle_7',.5,{x:-250,y:25, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '<');
  lastBox.from('#facebook_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  lastBox.from('#Facebook_Messanger',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');


    let mainGraphic = gsap.timeline({ease: Linear.easeNone });

    mainGraphic.fromTo('.label-1',1, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:1}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1});
    mainGraphic.from('#talk-box',.5,{scale:0,width:0 , ease:'elastic.out', transformOrigin:'0 200'});
    mainGraphic.from('#pic-circle',.5,{scale:0,  ease:'elastic.out', transformOrigin:'50% 50%'},'-=.25');
    mainGraphic.from('#mainText',.5,{opacity:0});
    mainGraphic.to('.label-1',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:90, opacity:0, delay:2});
    mainGraphic.fromTo('.label-2',1, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1});
    mainGraphic.from('#order-rect',.15,{opacity:0,width:0},'+=.15');
    mainGraphic.to('#order',.25,{fill:'#fff'},'-=.25');
    mainGraphic.from('#pink-line',.75,{opacity:0})
    mainGraphic.from('#pink-textbox',.75,{opacity:0,height:0, ease:'power3',transformOrigin:'50% 0'},'-=.25')
    mainGraphic.from('#pink-text',.4,{opacity:0},'-=.25')

    mainGraphic.to('.label-2',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:90, opacity:0, delay:2})
    mainGraphic.fromTo('.label-3',1, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1})

    mainGraphic.from('#laptop-rect',.15,{opacity:0,width:0})
    mainGraphic.to('#laptop',.25,{fill:'#fff'},'-=.25')
    mainGraphic.from('#green-line',.75,{opacity:0})
    mainGraphic.from('#green-textbox',.75,{opacity:0,height:0, ease:'power3',transformOrigin:'50% 0'},'-=.25')
    mainGraphic.from('#green-text',.4,{opacity:0},'-=.25')

    mainGraphic.to('.label-3',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:90, opacity:0, delay:2})
    mainGraphic.fromTo('.label-4',1, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1})

    mainGraphic.from('#me-rect',.15,{opacity:0,width:0})
    mainGraphic.to('#me',.25,{fill:'#fff'},'-=.25');
    mainGraphic.from('#orange-line',.75,{height:0,opacity:0})
    mainGraphic.from('#orange-textbox',.75,{opacity:0,height:0, ease:'power3',transformOrigin:'50% 0'},'-=.25');
    mainGraphic.from('.orange-text',.4,{opacity:0},'-=.25');
    // mainGraphic.add(stepGraphic);

    // let w = window.innerWidth;
    // // var tween = new TimelineMax();
    let controller;
    // let size = w > 1280 ? "big" : "small";
    // if (size === "big") {
    //   desktopPlay()
    //   // desktopPlay()
    //   // topGraphic()
    // } else {

    // }
    let stepDuration = 370;

function sizeIt() {
  w = window.innerWidth;
  var newSize = w > 1280 ? 'big' : 'small';
  if (newSize != size) {
    size = newSize;
    if (newSize === 'small') {
      console.log('The screen is now small - ScrollMagic has been destroyed by aliens.');
      // TweenMax.set("#target", { clearProps: "all" });
      // mainGraphic.add(stepGraphic);
      // topGraphic.seek(0)
      // topGraphic()
      // mobilePlay()
      controller.destroy(true);
    } else {
      console.log('The screen is now large - ScrollMagic is active.');
      // mainGraphic.remove(stepGraphic);
      // topGraphic.restart()
      // topGraphic.pause()
      // mainGraphic.restart().pause()
      // stepGraphic.seek(0);
      // controller.enabled(true);
      // desktopPlay()

    }
  }
}

// window.addEventListener("resize", sizeIt);


// function desktopPlay(){
controller = new ScrollMagic.Controller();
//
  let scene = new ScrollMagic.Scene({triggerElement: '#service-workflows-sec',triggerHook: .6, duration:'100%', offset:'100px'})
            scene.setTween(mainGraphic);
            scene.addTo(controller);


  // let scene2 = new ScrollMagic.Scene({triggerElement: '#service-workflows-sec',triggerHook: .1, duration:'80%', offset:'100px'})
  let scene2 = new ScrollMagic.Scene({triggerElement: '#service-workflows-sec',triggerHook: .1, duration:'80%', offset:'100px'})
            .setPin('#service-workflows-sec')// add indicators (requires plugin)
            .addTo(controller)
            // .addIndicators({name: "step pin"})
            // .setTween(stepGraphic)
            // .addTo(controller)



  let stepScene = new ScrollMagic.Scene({triggerElement: '#stepTrigger',triggerHook:0.27, duration:stepDuration , offset:'  2.5rem'} )
  stepScene.setTween(stepGraphic);
            stepScene.addTo(controller);
            // stepScene.addIndicators({name: "stepTrigger"})

  let lastScene = new ScrollMagic.Scene({triggerElement: '#connect-anywhere-sec', offset:'-80px'})
  lastScene.setTween(lastBox) 
  lastScene.addTo(controller);



          // }
  function mobilePlay(){

    let main = gsap.timeline();


    stepGraphic.seek(0)
        main.add(mainGraphic);
        // main.add(stepGraphic);

    // function trackProgress(){
    //   tl.progress()
    // }

  }


    function buildForAnimation(prefix){
      let tl = gsap.timeline();
          tl.set(`${prefix} #solution-text`,{opacity:0});
          tl.fromTo(`${prefix} #question-chat-bubble`,.25,{scale:0 , ease:'power4', transformOrigin:'0 200'},{scale:1 , ease:'power4', transformOrigin:'0 200'},.85);
          tl.fromTo(`${prefix} #avatar`,.5,{scale:0,  ease:'elastic.out', transformOrigin:'50% 50%'},{scale:1,  ease:'power4', transformOrigin:'50% 50%'},'-=.25');
          tl.fromTo(`${prefix} #question-text`,1,{opacity:0},{opacity:1},'-=.25');
          tl.fromTo(`${prefix} #top-line`,.15,{opacity:0},{opacity:1},'-=.75');

          tl.fromTo(`${prefix} #midrect`,.25,{scale:0,  ease:'power4', transformOrigin:'50% 50%'},{scale:1,  ease:'power4', transformOrigin:'50% 50%'},'-=.5');
          tl.fromTo(`${prefix} #mid-text`,.5,{opacity:0},{opacity:1},'-=.25');

          tl.fromTo(`${prefix} #bottom-line`,.15,{opacity:0},{opacity:1},'-=.25')
          tl.fromTo(`${prefix} #solution-chat-bubble`,.25,{scale:0, transformOrigin:'100% 200'},{scale:1, ease:'power4', transformOrigin:'100% 200'},'-=.25');
          tl.fromTo(`${prefix} #solution-text`,.5,{opacity:0},{opacity:1});
    }


  // main.add(stepGraphic());
  // main.add(lastBox());

  // let main = gsap.timeline({repeat: -1, repeatDelay:2});
  // let main = gsap.timeline();

  // main.add(topGraphic);
  // main.add(stepGraphic());
  // main.add(lastBox());


  // openParentTab();






});




// function openParentTab() {
//   locationHash = location.hash.substring(1);
//   console.log(locationHash);
//   // Check if we have an location Hash
//   if (locationHash) {
//     // Check if the location hash exsist.
//     var hash = $('#' + locationHash);
//     if (hash.length) {
//       // Check of the location Hash is inside a tab.
//       if (hash.closest('.tabContent').length) {
//         // Grab the index number of the parent tab so we can activate it
//         var tabNumber = hash.closest('.tabContent').index();
//         $('.tabs.fix').tabs({ active: tabNumber });
//         // Not need but this puts the focus on the selected hash
//         hash.get(0).scrollIntoView();
//         setTimeout(function () {
//           hash.get(0).scrollIntoView();
//         }, 1000);
//       }
//     }
//   }
// }
