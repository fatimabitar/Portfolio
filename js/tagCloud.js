$(document).ready(function () {
  var entries = [
    { label: "HTML" },
    { label: "css" },
    { label: "HTML" },
    { label: "css" },
    { label: "Bootstrap" },
    { label: "sass" },
    { label: " javascript" },
    { label: " javascript" },
    { label: "gsap" },
    { label: "gsap" },
    { label: "npm" },
    { label: "react" },
    { label: "scrollMagic" },
    { label: "sql" },
    { label: "figma" },
    { label: "HTML" },
    { label: "css" },
    { label: "Bootstrap" },
    { label: "sass" },
    { label: " javascript" },
    { label: " react" },
    { label: "gsap" },
    { label: "npm" },
    { label: "react" },
    { label: "react" },
    { label: "sql" },
    { label: "figma" },
  ];

  var settings = {
    entries: entries,
    width: 640,
    height: 480,
    radius: "75%",
    radiusMin: 75,
    bgDraw: false,
    bgColor: "rgba(230, 225, 230, 0.8)",
    opacityOver: 1,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.5,
    fontFamily: "Oswald, Arial, sans-serif",
    fontSize: "17",
    fontColor: "#fff",
    fontWeight: "bold", //bold
    fontStyle: "normal", //italic
    fontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
  };

  //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  $("#tag-cloud").svg3DTagCloud(settings);
});
