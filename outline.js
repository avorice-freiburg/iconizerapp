
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jaames/iro/dist/iro.min.js"></script>
<script>
    var colorPicker = new iro.ColorPicker(".ms-colorpicker", {
        width: 180,
        color: "rgb(252, 252, 252)",
        borderWidth: 1,
        borderColor: "#1b1b1b",
    });

    var values = document.getElementById("values");
    var hexInput = document.getElementById("hexInput");
    var swatch = document.getElementById("colorSwatch");

    // https://iro.js.org/guide.html#color-picker-events
    colorPicker.on(["color:init", "color:change"], function(color) {
        const svgsc = document.querySelectorAll('#my-svg');
        values.innerHTML = [
            "hex: " + color.hexString,
            "rgb: " + color.rgbString,
            "hsl: " + color.hslString,
        ].join("<br>");

        hexInput.value = color.hexString;
        swatch.style.backgroundColor = color.hexString;
        
        let selectedColor = color.hexString;
        
        svgsc.forEach(svg => {
          const paths = svg.querySelectorAll('path');
          paths.forEach(path => {
            path.setAttribute('stroke', selectedColor);
          });
        });
    });

    hexInput.addEventListener('change', function() {
        colorPicker.color.hexString = this.value;
        swatch.style.backgroundColor = this.value;
    });
</script>

 <script>
    var colorPickerTest = new iro.ColorPicker(".ms-colorpicker-test", {
        width: 180,
        color: "rgb(0, 0, 0)",
        borderWidth: 1,
        borderColor: "#1b1b1b",
    });

    var valuesTest = document.getElementById("valuesTest");
    var hexInputTest = document.getElementById("hexInputTest");
    var swatchTest = document.getElementById("colorSwatchTest");

    colorPickerTest.on(["color:init", "color:change"], function(color) {
        valuesTest.innerHTML = [
            "hex: " + color.hexString,
            "rgb: " + color.rgbString,
            "hsl: " + color.hslString,
        ].join("<br>");

        hexInputTest.value = color.hexString;
        swatchTest.style.backgroundColor = color.hexString;
        
        let selectedColor = color.hexString;

       	const rectElements = document.querySelectorAll('#backgr');
        
        if (!document.getElementById('trans').checked) {
          function changeRectColor() {
            rectElements.forEach(rect => {
              rect.setAttribute('fill', selectedColor);
            });
          }
          changeRectColor();
        }
    });

    hexInputTest.addEventListener('change', function() {
        colorPickerTest.color.hexString = this.value;
        swatchTest.style.backgroundColor = this.value;
    });
</script>


<script>
const slider = document.getElementById('slider');

function changeRadius() {
const rects = document.querySelectorAll('rect');
  rects.forEach(rect => {
    rect.setAttribute('rx', slider.value);
  });
}

slider.addEventListener('input', changeRadius);
</script>

<script>
function updateSelectors() {
const svgsc = document.querySelectorAll('#my-svg');
  svgsc.forEach(svg => {
    const paths = svg.querySelectorAll('#my-path');
    paths.forEach(path => {
      path.setAttribute('stroke', colorPicker.color.hexString);
    });
  });
}
const sliderStroke = document.getElementById('slider-stroke');

function changeStroke() {
	const paths = document.querySelectorAll('path');
  paths.forEach(path => {
    path.setAttribute('stroke-width', sliderStroke.value);
  });
}

sliderStroke.addEventListener('input', changeStroke);
</script>

<script>
const sliderSize = document.getElementById('slider-size');

function scalePath() {
const path = document.querySelectorAll('path');
const polyline = document.querySelectorAll('polyline');
path.forEach(path => {
  const scale = sliderSize.value;
  const bbox = path.getBBox();
  const centerX = bbox.x + bbox.width / 2;
  const centerY = bbox.y + bbox.height / 2;
  const tx = -centerX * (scale - 1);
  const ty = -centerY * (scale - 1);
  const transform = `translate(${tx},${ty}) scale(${scale})`;

  path.setAttribute('transform', transform);
  });
  
polyline.forEach(polyline => {
  const scale = sliderSize.value;
  const bbox = polyline.getBBox();
  const centerX = bbox.x + bbox.width / 2;
  const centerY = bbox.y + bbox.height / 2;
  const tx = -centerX * (scale - 1);
  const ty = -centerY * (scale - 1);
  const transform = `translate(${tx},${ty}) scale(${scale})`;

  polyline.setAttribute('transform', transform);
  });
}

sliderSize.addEventListener('input', scalePath);
scalePath();
</script>

