/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
var symbols = {
"stage": {
   version: "0.1.3",
   baseState: "Base State",
   initialState: "Base State",
   content: {
      dom: [
        {
            id:'star6',
            className:'stage_star_transparent3_id',
            type:'image',
            tag:'div',
            rect:[0,0,40,40],
            fill:['rgba(0,0,0,0)','images/star_transparent3.png']
        },
        {
            id:'star5',
            className:'stage_star_transparent3_id',
            type:'image',
            tag:'div',
            rect:[0,0,40,40],
            fill:['rgba(0,0,0,0)','images/star_transparent3.png']
        },
        {
            id:'star4',
            className:'stage_star_transparent3_id',
            type:'image',
            tag:'div',
            rect:[0,0,40,40],
            fill:['rgba(0,0,0,0)','images/star_transparent3.png']
        },
        {
            id:'star3',
            className:'stage_star_transparent3_id',
            type:'image',
            tag:'div',
            rect:[0,0,40,40],
            fill:['rgba(0,0,0,0)','images/star_transparent3.png']
        },
        {
            id:'star2',
            className:'stage_star_transparent3_id',
            type:'image',
            tag:'div',
            rect:[0,0,40,40],
            fill:['rgba(0,0,0,0)','images/star_transparent3.png']
        },
        {
            id:'star1',
            className:'stage_star_transparent3_id',
            type:'image',
            tag:'div',
            rect:[0,0,40,40],
            fill:['rgba(0,0,0,0)','images/star_transparent3.png']
        },
        {
            id:'add_button',
            className:'stage_addbutton2_id',
            type:'image',
            tag:'div',
            rect:[0,0,54,54],
            fill:['rgba(0,0,0,0)','images/addbutton2.png']
        }],
      symbolInstances: [
      ]
   },
   states: {
      "Base State": {
         "${_star2}": [
            ["transform", "translateY", '337px'],
            ["style", "opacity", '1'],
            ["transform", "translateX", '22px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_star1}": [
            ["transform", "translateX", '22px'],
            ["transform", "translateY", '337px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_star6}": [
            ["transform", "translateX", '22px'],
            ["transform", "translateY", '337px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_star3}": [
            ["transform", "translateY", '337px'],
            ["style", "opacity", '1'],
            ["transform", "translateX", '22px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_star5}": [
            ["transform", "translateX", '22px'],
            ["transform", "translateY", '337px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_star4}": [
            ["transform", "translateX", '22px'],
            ["transform", "translateY", '337px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_add_button}": [
            ["transform", "translateX", '15px'],
            ["transform", "translateY", '330px'],
            ["transform", "rotateZ", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 700,
         labels: {

         },
         timeline: [
            { id: "eid53", tween: [ "transform", "${_star1}", "translateY", '137px', { fromValue: '337px'}], position: 0, duration: 200, easing: "easeOutBack" },
            { id: "eid52", tween: [ "transform", "${_star1}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 0, duration: 200, easing: "easeOutBack" },
            { id: "eid55", tween: [ "transform", "${_star2}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 0, duration: 300, easing: "easeOutBack" },
            { id: "eid61", tween: [ "transform", "${_star3}", "translateY", '180px', { fromValue: '337px'}], position: 0, duration: 400, easing: "easeOutBack" },
            { id: "eid57", tween: [ "transform", "${_star2}", "translateY", '148px', { fromValue: '337px'}], position: 0, duration: 300, easing: "easeOutBack" },
            { id: "eid60", tween: [ "transform", "${_star3}", "translateX", '142px', { fromValue: '22px'}], position: 0, duration: 400, easing: "easeOutBack" },
            { id: "eid63", tween: [ "transform", "${_star4}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 0, duration: 500, easing: "easeOutBack" },
            { id: "eid64", tween: [ "transform", "${_star4}", "translateX", '189px', { fromValue: '22px'}], position: 0, duration: 500, easing: "easeOutBack" },
            { id: "eid68", tween: [ "transform", "${_star5}", "translateX", '214px', { fromValue: '22px'}], position: 0, duration: 600, easing: "easeOutBack" },
            { id: "eid71", tween: [ "transform", "${_star6}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 0, duration: 700, easing: "easeOutBack" },
            { id: "eid59", tween: [ "transform", "${_star3}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 0, duration: 400, easing: "easeOutBack" },
            { id: "eid74", tween: [ "transform", "${_add_button}", "rotateZ", '45deg', { fromValue: '0deg'}], position: 0, duration: 200 },
            { id: "eid56", tween: [ "transform", "${_star2}", "translateX", '86px', { fromValue: '22px'}], position: 0, duration: 300, easing: "easeOutBack" },
            { id: "eid67", tween: [ "transform", "${_star5}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 0, duration: 600, easing: "easeOutBack" },
            { id: "eid65", tween: [ "transform", "${_star4}", "translateY", '220px', { fromValue: '337px'}], position: 0, duration: 500, easing: "easeOutBack" },
            { id: "eid69", tween: [ "transform", "${_star5}", "translateY", '277px', { fromValue: '337px'}], position: 0, duration: 600, easing: "easeOutBack" },
            { id: "eid72", tween: [ "transform", "${_star6}", "translateX", '222px', { fromValue: '22px'}], position: 0, duration: 700, easing: "easeOutBack" }]
      }
   }
}};

var comp;
var played;
Edge.registerCompositionDefn(compId, symbols);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     comp = new Edge.Composition(compId, {stage: "." + compId}, {});
	   /**
 * Adobe Edge Timeline Launch
 */
     comp.ready(function() {
         var symb = comp.getStage();
         
         $('#stage_add_button').click(function(e){
			if(played)
			{
				symb.playReverse();
				played = false;
			} else {
				symb.play();
				played = true;
			}
			
         });
     });
});
})(jQuery, jQuery.Edge, "EDGE-1308644245");
