<script type="text/javascript">
var pres = document.getElementsByClassName('blockcode'), pre, code, lines, pl, cl;
     for (pl = pres.length, p = 0; p < pl; p++) {
          pre  = pres[p];
          code = pre.children[0]; 
          code.innerHTML = code.innerHTML.split("\n").map
          (function(line) {return '<span class="line">' + line + '</span>';
        }).join("\n");
          lines = code.getElementsByClassName('line');
     for (cl = lines.length, l = 0; l < cl; l++) {
          lines[l].style.width = pre.scrollWidth + 'px';
          }
}
</script>