<script>
  const colorPicker1 = new iro.ColorPicker(".ms-colorpicker-second", {
    width: 180,
    color: "rgb(143, 102, 255)",
    borderWidth: 1,
    borderColor: "#1b1b1b",
  });

  const valuesSecond = document.getElementById("valuesSecond");
  const hexInputSecond = document.getElementById("hexInputSecond");
  const swatchSecond = document.getElementById("colorSwatchSecond");

  colorPicker1.on(["color:init", "color:change"], function(color) {

    valuesSecond.innerHTML = [
      "hex: " + color.hexString,
      "rgb: " + color.rgbString,
      "hsl: " + color.hslString,
    ].join("<br>");

    hexInputSecond.value = color.hexString;
    swatchSecond.style.backgroundColor = color.hexString;
  });

  hexInputSecond.addEventListener('input', function() {
    colorPicker1.color.hexString = this.value;
    swatchSecond.style.backgroundColor = this.value;
  });
  
const colorPicker2 = new iro.ColorPicker(".ms-colorpicker-third", {
    width: 180,
    color: "rgb(61, 18, 255)",
    borderWidth: 1,
    borderColor: "#1b1b1b",
  });

  const valuesThird = document.getElementById("valuesThird");
  const hexInputThird = document.getElementById("hexInputThird");
  const swatchThird = document.getElementById("colorSwatchThird");

  colorPicker2.on(["color:init", "color:change"], function(color) {
    valuesThird.innerHTML = [
      "hex: " + color.hexString,
      "rgb: " + color.rgbString,
      "hsl: " + color.hslString,
    ].join("<br>");

    hexInputThird.value = color.hexString;
    swatchThird.style.backgroundColor = color.hexString;
  });

  hexInputThird.addEventListener('input', function() {
    colorPicker2.color.hexString = this.value;
    swatchThird.style.backgroundColor = this.value;
  });

  function applyBackground() {
  const svgs = document.querySelectorAll('#my-svg');
  svgs.forEach(svg => {
    const defs = svg.querySelector('defs') || svg.insertBefore(document.createElement('defs'), svg.firstChild);
    const gradient = defs.querySelector('linearGradient') || defs.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient'));
    const stop1 = gradient.querySelector('.stop1') || gradient.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'stop'));
    const stop2 = gradient.querySelector('.stop2') || gradient.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'stop'));

    gradient.setAttribute('id', 'gradient1');
    stop1.setAttribute('class', 'stop1');
    stop1.setAttribute('offset', '0%');
    stop2.setAttribute('class', 'stop2');
    stop2.setAttribute('offset', '100%');

    const colorStart = colorPicker1.color.hexString;
    const colorEnd = colorPicker2.color.hexString;
    stop1.setAttribute('stop-color', colorStart);
    stop2.setAttribute('stop-color', colorEnd);

		if (!document.getElementById('trans').checked) {
		if (!document.getElementById('checkbox').checked) {
      const rectss = svg.querySelectorAll('#backgr');
      rectss.forEach(rect => {
        rect.setAttribute('fill', 'url(#gradient1)');
      });
    } else {
      const rectss = svg.querySelectorAll('#backgr');
      rectss.forEach(rect => {
        rect.setAttribute('fill', colorPickerTest.color.hexString);
      });
    }
    }
    
    if (document.getElementById('checkbox').checked) {
      const paths = svg.querySelectorAll('path');
      paths.forEach(path => {
        path.setAttribute('stroke', 'url(#gradient1)');
      });
    } else {
      const paths = svg.querySelectorAll('path');
      paths.forEach(path => {
        path.setAttribute('stroke', colorPicker.color.hexString);
      });
    }
  });
}
  
	colorPicker1.on(['color:init', 'color:change'], applyBackground);

	colorPicker2.on(['color:init', 'color:change'], applyBackground);

  applyBackground();
  function makeTrans() {
    if (document.getElementById('trans').checked) {
      const rectElements = document.querySelectorAll('rect');
      rectElements.forEach(rect => {
        rect.setAttribute('fill', 'none');
      });
    }
  }
  const checkbox = document.getElementById('checkbox');
  const trans = document.getElementById('trans');
  checkbox.addEventListener('change', applyBackground);
  trans.addEventListener('change', makeTrans);
  trans.addEventListener('change', applyBackground);
</script>

<script type="text/javascript">

$(function(){
    $('.range input').on('mousemove', function(){
        var getValRange = $(this).val();
        var newValue = Math.floor(getValRange/1.4);
        $('.range span').text(newValue + '%');
    });
});

</script>

<script type="text/javascript">

$(window).on('load', function(){
    $('.range-size input').on('mousemove', function(){
        var getValRange = $(this).val();
        var newValue = Math.floor(getValRange*50);
        $('.range-size span').text(newValue + '%');
    }).trigger('mousemove'); // trigger the event on page load
});


</script>

<script type="text/javascript">

$(function(){
    $('.range-stroke input').on('mousemove', function(){
        var getValRange = $(this).val();
        var newValue = Math.floor(getValRange*4);
        $('.range-stroke span').text(newValue + '%');
    });
});

</script>
<style>
	.collection-item-2:nth-child(odd) {
  		background-color: rgba(71, 71, 71, 0.15) !important;
  }
</style>