;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-twitter" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M639.610888 722.420407 406.626579 722.420407c-69.937862 0-96.904027-46.37419-96.904027-96.115058 0-23.563672 0.035816-43.653219 1.50426-91.281983l328.275605 0c43.151799 0 94.683453-18.907629 94.683453-112.803135 0-86.554308-43.901883-117.279077-94.861508-117.279077l-330.388732 1.431605c0-144.209426 24.602328-232.983285-117.53081-232.983285-73.949222 0-117.064182 21.916149-116.741841 143.242402 0.179079 65.175395 0.967024 53.751205 1.25355 117.064182 0.071631 12.033058-1.360997 24.136723-1.324158 36.204573 0.143263 41.46846-0.465604 83.187631-0.25071 124.907824 0.071631 44.870953-0.143263 118.712729 0.143263 163.54582 1.468444 243.97871 169.741939 294.865681 236.2067 294.865681 44.441165 0 299.234175-0.286526 330.640466-0.286526 31.44006 0 89.274256-6.732331 89.274256-116.993574C730.604298 743.084029 682.761664 722.420407 639.610888 722.420407z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M247.46051 751.814878c-28.747741 0-52.02591 23.278169-52.02591 52.02898 0 28.691459 23.279193 52.027957 52.02591 52.027957 28.749788 0 51.970652-23.336498 51.970652-52.027957C299.431162 775.093047 276.210297 751.814878 247.46051 751.814878z"  ></path>' +
    '' +
    '<path d="M593.208045 751.814878c-28.691459 0-51.970652 23.278169-51.970652 52.02898 0 28.691459 23.279193 52.027957 51.970652 52.027957s51.970652-23.336498 51.970652-52.027957C645.178697 775.093047 621.899504 751.814878 593.208045 751.814878z"  ></path>' +
    '' +
    '<path d="M926.966525 154.48342 814.531779 154.48342c-38.352493 0-44.348044 27.468608-44.348044 27.468608L749.933529 257.724783 286.510898 257.724783c-121.864512 0-221.032092 99.16758-221.032092 221.032092 0 121.862465 99.16758 221.031069 221.032092 221.031069L620.270401 699.787944c66.695005 0 87.120197-57.267285 87.120197-57.267285l115.057479-429.490821 104.520495 0c16.121166 0 29.272697-13.093203 29.272697-29.331026C956.240245 167.576623 943.087691 154.48342 926.966525 154.48342z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wangluoanquan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M956.884416 418.035932c-22.74605-26.500561-52.457746-47.369867-86.712921-59.125609-6.964622-80.564897-42.281989-153.075351-96.888677-207.40984-60.458977-60.458977-143.961786-97.925287-236.528018-97.925287-67.966974 0-131.119293 20.325931-183.576015 54.851259-48.4075 32.132838-87.775112 76.020394-114.497731 127.391389-57.273425 8.54563-108.644419 36.626175-146.654105 77.05598-43.071981 45.220924-69.301366 106.767676-69.301366 173.944658 0 69.572542 28.623921 132.971477 74.635861 179.006953l0 0.270153c45.517683 45.494147 109.187795 74.119091 178.760336 74.119091l23.808242 0c6.964622 14.44806 14.719236 28.352745 23.289426 42.010813 42.800805 68.214614 104.075357 126.031415 178.216961 166.43666 6.421246 4.025687 14.966876 4.544503 22.202675 0.543376 74.117045-40.948621 135.934972-98.197486 178.48916-166.980036 8.816806-13.658068 16.572444-27.562752 23.537066-42.010813l82.933851 0c53.001121-0.543376 101.45774-22.227234 137.021723-57.273425l0 0c35.341926-35.589566 57.248865-84.563978 57.248865-138.627291C1002.871797 496.697479 985.237161 452.809923 956.884416 418.035932L956.884416 418.035932zM664.120606 758.416226 664.120606 758.416226c-36.650735 58.33357-88.837304 108.37222-151.445224 144.751778-62.089104-36.379559-114.52229-86.418208-150.926408-144.751778-37.19411-59.422368-58.335616-128.451534-58.335616-200.691835 0-15.534811 1.086751-31.31624 2.692319-46.036499 1.062192-9.632381 2.667759-18.992563 4.79112-27.833929l404.051429 0c1.630127 8.841366 3.235694 18.201547 4.296863 27.562752 2.148943 14.991436 2.938935 30.772864 2.938935 46.307675C722.184023 629.964692 701.0681 698.994881 664.120606 758.416226L664.120606 758.416226zM892.102994 629.421316 892.102994 629.421316l0 0.296759c-21.683858 21.659299-51.370994 35.046191-84.292801 35.046191l-54.30993 0c9.384741-34.798551 13.929244-70.140477 13.929244-107.038852 0-17.683754-1.111311-34.255175-3.235694-51.642171-1.876744-16.868179-4.79112-33.192983-9.089006-49.51881-2.148943-10.175757-11.509125-18.201547-21.931498-18.201547L292.695249 438.362886c-10.150174 0-19.535939 6.964622-21.906939 17.140379-4.296863 16.597003-7.507998 33.168424-9.656941 50.579979-2.124384 17.386996-3.185552 33.95944-3.185552 51.642171 0 36.898375 5.334495 72.240301 13.904685 107.038852-47.097668-1.086751-89.924055-20.895913-121.486912-51.938929l0 0c-32.107255-32.106232-52.457746-76.537164-52.457746-126.006855 0-47.369867 18.744923-90.738607 48.703235-122.573663 29.982872-31.564903 71.696925-52.160987 117.733425-55.643298 14.47262 0 27.833929-8.570189 33.736359-22.227234 20.325931-47.616484 54.03773-87.478354 96.319719-115.065665 40.405245-26.771737 89.38068-42.554188 142.356218-42.554188 71.450309 0 136.453788 29.192879 183.576015 76.019371 46.826492 46.826492 75.969229 112.12673 75.969229 183.823656 0 18.201547 12.867052 33.711799 31.588439 37.46631 28.377304 4.272303 53.519937 19.807115 71.721485 40.676421 17.115819 20.59813 27.809369 47.641043 27.809369 77.574796C927.420361 577.779146 914.059052 607.762017 892.102994 629.421316L892.102994 629.421316zM668.936285 513.836835 668.936285 513.836835l0-0.271176L356.661096 513.565658c-24.870434 0-22.74605 26.476001-22.74605 43.887556l0 0.272199-0.518816 0c0 60.484559 16.053628 117.190049 43.862997 167.770028l1.086751 1.308809c28.89612 52.482305 71.721485 97.975429 121.486912 132.47722 8.026814 5.359055 18.473747 5.359055 26.228361-0.246617l0.518816-0.272199c50.308803-35.614126 92.590791-81.081667 121.486912-133.267213 28.352745-50.579979 44.134173-107.285468 44.134173-167.770028l-0.246617-2.173502C691.683359 538.436092 693.041286 513.836835 668.936285 513.836835L668.936285 513.836835zM416.058904 702.748369 416.058904 702.748369c-23.264866-43.097564-37.169551-92.047416-37.169551-143.715169l223.413326 0L416.058904 702.748369 416.058904 702.748369zM608.748485 703.83512 608.748485 703.83512c-23.289426 41.714054-55.915497 79.180364-96.073102 109.163235-27.562752-20.893866-51.91437-44.974307-71.968102-72.26486l204.939579-158.137647C642.164548 626.235764 629.322056 666.887626 608.748485 703.83512L608.748485 703.83512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-facebook" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M756 6.848l0 150.848-89.728 0q-49.152 0-66.272 20.576t-17.152 61.728l0 108 167.424 0-22.272 169.152-145.152 0 0 433.728-174.848 0 0-433.728-145.728 0 0-169.152 145.728 0 0-124.576q0-106.272 59.424-164.864t158.272-58.56q84 0 130.272 6.848z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-linkedin" viewBox="0 0 1071 1024">' +
    '' +
    '<path d="M243.324273 332.587229 243.324273 1023.516611 13.246865 1023.516611 13.246865 332.587229ZM257.96554 119.242734C258.430355 153.173333 246.694086 181.526322 222.756732 204.30166 198.81942 227.076998 167.329005 238.464646 128.285569 238.464646L126.891166 238.464646C88.777318 238.464646 58.100339 227.076998 34.860228 204.30166 11.620076 181.526322 0 153.173333 0 119.242734 0 84.847321 11.968656 56.37818 35.906009 33.835229 59.843363 11.292278 91.10135 0.020823 129.679971 0.020823 168.258634 0.020823 199.168 11.292278 222.408152 33.835229 245.648305 56.37818 257.500767 84.847321 257.96554 119.242734ZM1070.90568 627.504601 1070.90568 1023.516611 841.525474 1023.516611 841.525474 653.998373C841.525474 605.194078 832.113236 566.964037 813.28872 539.308291 794.464203 511.652503 765.065433 497.82463 725.092368 497.82463 695.809791 497.82463 671.291471 505.842465 651.537325 521.878177 631.78322 537.913888 617.025718 557.784186 607.264859 581.489153 602.152022 595.433219 599.595604 614.257736 599.595604 637.962661L599.595604 1023.516611 370.215439 1023.516611C371.145027 838.060291 371.609842 687.696586 371.609842 572.425495 371.609842 457.154363 371.377455 388.363578 370.91264 366.053013L370.215439 332.587229 599.595604 332.587229 599.595604 432.984623 598.201201 432.984623C607.497287 418.110928 617.025718 405.096449 626.786577 393.941188 636.547436 382.785926 649.678108 370.701077 666.178634 357.686598 682.679119 344.67212 702.898038 334.562639 726.835392 327.358199 750.772745 320.153758 777.38271 316.551517 806.665287 316.551517 886.146561 316.551517 950.056938 342.929096 998.396418 395.684211 1046.73594 448.439327 1070.90568 525.712804 1070.90568 627.504601ZM1070.90568 627.504601"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyingshi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M938.666667 426.666667 938.666667 170.666667c0-22.698667-19.882667-42.666667-42.666667-42.666667L128 128C105.216 128 85.333333 147.968 85.333333 170.666667l0 554.666667c0 22.698667 19.882667 42.666667 42.666667 42.666667l298.666667 0 0 85.333333c0 0-42.666667 0-85.333333 0s-42.666667 42.666667-42.666667 42.666667l383.957333 0c0 42.666667 42.709333 42.666667 42.709333 42.666667L938.666667 938.666667c0 0 42.666667 0 42.666667-42.666667s0-384 0-426.666667C981.333333 426.666667 938.709333 426.666667 938.666667 426.666667zM128 682.666667 128 170.666667l768 0 0 256-170.666667 0c0 0-42.666667 0-42.666667 42.666667 0 21.333333 0 117.333333 0 213.333333L128 682.666667zM597.333333 853.333333l0-85.333333 85.290667 0c0 32.896 0 62.378667 0 85.333333L597.333333 853.333333zM832 896c-11.776 0-21.333333-9.557333-21.333333-21.333333 0-11.776 9.557333-21.333333 21.333333-21.333333s21.333333 9.557333 21.333333 21.333333C853.333333 886.442667 843.776 896 832 896zM938.666667 810.666667l-213.376 0 0-341.333333L938.666667 469.333333 938.666667 810.666667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)