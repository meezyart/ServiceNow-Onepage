// console.log('\'Allo \'Allo!');

// svg roll over color
// (function (b) {
//   var a = $(b);
//   a.each(function () {
//     var g = $(this);
//     var d = g.attr('id');
//     var f = g.attr('class');
//     var c = g.attr('src');
//     var h = g.attr('data-svg-color');
//     $.get(
//       c,
//       function (j) {
//         var i = $(j).find('svg');
//         if (typeof d !== 'undefined') {
//           i = i.attr('id', d);
//         }
//         if (typeof f !== 'undefined') {
//           i = i.attr('class', f + ' replaced-inlinesvg');
//         }
//         i.find('.elColorChange').each(function () {
//           $(this).addClass(h);
//         });
//         i = i.removeAttr('xmlns:a');
//         g.replaceWith(i);
//       },
//       'xml'
//     );
//   });
// })('.cus-logo-svg');

$(document).ready(function () {

  function topGraphic(){
    let tl = gsap.timeline({repeat:-1,repeatDelay:6});

    tl.fromTo('.label-1',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1});

      tl.from('#talk-box',.5,{scale:0,width:0 , ease:'elastic.out', transformOrigin:'0 200'});
    tl.from('#pic-circle',.5,{scale:0,  ease:'elastic.out', transformOrigin:'50% 50%'},'-=.25');
    tl.from('#mainText',1,{opacity:0});

      tl.to('.label-1',.25, {ease:'power',transformOrigin:'50% 50%',rotationX:90, opacity:0, delay:2});
      tl.fromTo('.label-2',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1});

    tl.from('#order-rect',.15,{opacity:0,width:0},'+=.15');
    tl.to('#order',.25,{fill:'#fff'},'-=.25');
    tl.from('#pink-line',.5,{opacity:0})
    tl.from('#pink-textbox',.5,{opacity:0,height:0, ease:'power3',transformOrigin:'50% 0'},'-=.25');
    tl.from('#pink-text',.4,{opacity:0},'-=.25');

    tl.to('.label-2',.25, {ease:'power',transformOrigin:'50% 50%',rotationX:90, opacity:0, delay:2});
      tl.fromTo('.label-3',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1});

    tl.from('#laptop-rect',.15,{opacity:0,width:0});
    tl.to('#laptop',.25,{fill:'#fff'},'-=.25');
    tl.from('#green-line',.5,{opacity:0})
        tl.from('#green-textbox',.5,{opacity:0,height:0, ease:'power3',transformOrigin:'50% 0'},'-=.25');
    tl.from('#green-text',.4,{opacity:0},'-=.25');

    tl.to('.label-3',.25, {ease:'power',transformOrigin:'50% 50%',rotationX:90, opacity:0, delay:2});
      tl.fromTo('.label-4',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1});

    tl.from('#me-rect',.15,{opacity:0,width:0});
    tl.to('#me',.25,{fill:'#fff'},'-=.25');
    tl.from('#orange-line',.5,{height:0,opacity:0})
      tl.from('#orange-textbox',.5,{opacity:0,height:0, ease:'power3',transformOrigin:'50% 0'},'-=.25');
    tl.from('.orange-text',.4,{opacity:0},'-=.25');
        tl.fromTo('.label-5',.5, {ease:'power',transformOrigin:'50% 50%',rotationX:180, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',rotationX:0, opacity:1});



    tl.staggerFromTo(['#request-box','#get-box','#place-box','#send-box'], .5, {ease:'power',transformOrigin:'50% 50%',scale:.5, opacity:0}, {ease:'power4',transformOrigin:'50% 50%',scale:1, opacity:0.5}, .25);

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
  }

  function stepGraphic(){
    let tl = gsap.timeline();

  // animation Build
  //  bring in all of the boxes

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

  }

  function lastBox(){


    let tl = gsap.timeline({repeat: -1, repeatDelay:2, ease:'power4'});
  // tl.to(['#send-box','#arrow3'],.5,{opacity:.5,ease:"power", transformOrigin:"50% 50%",delay: "-=0.75"});



  tl.from('#circle_1',.5,{x:250,y:25, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'});
  tl.from('#slack_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  tl.from('#Slack',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');

  tl.from('#circle_2',.5,{x:250,y:225, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'},'<');
  tl.from('#workplace_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  tl.from('#Workplace_by_Facebook',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');

  tl.from('#circle_3',.5,{x:250,y:225, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'},'<');
  tl.from('#teams_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  tl.from('#Microsoft_Teams',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');

  tl.from('#circle_4',.5,{y:350, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'},'<');
  tl.from('#mobile_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  tl.from('#Now_Mobile',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');

  tl.from('#circle_5',.5,{x:-250,y:225, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'},'<');
  tl.from('#Service_portal_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  tl.from('#ServiceNow_Portals',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');

  tl.from('#circle_6',.5,{x:-250,y:25, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'},'<');
  tl.from('#web_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  tl.from('#Web_Pages',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');

  tl.from('#circle_7',.5,{x:-250,y:25, opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '<');
  tl.from('#facebook_Image',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.25');
  tl.from('#Facebook_Messanger',.5,{opacity:0,scale:.1,ease:'power4', transformOrigin:'50% 50%'}, '-=0.5');
  }

  let main = gsap.timeline({repeat: -1, repeatDelay:2});

  // main.add(topGraphic());
  // main.add(stepGraphic());
  // main.add(lastBox());

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
        .add(buildForAnimation(`#${ui.currentTarget.id}-content .subtabContent`));
      }

     },
       hide: { effect: 'fade', duration: 500 },
       show: { effect: 'fade', duration: 800 }
  });
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
  // openParentTab();






});

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
