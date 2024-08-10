function lerp(start, end, t) {
    return start * (1 - t) + end * t
  
}

function scrollToTop() {
    document.body.scrollTo(0, 0);
    history.pushState(null, null, '#');
}