/**
 * isOverlapping() returns the overlapping status between two elements
 * based on the passed in Element objects
 *
 * @param {Element, Element} Element object of DOM
 * @return {Boolean|null} overlap status or null if native objet not received
 */
 export function isOverlapping(e1, e2, e2BottomAdjust = 0){
  if( e1.length && e1.length > 1 ){
    e1 = e1[0];
  }
  if( e2.length && e2.length > 1 ){
    e2 = e2[0];
  }
  var rect1 = e1 instanceof Element ? e1.getBoundingClientRect() : false;
  var rect2 = e2 instanceof Element ? e2.getBoundingClientRect() : false;

  const adjustedRect2Bottom = rect2.bottom - e2BottomAdjust;

  var overlap = null;
  if( rect1 && rect2 ){
    overlap = !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > adjustedRect2Bottom
      )
    return overlap;
  } else {
    window.console ? console.warn( 'Please pass native Element object' ) : null;
    return overlap;
  }
}
