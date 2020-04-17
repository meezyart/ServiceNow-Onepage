"use strict";

$(document).ready(function () {
  gsap.defaultEase = Linear.easeNone; // build-scenario tabs

  $('.build-scenario-tabs').tabs({
    hide: {
      effect: 'fade',
      duration: 500
    },
    show: {
      effect: 'fade',
      duration: 800
    }
  }); // Start Quickly tabs

  $('.start-quickly-tabs').tabs({
    beforeActivate: function beforeActivate(ui) {
      console.log(ui.currentTarget.id, ui);

      if (ui.currentTarget.id) {
        var tl = gsap.timeline();
        tl.to('#backImg', .5, {
          opacity: 0
        }, '-=.25').set('#backImg', {
          attr: {
            src: "../images/".concat(ui.currentTarget.id, "-img.jpg")
          }
        }).to('#backImg', 1, {
          opacity: 1
        }).add(buildForAnimation("#".concat(ui.currentTarget.id, "-content .subtabContent ")));
      }
    },
    hide: {
      effect: 'fade',
      duration: 500
    },
    show: {
      effect: 'fade',
      duration: 800
    }
  }); //

  $('.subtabs').tabs({
    beforeActivate: function beforeActivate(ui) {
      console.log(ui.currentTarget.hash, ui);
      var buildTL = gsap.timeline();
      buildTL.add(buildForAnimation(ui.currentTarget.hash));
      buildTL.restart();
      buildTL.play();
    },
    hide: {
      effect: 'fade',
      duration: 400
    },
    show: {
      effect: 'fade',
      duration: 400
    }
  }); // Scroll Effects

  function topGraphic() {
    var tl = gsap.timeline({
      ease: Linear.easeNone
    }); // tl.from('#orange-box',.25,{opacity:0,scale:.1,ease:"elastic", transformOrigin:"50% 0%"},"-=.25")
    // 	step graphic

    tl.fromTo('.label-1', .5, {
      ease: 'power',
      transformOrigin: '50% 50%',
      rotationX: 180,
      opacity: 1
    }, {
      ease: 'power4',
      transformOrigin: '50% 50%',
      rotationX: 0,
      opacity: 1
    });
    tl.from('#talk-box', .5, {
      scale: 0,
      width: 0,
      ease: 'elastic.out',
      transformOrigin: '0 200'
    });
    tl.from('#pic-circle', .5, {
      scale: 0,
      ease: 'elastic.out',
      transformOrigin: '50% 50%'
    }, '-=.25');
    tl.from('#mainText', .5, {
      opacity: 0
    });
    tl.to('.label-1', .25, {
      ease: 'power',
      transformOrigin: '50% 50%',
      rotationX: 90,
      opacity: 0,
      delay: 2
    });
    tl.fromTo('.label-2', .5, {
      ease: 'power',
      transformOrigin: '50% 50%',
      rotationX: 180,
      opacity: 0
    }, {
      ease: 'power4',
      transformOrigin: '50% 50%',
      rotationX: 0,
      opacity: 1
    });
    tl.from('#order-rect', .15, {
      opacity: 0,
      width: 0
    }, '+=.15');
    tl.to('#order', .25, {
      fill: '#fff'
    }, '-=.25');
    tl.from('#pink-line', .5, {
      opacity: 0
    });
    tl.from('#pink-textbox', .5, {
      opacity: 0,
      height: 0,
      ease: 'power3',
      transformOrigin: '50% 0'
    }, '-=.25');
    tl.from('#pink-text', .4, {
      opacity: 0
    }, '-=.25');
    tl.to('.label-2', .25, {
      ease: 'power',
      transformOrigin: '50% 50%',
      rotationX: 90,
      opacity: 0,
      delay: 2
    });
    tl.fromTo('.label-3', .5, {
      ease: 'power',
      transformOrigin: '50% 50%',
      rotationX: 180,
      opacity: 0
    }, {
      ease: 'power4',
      transformOrigin: '50% 50%',
      rotationX: 0,
      opacity: 1
    });
    tl.from('#laptop-rect', .15, {
      opacity: 0,
      width: 0
    });
    tl.to('#laptop', .25, {
      fill: '#fff'
    }, '-=.25');
    tl.from('#green-line', .5, {
      opacity: 0
    });
    tl.from('#green-textbox', .5, {
      opacity: 0,
      height: 0,
      ease: 'power3',
      transformOrigin: '50% 0'
    }, '-=.25');
    tl.from('#green-text', .4, {
      opacity: 0
    }, '-=.25');
    tl.to('.label-3', .25, {
      ease: 'power',
      transformOrigin: '50% 50%',
      rotationX: 90,
      opacity: 0,
      delay: 2
    });
    tl.fromTo('.label-4', .5, {
      ease: 'power',
      transformOrigin: '50% 50%',
      rotationX: 180,
      opacity: 0
    }, {
      ease: 'power4',
      transformOrigin: '50% 50%',
      rotationX: 0,
      opacity: 1
    });
    tl.from('#me-rect', .15, {
      opacity: 0,
      width: 0
    });
    tl.to('#me', .25, {
      fill: '#fff'
    }, '-=.25');
    tl.from('#orange-line', .5, {
      height: 0,
      opacity: 0
    });
    tl.from('#orange-textbox', .5, {
      opacity: 0,
      height: 0,
      ease: 'power3',
      transformOrigin: '50% 0'
    }, '-=.25');
    tl.from('.orange-text', .4, {
      opacity: 0
    }, '-=.25');
    tl.fromTo('.label-5', .5, {
      ease: 'power',
      transformOrigin: '50% 50%',
      rotationX: 180,
      opacity: 0
    }, {
      ease: 'power4',
      transformOrigin: '50% 50%',
      rotationX: 0,
      opacity: 1
    });
    tl.staggerFromTo(['#request-box', '#get-box', '#place-box', '#send-box'], .5, {
      ease: 'power',
      transformOrigin: '50% 50%',
      scale: .5,
      opacity: 0
    }, {
      ease: 'power4',
      transformOrigin: '50% 50%',
      scale: 1,
      opacity: 0.5
    }, .25); // tl.from('#get-box',.5,{opacity:0,scale:.1,ease:"power", transformOrigin:"50% 50%",stagger: 0.5});
    // tl.from('#place-box',.5,{opacity:0,scale:.1,ease:"power", transformOrigin:"50% 50%",stagger: 0.5});
    // tl.from('#send-box',.5,{opacity:0,scale:.1,ease:"power", transformOrigin:"50% 50%",stagger: 0.5});
    // Request Box

    tl.to('#request-box', .5, {
      opacity: 1
    }, '-=0.25');
    tl.from('#progress', .25, {
      width: 0,
      transformOrigin: '50% 50%'
    });
    tl.from('#user', .5, {
      opacity: 0,
      scale: .1,
      ease: 'elastic',
      transformOrigin: '50% 50%'
    });
    tl.from('#checkmark-3', .5, {
      opacity: 0,
      scale: .1,
      ease: 'elastic',
      transformOrigin: '50% 50%'
    }, '-=0.25');
    tl.from('#arrow1', .5, {
      x: '-160.66',
      opacity: 0,
      transformOrigin: '0 50%'
    }, '-=0.25');
    tl.to('#request-box', .5, {
      opacity: .5,
      ease: 'power',
      transformOrigin: '50% 50%'
    }, '<'); // Get Approval Box

    tl.to('#get-box', .5, {
      opacity: 1
    }, '<');
    tl.from('#progressbar-2', .25, {
      width: 0,
      transformOrigin: '50% 50%'
    });
    tl.from('#manager', .5, {
      opacity: 0,
      scale: .1,
      ease: 'elastic',
      transformOrigin: '50% 50%'
    });
    tl.from('#checkmark-2', .5, {
      opacity: 0,
      scale: .1,
      ease: 'elastic',
      transformOrigin: '50% 50%'
    }, '-=0.25');
    tl.from('#arrow2', .5, {
      x: '-160.66',
      opacity: 0,
      transformOrigin: '0 50%'
    }, '-=0.25');
    tl.to(['#get-box', '#arrow1'], .5, {
      opacity: .5,
      ease: 'power',
      transformOrigin: '50% 50%'
    }, '<'); // Place Order Box

    tl.to('#place-box', .5, {
      opacity: 1
    }, '<');
    tl.from('#progressbar', .25, {
      width: 0,
      transformOrigin: '50% 50%'
    });
    tl.from('#it', .5, {
      opacity: 0,
      scale: .1,
      ease: 'elastic',
      transformOrigin: '50% 50%'
    });
    tl.from('#checkmark', .5, {
      opacity: 0,
      scale: .1,
      ease: 'elastic',
      transformOrigin: '50% 50%'
    }, '-=0.25');
    tl.to(['#place-box', '#arrow2'], .5, {
      opacity: .5,
      ease: 'power',
      transformOrigin: '50% 50%'
    }, '-=0.25');
    tl.from('#arrow3', .5, {
      x: '-160.66',
      opacity: 0,
      transformOrigin: '0 50%'
    }, '<'); // Send Approval Box

    tl.to('#send-box', .25, {
      opacity: 1
    }, '<'); // user

    tl.from('#progress1', .25, {
      width: 0,
      transformOrigin: '50% 50%'
    }, '-=0.25');
    tl.from('#user_sm', .5, {
      opacity: 0,
      scale: .1,
      ease: 'elastic',
      transformOrigin: '50% 50%'
    });
    tl.from('#checkmark1', .5, {
      opacity: 0,
      scale: .1,
      ease: 'elastic',
      transformOrigin: '50% 50%'
    }, '-=0.25'); // manager

    tl.from('#progress2', .25, {
      width: 0,
      transformOrigin: '50% 50%'
    }, '-=0.25');
    tl.from('#manager_sm', .5, {
      opacity: 0,
      scale: .1,
      ease: 'elastic',
      transformOrigin: '50% 50%'
    });
    tl.from('#checkmark2', .5, {
      opacity: 0,
      scale: .1,
      ease: 'elastic',
      transformOrigin: '50% 50%'
    }, '-=0.25'); // it

    tl.from('#progress3', .25, {
      width: 0,
      transformOrigin: '50% 50%'
    }, '-=0.25');
    tl.from('#it_sm', .5, {
      opacity: 0,
      scale: .1,
      ease: 'elastic',
      transformOrigin: '50% 50%'
    });
    tl.from('#checkmark3', .5, {
      opacity: 0,
      scale: .1,
      ease: 'elastic',
      transformOrigin: '50% 50%'
    }, '-=0.25');
  }

  var stepGraphic = gsap.timeline({
    ease: Linear.easeNone
  }); // animation Build
  //  bring in all of the boxes

  stepGraphic.fromTo('.label-5', 1.3, {
    ease: 'power',
    transformOrigin: '50% 50%',
    rotationX: 180,
    opacity: 0
  }, {
    ease: 'power4',
    transformOrigin: '50% 50%',
    rotationX: 0,
    opacity: 1
  });
  stepGraphic.staggerFromTo(['#request-box', '#get-box', '#place-box', '#send-box'], 1, {
    ease: 'power',
    transformOrigin: '50% 50%',
    scale: .5,
    opacity: 0
  }, {
    ease: 'power4',
    transformOrigin: '50% 50%',
    scale: 1,
    opacity: 0.5
  }, .25); // Request Box

  stepGraphic.to('#request-box', .5, {
    opacity: 1
  }, '-=0.25');
  stepGraphic.from('#progress', .25, {
    width: 0,
    transformOrigin: '50% 50%'
  });
  stepGraphic.from('#user', .5, {
    opacity: 0,
    scale: .1,
    ease: 'elastic',
    transformOrigin: '50% 50%'
  });
  stepGraphic.from('#checkmark-3', .5, {
    opacity: 0,
    scale: .1,
    ease: 'elastic',
    transformOrigin: '50% 50%'
  }, '-=0.25');
  stepGraphic.from('#arrow1', .5, {
    x: '-160.66',
    opacity: 0,
    transformOrigin: '0 50%'
  }, '-=0.25');
  stepGraphic.to('#request-box', .5, {
    opacity: .5,
    ease: 'power',
    transformOrigin: '50% 50%'
  }, '<'); // Get Approval Box

  stepGraphic.to('#get-box', .5, {
    opacity: 1
  }, '<');
  stepGraphic.from('#progressbar-2', .25, {
    width: 0,
    transformOrigin: '50% 50%'
  });
  stepGraphic.from('#manager', .5, {
    opacity: 0,
    scale: .1,
    ease: 'elastic',
    transformOrigin: '50% 50%'
  });
  stepGraphic.from('#checkmark-2', .5, {
    opacity: 0,
    scale: .1,
    ease: 'elastic',
    transformOrigin: '50% 50%'
  }, '-=0.25');
  stepGraphic.from('#arrow2', .5, {
    x: '-160.66',
    opacity: 0,
    transformOrigin: '0 50%'
  }, '-=0.25');
  stepGraphic.to(['#get-box', '#arrow1'], .5, {
    opacity: .5,
    ease: 'power',
    transformOrigin: '50% 50%'
  }, '<'); // Place Order Box

  stepGraphic.to('#place-box', .5, {
    opacity: 1
  }, '<');
  stepGraphic.from('#progressbar', .25, {
    width: 0,
    transformOrigin: '50% 50%'
  });
  stepGraphic.from('#it', .5, {
    opacity: 0,
    scale: .1,
    ease: 'elastic',
    transformOrigin: '50% 50%'
  });
  stepGraphic.from('#checkmark', .5, {
    opacity: 0,
    scale: .1,
    ease: 'elastic',
    transformOrigin: '50% 50%'
  }, '-=0.25');
  stepGraphic.to(['#place-box', '#arrow2'], .5, {
    opacity: .5,
    ease: 'power',
    transformOrigin: '50% 50%'
  }, '-=0.25');
  stepGraphic.from('#arrow3', .5, {
    x: '-160.66',
    opacity: 0,
    transformOrigin: '0 50%'
  }, '<'); // Send Approval Box

  stepGraphic.to('#send-box', .25, {
    opacity: 1
  }, '<'); // user

  stepGraphic.from('#progress1', .25, {
    width: 0,
    transformOrigin: '50% 50%'
  }, '-=0.25');
  stepGraphic.from('#user_sm', .5, {
    opacity: 0,
    scale: .1,
    ease: 'elastic',
    transformOrigin: '50% 50%'
  });
  stepGraphic.from('#checkmark1', .5, {
    opacity: 0,
    scale: .1,
    ease: 'elastic',
    transformOrigin: '50% 50%'
  }, '-=0.25'); // manager

  stepGraphic.from('#progress2', .25, {
    width: 0,
    transformOrigin: '50% 50%'
  }, '-=0.25');
  stepGraphic.from('#manager_sm', .5, {
    opacity: 0,
    scale: .1,
    ease: 'elastic',
    transformOrigin: '50% 50%'
  });
  stepGraphic.from('#checkmark2', .5, {
    opacity: 0,
    scale: .1,
    ease: 'elastic',
    transformOrigin: '50% 50%'
  }, '-=0.25'); // it

  stepGraphic.from('#progress3', .25, {
    width: 0,
    transformOrigin: '50% 50%'
  }, '-=0.25');
  stepGraphic.from('#it_sm', .5, {
    opacity: 0,
    scale: .1,
    ease: 'elastic',
    transformOrigin: '50% 50%'
  });
  stepGraphic.from('#checkmark3', .5, {
    opacity: 0,
    scale: .1,
    ease: 'elastic',
    transformOrigin: '50% 50%'
  }, '-=0.25');
  var lastBox = gsap.timeline({
    ease: 'power4'
  });
  lastBox.from('#circle_1', .5, {
    x: 250,
    y: 25,
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  });
  lastBox.from('#slack_Image', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.25');
  lastBox.from('#Slack', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.5');
  lastBox.from('#circle_2', .5, {
    x: 250,
    y: 225,
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '<');
  lastBox.from('#workplace_Image', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.25');
  lastBox.from('#Workplace_by_Facebook', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.5');
  lastBox.from('#circle_3', .5, {
    x: 250,
    y: 225,
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '<');
  lastBox.from('#teams_Image', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.25');
  lastBox.from('#Microsoft_Teams', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.5');
  lastBox.from('#circle_4', .5, {
    y: 350,
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '<');
  lastBox.from('#mobile_Image', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.25');
  lastBox.from('#Now_Mobile', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.5');
  lastBox.from('#circle_5', .5, {
    x: -250,
    y: 225,
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '<');
  lastBox.from('#Service_portal_Image', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.25');
  lastBox.from('#ServiceNow_Portals', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.5');
  lastBox.from('#circle_6', .5, {
    x: -250,
    y: 25,
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '<');
  lastBox.from('#web_Image', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.25');
  lastBox.from('#Web_Pages', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.5');
  lastBox.from('#circle_7', .5, {
    x: -250,
    y: 25,
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '<');
  lastBox.from('#facebook_Image', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.25');
  lastBox.from('#Facebook_Messanger', .5, {
    opacity: 0,
    scale: .1,
    ease: 'power4',
    transformOrigin: '50% 50%'
  }, '-=0.5');
  var mainGraphic = gsap.timeline({
    ease: Linear.easeNone
  });
  mainGraphic.fromTo('.label-1', 1, {
    ease: 'power',
    transformOrigin: '50% 50%',
    rotationX: 180,
    opacity: 1
  }, {
    ease: 'power4',
    transformOrigin: '50% 50%',
    rotationX: 0,
    opacity: 1
  });
  mainGraphic.from('#talk-box', .5, {
    scale: 0,
    width: 0,
    ease: 'elastic.out',
    transformOrigin: '0 200'
  });
  mainGraphic.from('#pic-circle', .5, {
    scale: 0,
    ease: 'elastic.out',
    transformOrigin: '50% 50%'
  }, '-=.25');
  mainGraphic.from('#mainText', .5, {
    opacity: 0
  });
  mainGraphic.to('.label-1', .5, {
    ease: 'power',
    transformOrigin: '50% 50%',
    rotationX: 90,
    opacity: 0,
    delay: 2
  });
  mainGraphic.fromTo('.label-2', 1, {
    ease: 'power',
    transformOrigin: '50% 50%',
    rotationX: 180,
    opacity: 0
  }, {
    ease: 'power4',
    transformOrigin: '50% 50%',
    rotationX: 0,
    opacity: 1
  });
  mainGraphic.from('#order-rect', .15, {
    opacity: 0,
    width: 0
  }, '+=.15');
  mainGraphic.to('#order', .25, {
    fill: '#fff'
  }, '-=.25');
  mainGraphic.from('#pink-line', .75, {
    opacity: 0
  });
  mainGraphic.from('#pink-textbox', .75, {
    opacity: 0,
    height: 0,
    ease: 'power3',
    transformOrigin: '50% 0'
  }, '-=.25');
  mainGraphic.from('#pink-text', .4, {
    opacity: 0
  }, '-=.25');
  mainGraphic.to('.label-2', .5, {
    ease: 'power',
    transformOrigin: '50% 50%',
    rotationX: 90,
    opacity: 0,
    delay: 2
  });
  mainGraphic.fromTo('.label-3', 1, {
    ease: 'power',
    transformOrigin: '50% 50%',
    rotationX: 180,
    opacity: 0
  }, {
    ease: 'power4',
    transformOrigin: '50% 50%',
    rotationX: 0,
    opacity: 1
  });
  mainGraphic.from('#laptop-rect', .15, {
    opacity: 0,
    width: 0
  });
  mainGraphic.to('#laptop', .25, {
    fill: '#fff'
  }, '-=.25');
  mainGraphic.from('#green-line', .75, {
    opacity: 0
  });
  mainGraphic.from('#green-textbox', .75, {
    opacity: 0,
    height: 0,
    ease: 'power3',
    transformOrigin: '50% 0'
  }, '-=.25');
  mainGraphic.from('#green-text', .4, {
    opacity: 0
  }, '-=.25');
  mainGraphic.to('.label-3', .5, {
    ease: 'power',
    transformOrigin: '50% 50%',
    rotationX: 90,
    opacity: 0,
    delay: 2
  });
  mainGraphic.fromTo('.label-4', 1, {
    ease: 'power',
    transformOrigin: '50% 50%',
    rotationX: 180,
    opacity: 0
  }, {
    ease: 'power4',
    transformOrigin: '50% 50%',
    rotationX: 0,
    opacity: 1
  });
  mainGraphic.from('#me-rect', .15, {
    opacity: 0,
    width: 0
  });
  mainGraphic.to('#me', .25, {
    fill: '#fff'
  }, '-=.25');
  mainGraphic.from('#orange-line', .75, {
    height: 0,
    opacity: 0
  });
  mainGraphic.from('#orange-textbox', .75, {
    opacity: 0,
    height: 0,
    ease: 'power3',
    transformOrigin: '50% 0'
  }, '-=.25');
  mainGraphic.from('.orange-text', .4, {
    opacity: 0
  }, '-=.25'); // // var tween = new TimelineMax();

  var controller; // let size = w > 1280 ? "big" : "small";
  // if (size === "big") {
  //   desktopPlay()
  //   // desktopPlay()
  //   // topGraphic()
  // } else {
  // }

  var stepDuration = 370;

  function sizeIt() {
    w = window.innerWidth;
    var newSize = w > 1280 ? 'big' : 'small';

    if (newSize != size) {
      size = newSize;

      if (newSize === 'small') {
        console.log('The screen is now small - ScrollMagic has been destroyed by aliens.'); // TweenMax.set("#target", { clearProps: "all" });
        // mainGraphic.add(stepGraphic);
        // topGraphic.seek(0)
        // topGraphic()
        // mobilePlay()

        controller.destroy(true);
      } else {
        console.log('The screen is now large - ScrollMagic is active.'); // mainGraphic.remove(stepGraphic);
        // topGraphic.restart()
        // topGraphic.pause()
        // mainGraphic.restart().pause()
        // stepGraphic.seek(0);
        // controller.enabled(true);
        // desktopPlay()
      }
    }
  } // window.addEventListener("resize", sizeIt);


  controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: '#service-workflows-sec',
    triggerHook: .6,
    duration: '100%',
    offset: '100px'
  });
  scene.setTween(mainGraphic);
  scene.addTo(controller);
  var scene2 = new ScrollMagic.Scene({
    triggerElement: '#service-workflows-sec',
    triggerHook: .2,
    duration: '80%',
    offset: '100px'
  }).setPin('#service-workflows-sec') // add indicators (requires plugin)
  .addTo(controller); // .addIndicators({name: "step pin"})

  var stepScene = new ScrollMagic.Scene({
    triggerElement: '#stepTrigger',
    triggerHook: 0.37,
    duration: stepDuration,
    offset: '  -.5rem'
  });
  stepScene.setTween(stepGraphic);
  stepScene.addTo(controller); // stepScene.addIndicators({name: "stepTrigger"})

  var lastScene = new ScrollMagic.Scene({
    triggerElement: '#connect-anywhere-sec',
    offset: '-80px'
  });
  lastScene.setTween(lastBox);
  lastScene.addTo(controller);

  function buildForAnimation(prefix) {
    var tl = gsap.timeline();
    tl.set("".concat(prefix, " #solution-text"), {
      opacity: 0
    });
    tl.fromTo("".concat(prefix, " #question-chat-bubble"), .25, {
      scale: 0,
      ease: 'power4',
      transformOrigin: '0 200'
    }, {
      scale: 1,
      ease: 'power4',
      transformOrigin: '0 200'
    }, .85);
    tl.fromTo("".concat(prefix, " #avatar"), .5, {
      scale: 0,
      ease: 'elastic.out',
      transformOrigin: '50% 50%'
    }, {
      scale: 1,
      ease: 'power4',
      transformOrigin: '50% 50%'
    }, '-=.25');
    tl.fromTo("".concat(prefix, " #question-text"), 1, {
      opacity: 0
    }, {
      opacity: 1
    }, '-=.25');
    tl.fromTo("".concat(prefix, " #top-line"), .15, {
      opacity: 0
    }, {
      opacity: 1
    }, '-=.75');
    tl.fromTo("".concat(prefix, " #midrect"), .25, {
      scale: 0,
      ease: 'power4',
      transformOrigin: '50% 50%'
    }, {
      scale: 1,
      ease: 'power4',
      transformOrigin: '50% 50%'
    }, '-=.5');
    tl.fromTo("".concat(prefix, " #mid-text"), .5, {
      opacity: 0
    }, {
      opacity: 1
    }, '-=.25');
    tl.fromTo("".concat(prefix, " #bottom-line"), .15, {
      opacity: 0
    }, {
      opacity: 1
    }, '-=.25');
    tl.fromTo("".concat(prefix, " #solution-chat-bubble"), .25, {
      scale: 0,
      transformOrigin: '100% 200'
    }, {
      scale: 1,
      ease: 'power4',
      transformOrigin: '100% 200'
    }, '-=.25');
    tl.fromTo("".concat(prefix, " #solution-text"), .5, {
      opacity: 0
    }, {
      opacity: 1
    });
  } // main.add(stepGraphic());
  // main.add(lastBox());
  // let main = gsap.timeline({repeat: -1, repeatDelay:2});
  // let main = gsap.timeline();
  // main.add(topGraphic);
  // main.add(stepGraphic());
  // main.add(lastBox());
  // openParentTab();

}); // function openParentTab() {
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
"use strict";

if (document.querySelector('.sNowGlobalNav')) {
  var toggleWorkflow = function toggleWorkflow(e) {
    var t = $('.workflows.' + $(e).attr('rel'));

    for ($('.workflows, .workflows li').removeClass('active').removeAttr('style'); 'block' !== t.css('display');) {
      t.attr('style', 'display:block');
    }

    t.find('li:first-child').addClass('active');
  };

  var togglePromo = function togglePromo(e) {
    for (var t = $('.' + $(e).attr('rel')); $('.promo-block.active').length;) {
      $('.promo-block.active').removeClass('active');
    }

    if ($('.promo-block').removeAttr('style'), $('#meganav18.mobile').length) for (; 'block' !== t.css('display');) {
      t.css('display', 'block');
    }
    t.addClass('active').scrollTop(0);
  };

  var navigateBack = function navigateBack() {
    var e = $('.marquee-nav .column:not([for="overview"]).active');
    if (!e.length) return $('#js-nav-back').addClass('active'), !0;

    if (e.toArray().some(function (e) {
      if ($(e).hasClass('promo-block')) return !0;
    })) {
      $('.promo-block.active').css('margin-left', '10vw'), setTimeout(function () {
        $('.promo-block.active').removeClass('active').removeAttr('style');
      }, 300);
      var t = $('.workflows.active').attr('class').split(' ');
      t = t[t.reIndexOf(/-workflows$/g)], $('[for="overview"]').find('.' + t).addClass('active'), $('.workflows.active').addClass('none-selected'), $('.workflows').find('li.active').removeClass('active');
    } else {
      var n = $(e.toArray().pop()).attr('class');
      n = n.slice(0, n.indexOf(' ')), $('.' + n + ', li[rel=' + n + ']').removeClass('active');
    }

    return !1;
  };

  var mousePosition = function mousePosition(e, t) {
    this.start = e, this.end = t;
  };

  $(document).ready(function () {
    $('.nav-toggle').on('click', function () {
      var e = $('#meganav18').hasClass('search');
      if (e && $('#dismiss-search').click(), $('#topNavLinks').is(':visible') && !e) $('#dismiss-nav').click();else {
        for (; !$('#meganav18').hasClass('mobile');) {
          $('#meganav18').addClass('mobile');
        }

        setTimeout(function () {
          $('#meganav18').addClass('open');
        }, 50), setTimeout(function () {
          $('#topNavLinks').addClass('scroll');
        }, 300);
      }
    }), $(window).resize(function () {
      var e;
      void 0 !== $('#meganav18.mobile')[0] ? window.innerWidth > 767 ? ($('#meganav18').removeClass('mobile'), $('#topNavLinks').removeAttr('style').removeClass('navMinimized'), $('.marquee-nav.active').length || $('#meganav18').removeClass('open'), $('#solutionsNav').hasClass('active') && !$('.workflows.active').length ? $('li[rel="solutionsNav"]').removeClass('active').click() : $('#solutionsNav').hasClass('active') && !$('.workflows li.active').length && togglePromo($('.solution-areas li.active'))) : ($('.marquee-nav.active').addClass('disableTransition'), clearTimeout(e), e = setTimeout(function () {
        $('.marquee-nav.active').removeClass('disableTransition');
      }, 100)) : window.innerWidth <= 767 && ($('.marquee-nav.active')[0] ? ($('#meganav18').addClass('mobile open'), $('#topNavLinks').removeAttr('style').addClass('navMinimized')) : $('#meganav18').hasClass('search') && $('#meganav18').addClass('mobile'));
    });

    var e,
        t = document.getElementById('meganav18'),
        n = document.getElementById('dismiss-nav'),
        o = 0,
        a = function a(e, n, _a) {
      e < o && e < 1 ? (t.classList.remove('fixed-meganav', 'visible-meganav'), document.body.classList.remove('primarynav-open')) : e < o && e > 81 ? t.classList.add('fixed-meganav', 'visible-meganav') : e > o && ('function' == typeof _a || !(n.opacity > 0)) && e > 80 && (t.classList.remove('visible-meganav'), document.body.classList.remove('primarynav-open'), t.classList.add('fixed-meganav'), 'function' == typeof _a && _a());
    };

    window.addEventListener('scroll', function (e) {
      var l = this.pageYOffset,
          i = getComputedStyle(n),
          s = window.innerWidth;
      if (t.classList.contains('open') || t.classList.contains('search')) {
        if (s > 767) a(l, i, function () {
          n.click();
        });else {
          if (document.querySelector('.in-page-navigation-component')) !!document.querySelector('.in-page-navigation-component').classList.contains('in-page-sticky') && a(l, i, function () {
            n.click();
          });
          a(l, i, null);
        }
      } else a(l, i, null);
      o = l;
    });
    $('#dismiss-nav').on('click', function (e) {
      'mouseover' === e.type && $('#meganav18.mobile').length || ($('#meganav18.mobile').length && $('#topNavLinks').slideUp(100, function (e) {
        $('#meganav18').removeClass('mobile open search'), $('#navbar').removeClass('search'), $(this).removeAttr('style').removeClass('scroll');
      }), $('.marquee-nav.active').stop().removeAttr('style').animate({
        height: 0
      }, {
        duration: 300,
        queue: !1,
        start: function start() {
          $(this).addClass('closing'), $('#meganav18').removeClass('mobile open');
        },
        complete: function complete() {
          $('#topNavLinks').removeClass('navMinimized').removeAttr('style'), $('#meganav18 .active').removeClass('active closing').removeAttr('style');
        }
      }), $('#meganav18').removeClass('search'), $('#navbar').removeClass('search'), $('search.open').stop().removeClass('open'), !$('#tab-myaccount') && !$('#tab-UF-myaccount') || $('.search-solr-sec').hasClass('open') || ($('#tab-myaccount').css('visibility', 'visible'), $('#tab-UF-myaccount').css('visibility', 'visible')), $('.component-dotcom-search-solr .search-input').val('').trigger('keyup'));
    });
    var i = null;
    $('#solutionsNav').on('touchend click nav:engage', '.solution-areas li, .workflows li', function (e) {
      'touchend' === e.type && !0 === i || ('touchend' === e.type && window.innerWidth > 767 && (e.preventDefault(), e.stopPropagation()), 'click' === e.type && window.innerWidth > 767 && (e.preventDefault(), e.stopPropagation(), window.location.href = $(this).attr('data-href')), $('.marquee-nav.active').hasClass('disableTransition') || $(this).hasClass('active') || $(this).attr('rel') && ($(this).closest('.solution-areas').length && toggleWorkflow(this), $(this).siblings().removeClass('active').end().addClass('active'), togglePromo(this)));
    }).on('touchmove', function () {
      i = !0;
    }).on('touchstart', function () {
      i = !1;
    }), function () {
      var e = document.querySelector('.newsFeed-container').getAttribute('data-required-text') || 'Please enter a valid email address',
          t = document.getElementById('elqFormNameSubscribe').value,
          n = document.getElementById('CampaignId').value,
          o = (document.getElementById('EloquaCustomerGUID').value, document.getElementById('elqSiteId').value),
          a = null,
          l = $('#field32').length > 0 ? document.getElementById('field32').value : '',
          i = document.getElementById('referenceSource').value,
          s = (document.getElementById('field5').value, document.getElementById('pageurl').value),
          r = document.querySelector('.sn-geo.url-update') ? document.querySelector('.sn-geo.url-update').getAttribute('data-hreflang') : '',
          c = document.getElementById('newsFeedipAddress').value,
          u = $('#newsFeedfield4');

      function v() {
        if (function () {
          a = document.getElementById('newsFeedfield4').value;
          var e = !!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a);
          return !('' === a || !e);
        }()) {
          var v = 'elqSiteId=' + o + '&hiddenCampaignId=' + n + '&elqCustomerGUID=' + document.getElementById('EloquaCustomerGUID').value + '&elqFormName=' + t + '&pageurl=' + s + '&referenceSource=' + i + '&botcapture=' + l + '&email=' + a + '&hrefLang=' + r + '&AdobeIPaddress=' + c,
              d = document.getElementById('newsFeedFormType').value;
          $.ajax({
            url: '/bin/eloquaFormSubmit',
            data: {
              postStringToMethod: v,
              newsFeedFormType: d,
              newsFeedCampaignId: n
            },
            type: 'POST',
            success: function success(e) {
              var t;
              t = .1, u.val(''), $('.sn-footer-ty').fadeIn(250), setTimeout(function () {
                $('.sn-footer-ty').fadeOut(250);
              }, 6e4 * t);
            }
          });
        } else u.css('outline', 'none').parent().find('.validation-message').remove(), u.css('outline', '#FD726D solid 0.1rem').parent().append('<span class=\'validation-message\'>' + e + '</span>');
      }

      u.on('blur change', function () {
        $(this).val() ? ($(this).parent().find('.LV_validation_message').remove(), $(this).parent().find('.validation-message').remove(), $(this).removeClass('remove-red-outline').css('outline', 'none')) : ($(this).parent().find('.validation-message').remove(), $(this).css('outline', '#FD726D solid 0.1rem'), $(this).parent().append('<span class=\'validation-message\'>' + e + '</span>'));
      }), $(document).on('focus', '#newsFeedfield4', function () {
        $(this).parent().find('.validation-message').remove();
      }), $('.subscribe-submit-button').on('click', function (e) {
        e.stopPropagation(), v();
      });
    }(), function () {
      var e = window.location.pathname,
          t = window.location.href,
          n = document.querySelector('#newGlobalFooter .custom-select'),
          o = n.querySelectorAll('.ls-options'),
          a = n.querySelector('.ls-selected'),
          l = document.querySelector('#newGlobalFooter .default-select option:first-child'),
          i = '';

      switch (!0) {
        case null !== RegExp('www.servicenow.co.jp').exec(t) || null !== RegExp('/content/servicenow/www/locale-sites/ja-jp').exec(t) || null !== RegExp('/content/servicenow/www/language-masters/ja-jp').exec(t) || null !== RegExp('.net/ja').exec(t):
          i = 'ja';
          break;

        case null !== RegExp('www.servicenow.de').exec(t) || null !== RegExp('/content/servicenow/www/locale-sites/de-de').exec(t) || null !== RegExp('/content/servicenow/www/language-masters/de-de').exec(t) || null !== RegExp('.net/de').exec(t):
          i = 'de';
          break;

        case null !== RegExp('www.servicenow.fr').exec(t) || null !== RegExp('/content/servicenow/www/locale-sites/fr-fr').exec(t) || null !== RegExp('/content/servicenow/www/language-masters/fr-fr').exec(t) || null !== RegExp('.net/fr').exec(t):
          i = 'fr';
          break;

        case null !== RegExp('www.servicenow.nl').exec(t) || null !== RegExp('/content/servicenow/www/locale-sites/nl-nl').exec(t) || null !== RegExp('/content/servicenow/www/language-masters/nl-nl').exec(t) || null !== RegExp('.net/nl').exec(t):
          i = 'nl';
          break;

        case null !== RegExp('www.servicenow.es').exec(t) || null !== RegExp('/content/servicenow/www/locale-sites/es-es').exec(t) || null !== RegExp('/content/servicenow/www/language-masters/es-es').exec(t) || null !== RegExp('.net/es').exec(t):
          i = 'es';
          break;

        case null !== RegExp('www.servicenow.co.it').exec(t) || null !== RegExp('/content/servicenow/www/locale-sites/it-it').exec(t) || null !== RegExp('/content/servicenow/www/language-masters/it-it').exec(t) || null !== RegExp('.net/it').exec(t):
          i = 'it';
          break;

        case null !== RegExp('www.servicenow.com.br').exec(t) || null !== RegExp('/content/servicenow/www/locale-sites/pt-br').exec(t) || null !== RegExp('/content/servicenow/www/language-masters/pt-br').exec(t) || null !== RegExp('.net/br').exec(t):
          i = 'br';
          break;

        case null !== RegExp('www.servicenow.kr').exec(t) || null !== RegExp('/content/servicenow/www/locale-sites/ko-kr').exec(t) || null !== RegExp('/content/servicenow/www/language-masters/ko-kr').exec(t) || null !== RegExp('.net/kr').exec(t):
          i = 'kr';
          break;

        default:
          i = 'us';
      }

      for (var s = 0; s < o.length; s++) {
        var r = o[s].getAttribute('data-lang');
        r === i && (o[s].classList.add('lang-selected'), a.innerText = o[s].innerText, l.innerText = o[s].innerText), 'ja' === r ? o[s].setAttribute('href', 'https://www.servicenow.co.jp' + e) : 'de' === r ? o[s].setAttribute('href', 'https://www.servicenow.de' + e) : 'fr' === r ? o[s].setAttribute('href', 'https://www.servicenow.fr' + e) : 'nl' === r ? o[s].setAttribute('href', 'https://www.servicenow.nl' + e) : 'es' === r ? o[s].setAttribute('href', 'https://www.servicenow.es' + e) : 'it' === r ? o[s].setAttribute('href', 'https://www.servicenow.co.it' + e) : 'br' === r ? o[s].setAttribute('href', 'https://www.servicenow.com.br' + e) : 'kr' === r ? o[s].setAttribute('href', 'https://www.servicenow.kr' + e) : o[s].setAttribute('href', 'https://www.servicenow.com' + e);
      }

      n.addEventListener('click', function (e) {
        e.currentTarget.classList.toggle('lang-active');
      }), document.addEventListener('click', function (e) {
        e.target.classList.contains('ls-selected') || e.target.classList.contains('footer-language-selector') || n.classList.contains('lang-active') && n.classList.remove('lang-active');
      });
    }(), /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? $('input[name=devicetype]').val('mobile') : $('input[name=devicetype]').val('desktop');
    var s = null;
    var r = document.querySelector('.sn-global-meganav #snlogo'),
        c = document.querySelector('.sNowGlobalNav search > img'),
        u = document.querySelector('#dismiss-search');
    overLayEle = document.querySelector('#tab-myaccount .overlay-open') || document.querySelector('#tab-UF-myaccount .overlay-open'), topNavEle = document.querySelectorAll('#topNavLinks li:not(#js-nav-back):not(.divider)'), solRightColCtaEle = document.querySelectorAll('#solutionsNav .promo-block a'), solMiddleColCtaEle = document.querySelectorAll('#solutionsNav .workflows > ul li'), solLeftColCtaEle = document.querySelectorAll('#solutionsNav .solution-areas li'), solPromoCtaMobileEle = document.querySelectorAll('#solutionsNav .mobile-only a'), otherRightColCtaEle = document.querySelectorAll('#marquee-nav-slider .marquee-nav:not(#solutionsNav) .promo-block a'), otherLeftColCtaEle = document.querySelectorAll('#marquee-nav-slider .marquee-nav:not(#solutionsNav) .links a'), otherPromoCtaMobileEle = document.querySelectorAll('#marquee-nav-slider .marquee-nav:not(#solutionsNav) .mobile-only a');
    var v = document.querySelectorAll('#sNowGlobalNav-footer links column.links'),
        d = document.querySelector('#sNowGlobalNav-footer .subscribe-submit-button'),
        m = document.querySelectorAll('#sNowGlobalNav-footer header left a'),
        g = document.querySelectorAll('#sNowGlobalNav-footer social right .social'),
        f = document.querySelectorAll('#sNowGlobalNav-footer .custom-select li'),
        h = document.querySelector('#sNowGlobalNav-footer .default-select'),
        p = document.querySelectorAll('#sNowGlobalNav-footer .max-width > .col-12 footer li a'),
        w = {
      getGroupTitle: function getGroupTitle(e, t) {
        var n = !0,
            o = t ? 'links' : 'related-content',
            a = e;

        if (!t) {
          for (; !a.classList.contains(o);) {
            if (a.classList.contains('promo-block')) {
              n = !1;
              break;
            }

            a = a.parentElement;
          }

          var l = n ? 'h3' : 'h2';
          return a.querySelector(l) ? a.querySelector(l).innerText : void 0;
        }

        for (; !a.classList.contains(o);) {
          if (a.classList.contains('promo-block')) {
            n = !1;
            break;
          }

          a = a.parentElement;
        }

        if (n && 'links' === o) return a.querySelector('h3') ? a.querySelector('h3').innerText : void 0;
      },
      getGroupTitleMobile: function getGroupTitleMobile(e, t) {
        for (var n = e; !n.classList.contains(t);) {
          n = n.parentElement;
        }

        var o = 'h2' == n.firstElementChild.nodeName.toLowerCase() ? 'h2' : 'h4';
        return n.querySelector(o) ? n.querySelector(o).innerText : void 0;
      },
      getLevelTitle: function getLevelTitle(e, t) {
        if (e.indexOf('data-layer-level-2') > -1) {
          var n = document.querySelector(e + '.active'),
              o = null;
          if (n) return o = n.querySelector('li.active') ? n.querySelector('li.active').innerText : void 0, (n.querySelector('h3') ? n.querySelector('h3').innerText : n.querySelector('h4').innerText) + ':' + o;
        }

        var a = document.querySelector(e + ' li.active');

        if (a) {
          if (s = 'all-apps' === a.getAttribute('rel') || 'industries-links' === a.getAttribute('rel'), t && !s) {
            var l = document.querySelector(e + ' .column-title');
            return (l ? l.innerText + ':' : '') + (a ? a.innerText : void 0);
          }

          return a.innerText;
        }
      },
      getTopNavTitle: function getTopNavTitle() {
        return document.querySelector('#topNavLinks li.active').innerText;
      },
      pushToDataLayer: function pushToDataLayer(e, t, n, o) {
        n = t + n.filter(function (e, t) {
          return n.indexOf(e) === t && void 0 !== e;
        }).reverse().join(':').toLowerCase();
        window.appEventData = window.appEventData || [], appEventData.push({
          event: e,
          data: n
        }, o);
      },
      header: {
        backButton: function backButton(e, t) {
          var n = [],
              o = e.innerText ? e.innerText : e.firstElementChild.innerText;
          n.push(o, w.getLevelTitle('.data-layer-level-2', !1), w.getLevelTitle('.data-layer-level-1', !1), w.getTopNavTitle()), w.pushToDataLayer('Top Nav Click', 'nav:', n, t);
        },
        snLogo: function snLogo(e, t) {
          w.pushToDataLayer('Top Nav Click', 'nav:', ['logo'], t);
        },
        search: function search(e, t) {
          e.parentElement.classList.contains('open') || w.pushToDataLayer('Top Nav Click', 'nav:', ['search'], t);
        },
        searchClose: function searchClose(e, t) {
          w.pushToDataLayer('Top Nav Click', 'nav:', ['close', 'search'], t);
        },
        myAccount: function myAccount(e, t) {
          w.pushToDataLayer('Top Nav Click', 'nav:', ['my account'], t);
        },
        topNavEvent: function topNavEvent(e, t) {
          w.pushToDataLayer('Top Nav Click', 'nav:', [e.innerText], t);
        },
        navSolutions: {
          solutionFarRightCol: function solutionFarRightCol(e, t) {
            var n = [],
                o = e.innerText ? e.innerText : e.firstElementChild.innerText;
            n.push(o, w.getGroupTitle(e, !0), w.getLevelTitle('.data-layer-level-2', !1), w.getLevelTitle('.data-layer-level-1', !0), w.getTopNavTitle()), w.pushToDataLayer('Top Nav Click', 'nav:', n, t);
          },
          solutionMiddleCol: function solutionMiddleCol(e, t) {
            var n = [];
            e.innerText ? e.innerText : e.firstElementChild.innerText;
            n.push(w.getLevelTitle('.data-layer-level-2', !1), w.getLevelTitle('.data-layer-level-1', !0), w.getTopNavTitle()), w.pushToDataLayer('Top Nav Click', 'nav:', n, t);
          },
          solutionLeftCol: function solutionLeftCol(e, t) {
            var n = [];
            n.push(w.getLevelTitle('.data-layer-level-1', !0), w.getTopNavTitle()), w.pushToDataLayer('Top Nav Click', 'nav:', n, t);
          },
          solutionsMobileOnly: function solutionsMobileOnly(e, t) {
            var n = [],
                o = e.innerText ? e.innerText : e.firstElementChild.innerText;
            n.push(o, w.getGroupTitleMobile(e, 'mobile-only'), w.getLevelTitle('.data-layer-level-1', !1), w.getTopNavTitle()), w.pushToDataLayer('Top Nav Click', 'nav:', n, t);
          }
        },
        navOthers: {
          othersRightCol: function othersRightCol(e, t) {
            var n = [],
                o = e.innerText ? e.innerText : e.firstElementChild.innerText;
            n.push(o, w.getGroupTitle(e, !1), w.getTopNavTitle()), w.pushToDataLayer('Top Nav Click', 'nav:', n, t);
          },
          otherLeftCol: function otherLeftCol(e, t) {
            var n = [],
                o = e.innerText ? e.innerText : e.firstElementChild.innerText;
            n.push(o, w.getGroupTitle(e, !0), w.getTopNavTitle()), w.pushToDataLayer('Top Nav Click', 'nav:', n, t), e.attributes.href.value.indexOf('/events.html') > -1 && e.attributes.href.value.indexOf('#') > -1 && setTimeout(function () {
              window.location.reload();
            }, 300);
          },
          otherMobileOnly: function otherMobileOnly(e, t) {
            var n = [],
                o = e.innerText ? e.innerText : e.firstElementChild.innerText;
            n.push(o, w.getGroupTitleMobile(e, 'mobile-only'), w.getTopNavTitle()), w.pushToDataLayer('Top Nav Click', 'nav:', n, t);
          }
        }
      },
      footer: {
        linkColumn: function linkColumn(e, t) {
          var n = [],
              o = e.innerText ? e.innerText : e.firstElementChild.innerText;
          n.push(o, w.getGroupTitle(e, !0)), w.pushToDataLayer('Footer Nav Click', 'footer:', n, t);
        },
        subscriptionSumbit: function subscriptionSumbit(e, t) {
          var n = e.innerText ? e.innerText : e.firstElementChild.innerText;
          w.pushToDataLayer('Footer Nav Click', 'footer:subscription:', [n], t);
        },
        socialMedia: function socialMedia(e, t) {
          var n = e.querySelector('.fab') ? e.querySelector('.fab').getAttribute('aria-label') : e.getAttribute('aria-label');
          w.pushToDataLayer('Footer Nav Click', 'footer:social:', [n], t);
        },
        langSelector: function langSelector(e, t, n) {
          var o = n ? e.options[e.selectedIndex].text : e.innerText;
          w.pushToDataLayer('Footer Nav Click', 'footer:language selector:', [o], t);
        },
        oridinaryLinks: function oridinaryLinks(e, t) {
          var n = e.innerText ? e.innerText : e.firstElementChild.innerText;
          w.pushToDataLayer('Footer Nav Click', 'footer:', [n], t);
        }
      }
    };
    r.addEventListener('click', function (e) {
      w.header.snLogo.call(this, e.target, e);
    }, !0), c.addEventListener('click', function (e) {
      w.header.search.call(this, e.target, e);
    }, !0), u.addEventListener('click', function (e) {
      w.header.searchClose.call(this, e.target, e);
    }, !0), overLayEle.addEventListener('click', function (e) {
      w.header.myAccount.call(this, e.target, e), $('.component-dotcom-search-solr .search-input').val('').trigger('keyup');
    }, !0);

    for (var y = 0; y < topNavEle.length; y++) {
      (topNavEle[y].querySelector('a') ? topNavEle[y].querySelector('a') : topNavEle[y]).addEventListener('click', function (e) {
        w.header.topNavEvent.call(this, e.target, e);
      });
    }

    for (y = 0; y < solRightColCtaEle.length; y++) {
      solRightColCtaEle[y].addEventListener('click', function (e) {
        w.header.navSolutions.solutionFarRightCol.call(this, e.target, e);
      }, !0);
    }

    for (y = 0; y < solMiddleColCtaEle.length; y++) {
      solMiddleColCtaEle[y].addEventListener('click', function (e) {
        w.header.navSolutions.solutionMiddleCol.call(this, e.target, e);
      }, !0);
    }

    for (y = 0; y < solLeftColCtaEle.length; y++) {
      solLeftColCtaEle[y].addEventListener('click', function (e) {
        w.header.navSolutions.solutionLeftCol.call(this, e.target, e);
      }, !0);
    }

    for (y = 0; y < solPromoCtaMobileEle.length; y++) {
      solPromoCtaMobileEle[y].addEventListener('click', function (e) {
        w.header.navSolutions.solutionsMobileOnly.call(this, e.target, e);
      }, !0);
    }

    for (y = 0; y < otherRightColCtaEle.length; y++) {
      otherRightColCtaEle[y].addEventListener('click', function (e) {
        w.header.navOthers.othersRightCol.call(this, e.target, e);
      }, !0);
    }

    for (y = 0; y < otherLeftColCtaEle.length; y++) {
      otherLeftColCtaEle[y].addEventListener('click', function (e) {
        w.header.navOthers.otherLeftCol.call(this, e.target, e);
      }, !0);
    }

    for (y = 0; y < otherPromoCtaMobileEle.length; y++) {
      otherPromoCtaMobileEle[y].addEventListener('click', function (e) {
        w.header.navOthers.otherMobileOnly.call(this, e.target, e);
      }, !0);
    }

    for (y = 0; y < v.length; y++) {
      v[y].addEventListener('click', function (e) {
        w.footer.linkColumn.call(this, e.target, e);
      }, !0);
    }

    d.addEventListener('click', function (e) {
      w.footer.subscriptionSumbit.call(this, e.target, e);
    }, !0);

    for (y = 0; y < m.length; y++) {
      m[y].addEventListener('click', function (e) {
        w.footer.oridinaryLinks.call(this, e.target, e);
      }, !0);
    }

    for (y = 0; y < g.length; y++) {
      g[y].addEventListener('click', function (e) {
        w.footer.socialMedia.call(this, e.target, e);
      }, !0);
    }

    for (y = 0; y < f.length; y++) {
      f[y].addEventListener('click', function (e) {
        w.footer.langSelector.call(this, e.target, e, !1);
      }, !0);
    }

    h.addEventListener('change', function (e) {
      w.footer.langSelector.call(this, e.target, e, !0);
    }, !0);

    for (y = 0; y < p.length; y++) {
      p[y].addEventListener('click', function (e) {
        w.footer.oridinaryLinks.call(this, e.target, e);
      }, !0);
    }
  }), jQuery.fn.slideDownFlex = function (e, t, n, o) {
    e = void 0 === e ? 400 : 'fast' === e ? 200 : 'slow' === e ? 600 : 'number' == typeof e ? e : 400, t = void 0 === t ? 'flex' : 'string' == typeof t && -1 != ['-webkit-box', '-webkit-inline-box', 'block', 'contents', 'flex', 'flow-root', 'grid', 'inherit', 'initial', 'inline', 'inline-block', 'inline-flex', 'inline-grid', 'inline-table', 'list-item', 'table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row', 'table-row-group'].indexOf(t) ? t : 'flex';
    var a = $(this),
        l = a.css('display', t)[0].offsetHeight;
    return a.css({
      height: 0,
      overflow: 'hidden'
    }).addClass(n), setTimeout(function () {
      a.css({
        height: l,
        'transition-property': 'height',
        'transition-timing-function': 'ease',
        'transition-duration': e + 'ms'
      });
    }, 1), setTimeout(function () {
      a.removeAttr('style').addClass(o);
    }, e), this;
  }, void 0 === Array.prototype.reIndexOf && (Array.prototype.reIndexOf = function (e) {
    for (var t in this) {
      if (this[t].toString().match(e)) return t;
    }

    return -1;
  }), mousePosition.prototype.change = function () {
    if (this.start && this.end) return this.end - this.start;
  }, $(document).ready(function () {
    var e = new mousePosition(),
        t = new mousePosition();
    $('#solutionsNav').on('mousemove', 'li[rel]', function (n) {
      if (!$('#meganav18.mobile').length) {
        e.start = e.end, t.start = t.end, e.end = n.clientX, t.end = n.clientY;
        e.change() > 0 && e.change() / Math.abs(t.change()) >= .5 || $(this).trigger('nav:engage');
      }
    });
  });
}