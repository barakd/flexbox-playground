angular.module('app', [])
.controller('demo', function(){
  this.navitems = [{}, {}];
  this.class = 'normal';
  this.simple = true;
  this.alignItems = 'stretch';
  this.alignContent = 'stretch';
  this.justify = 'flex-start';
  this.remove = function(index){
    this.navitems.splice(index, 1);
  }
  
  this.anwsers = {
    justify: {
      "flex-start": "The flex items are packed starting from the main-start. Margins of the first flex item is flushed with the main-start edge of the line and each following flex item is flushed with the preceding.",
      "center": "The flex items are packed toward the center of the line. The flex items are flushed with each other and aligned in the center of the line. Space between the main-start edge of the line and first item and between main-end and the last item of the line is the same.",
      "flex-end": "The flex items are packed starting from the main-end. The margin edge of the last flex item is flushed with the main-end edge of the line and each preceding flex item is flushed with the following.",
      "space-between": "Flex items are evenly distributed along the line. The spacing is done such as the space between two adjacent items is the same. Main-start edge and main-end edge are flushed with respectively first and last flex item edges.",
      "space-around": "Flex items are evenly distributed so that the space between two adjacent items is the same. The empty space before the first and after the last items equals half of the space between two adjacent items."
    },
    alignItems: {
      "flex-start": "The cross-start margin edge of the flex item is flushed with the cross-start edge of the line.",
      "flex-end": "The cross-end margin edge of the flex item is flushed with the cross-end edge of the line.",
      "center" : "The flex item's margin box is centered within the line on the cross-axis. If the cross-size of the item is larger than the flex container, it will overflow equally in both directions.",
      "baseline": "All flex items are aligned such that their baselines align. The item with the largest distance between its cross-start margin edge and its baseline is flushed with the cross-start edge of the line.",
      "stretch": "Flex items are stretched such as the cross-size of the item's margin box is the same as the line while respecting width and height constraints.",
    },
    alignContent: {
       "flex-start": "TheLines are packed starting from the cross-start. Cross-start edge of the first line and cross-start edge of the flex container are flushed together. Each following line is flush with the preceding.",
      "center": "Lines are packed toward the center of the flex container. The lines are flushed with each other and aligned in the center of the flex container. Space between the cross-start edge of the flex container and first line and between cross-end of the flex container and the last line is the same.",
      "flex-end": "Lines are packed starting from the cross-end. Cross-end of the last line and cross-end of the flex container are flushed together. Each preceding line is flushed with the following line.",
      "space-between": "Lines are evenly distributed in the flex container. The spacing is done such as the space between two adjacent items is the same. Cross-start edge and cross-end edge of the flex container are flushed with respectively first and last line edges.",
      "space-around": "Lines are evenly distributed so that the space between two adjacent lines is the same. The empty space before the first and after the last lines equals half of the space between two adjacent lines.",
      "stretch": "Lines stretch to use the remaining space. The free-space is split equally between all the lines."
    },
  };
  
});