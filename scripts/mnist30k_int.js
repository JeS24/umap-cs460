(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("203e47bb-a9ad-4e88-aac5-fa65c60ed376");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '203e47bb-a9ad-4e88-aac5-fa65c60ed376' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js", "https://unpkg.com/@holoviz/panel@^0.9.7/dist/panel.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          inject_raw_css("table.panel-df {\n    margin-left: auto;\n    margin-right: auto;\n    border: none;\n    border-collapse: collapse;\n    border-spacing: 0;\n    color: black;\n    font-size: 12px;\n    table-layout: fixed;\n    width: 100%;\n}\n\n.panel-df tr, .panel-df th, .panel-df td {\n    text-align: right;\n    vertical-align: middle;\n    padding: 0.5em 0.5em !important;\n    line-height: normal;\n    white-space: normal;\n    max-width: none;\n    border: none;\n}\n\n.panel-df tbody {\n    display: table-row-group;\n    vertical-align: middle;\n    border-color: inherit;\n}\n\n.panel-df tbody tr:nth-child(odd) {\n    background: #f5f5f5;\n}\n\n.panel-df thead {\n    border-bottom: 1px solid black;\n    vertical-align: bottom;\n}\n\n.panel-df tr:hover {\n    background: lightblue !important;\n    cursor: pointer;\n}\n");
        },
        function(Bokeh) {
          inject_raw_css(".json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-row,\n.json-formatter-row a,\n.json-formatter-row a:hover {\n  color: black;\n  text-decoration: none;\n}\n.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: \"No properties\";\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: \"[]\";\n}\n.json-formatter-row .json-formatter-string,\n.json-formatter-row .json-formatter-stringifiable {\n  color: green;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-row .json-formatter-number {\n  color: blue;\n}\n.json-formatter-row .json-formatter-boolean {\n  color: red;\n}\n.json-formatter-row .json-formatter-null {\n  color: #855A00;\n}\n.json-formatter-row .json-formatter-undefined {\n  color: #ca0b69;\n}\n.json-formatter-row .json-formatter-function {\n  color: #FF20ED;\n}\n.json-formatter-row .json-formatter-date {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: blue;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-bracket {\n  color: blue;\n}\n.json-formatter-row .json-formatter-key {\n  color: #00008B;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: \"\\25BA\";\n}\n.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n.json-formatter-dark.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-dark.json-formatter-row,\n.json-formatter-dark.json-formatter-row a,\n.json-formatter-dark.json-formatter-row a:hover {\n  color: white;\n  text-decoration: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: \"No properties\";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: \"[]\";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-string,\n.json-formatter-dark.json-formatter-row .json-formatter-stringifiable {\n  color: #31F031;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-number {\n  color: #66C2FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-boolean {\n  color: #EC4242;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-null {\n  color: #EEC97D;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-undefined {\n  color: #ef8fbe;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-function {\n  color: #FD48CB;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-date {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.json-formatter-dark.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #027BFF;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-bracket {\n  color: #9494FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-key {\n  color: #23A0DB;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: \"\\25BA\";\n}\n.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n");
        },
        function(Bokeh) {
          inject_raw_css(".codehilite .hll { background-color: #ffffcc }\n.codehilite  { background: #f8f8f8; }\n.codehilite .c { color: #408080; font-style: italic } /* Comment */\n.codehilite .err { border: 1px solid #FF0000 } /* Error */\n.codehilite .k { color: #008000; font-weight: bold } /* Keyword */\n.codehilite .o { color: #666666 } /* Operator */\n.codehilite .ch { color: #408080; font-style: italic } /* Comment.Hashbang */\n.codehilite .cm { color: #408080; font-style: italic } /* Comment.Multiline */\n.codehilite .cp { color: #BC7A00 } /* Comment.Preproc */\n.codehilite .cpf { color: #408080; font-style: italic } /* Comment.PreprocFile */\n.codehilite .c1 { color: #408080; font-style: italic } /* Comment.Single */\n.codehilite .cs { color: #408080; font-style: italic } /* Comment.Special */\n.codehilite .gd { color: #A00000 } /* Generic.Deleted */\n.codehilite .ge { font-style: italic } /* Generic.Emph */\n.codehilite .gr { color: #FF0000 } /* Generic.Error */\n.codehilite .gh { color: #000080; font-weight: bold } /* Generic.Heading */\n.codehilite .gi { color: #00A000 } /* Generic.Inserted */\n.codehilite .go { color: #888888 } /* Generic.Output */\n.codehilite .gp { color: #000080; font-weight: bold } /* Generic.Prompt */\n.codehilite .gs { font-weight: bold } /* Generic.Strong */\n.codehilite .gu { color: #800080; font-weight: bold } /* Generic.Subheading */\n.codehilite .gt { color: #0044DD } /* Generic.Traceback */\n.codehilite .kc { color: #008000; font-weight: bold } /* Keyword.Constant */\n.codehilite .kd { color: #008000; font-weight: bold } /* Keyword.Declaration */\n.codehilite .kn { color: #008000; font-weight: bold } /* Keyword.Namespace */\n.codehilite .kp { color: #008000 } /* Keyword.Pseudo */\n.codehilite .kr { color: #008000; font-weight: bold } /* Keyword.Reserved */\n.codehilite .kt { color: #B00040 } /* Keyword.Type */\n.codehilite .m { color: #666666 } /* Literal.Number */\n.codehilite .s { color: #BA2121 } /* Literal.String */\n.codehilite .na { color: #7D9029 } /* Name.Attribute */\n.codehilite .nb { color: #008000 } /* Name.Builtin */\n.codehilite .nc { color: #0000FF; font-weight: bold } /* Name.Class */\n.codehilite .no { color: #880000 } /* Name.Constant */\n.codehilite .nd { color: #AA22FF } /* Name.Decorator */\n.codehilite .ni { color: #999999; font-weight: bold } /* Name.Entity */\n.codehilite .ne { color: #D2413A; font-weight: bold } /* Name.Exception */\n.codehilite .nf { color: #0000FF } /* Name.Function */\n.codehilite .nl { color: #A0A000 } /* Name.Label */\n.codehilite .nn { color: #0000FF; font-weight: bold } /* Name.Namespace */\n.codehilite .nt { color: #008000; font-weight: bold } /* Name.Tag */\n.codehilite .nv { color: #19177C } /* Name.Variable */\n.codehilite .ow { color: #AA22FF; font-weight: bold } /* Operator.Word */\n.codehilite .w { color: #bbbbbb } /* Text.Whitespace */\n.codehilite .mb { color: #666666 } /* Literal.Number.Bin */\n.codehilite .mf { color: #666666 } /* Literal.Number.Float */\n.codehilite .mh { color: #666666 } /* Literal.Number.Hex */\n.codehilite .mi { color: #666666 } /* Literal.Number.Integer */\n.codehilite .mo { color: #666666 } /* Literal.Number.Oct */\n.codehilite .sa { color: #BA2121 } /* Literal.String.Affix */\n.codehilite .sb { color: #BA2121 } /* Literal.String.Backtick */\n.codehilite .sc { color: #BA2121 } /* Literal.String.Char */\n.codehilite .dl { color: #BA2121 } /* Literal.String.Delimiter */\n.codehilite .sd { color: #BA2121; font-style: italic } /* Literal.String.Doc */\n.codehilite .s2 { color: #BA2121 } /* Literal.String.Double */\n.codehilite .se { color: #BB6622; font-weight: bold } /* Literal.String.Escape */\n.codehilite .sh { color: #BA2121 } /* Literal.String.Heredoc */\n.codehilite .si { color: #BB6688; font-weight: bold } /* Literal.String.Interpol */\n.codehilite .sx { color: #008000 } /* Literal.String.Other */\n.codehilite .sr { color: #BB6688 } /* Literal.String.Regex */\n.codehilite .s1 { color: #BA2121 } /* Literal.String.Single */\n.codehilite .ss { color: #19177C } /* Literal.String.Symbol */\n.codehilite .bp { color: #008000 } /* Name.Builtin.Pseudo */\n.codehilite .fm { color: #0000FF } /* Name.Function.Magic */\n.codehilite .vc { color: #19177C } /* Name.Variable.Class */\n.codehilite .vg { color: #19177C } /* Name.Variable.Global */\n.codehilite .vi { color: #19177C } /* Name.Variable.Instance */\n.codehilite .vm { color: #19177C } /* Name.Variable.Magic */\n.codehilite .il { color: #666666 } /* Literal.Number.Integer.Long */\n\n.markdown h1 { margin-block-start: 0.34em }\n.markdown h2 { margin-block-start: 0.42em }\n.markdown h3 { margin-block-start: 0.5em }\n.markdown h4 { margin-block-start: 0.67em }\n.markdown h5 { margin-block-start: 0.84em }\n.markdown h6 { margin-block-start: 1.17em }\n.markdown ul { padding-inline-start: 2em }\n.markdown ol { padding-inline-start: 2em }\n.markdown strong { font-weight: 600 }\n.markdown a { color: -webkit-link }\n.markdown a { color: -moz-hyperlinkText }\n");
        },
        function(Bokeh) {
          inject_raw_css(".panel-widget-box {\n\tmin-height: 20px;\n\tbackground-color: #f5f5f5;\n\tborder: 1px solid #e3e3e3 !important;\n\tborder-radius: 4px;\n\t-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\n\tbox-shadow: inset 0 1px 1px rgba(0,0,0,.05);\n\toverflow-x: hidden;\n\toverflow-y: hidden;\n}\n\n.scrollable {\n  overflow: scroll;\n}\n\nprogress {\n\tappearance: none;\n\t-moz-appearance: none;\n\t-webkit-appearance: none;\n\n\tborder: none;\n\theight: 20px;\n\tbackground-color: whiteSmoke;\n\tborder-radius: 3px;\n\tbox-shadow: 0 2px 3px rgba(0,0,0,.5) inset;\n\tcolor: royalblue;\n\tposition: relative;\n\tmargin: 0 0 1.5em;\n}\n\nprogress[value]::-webkit-progress-bar {\n\tbackground-color: whiteSmoke;\n\tborder-radius: 3px;\n\tbox-shadow: 0 2px 3px rgba(0,0,0,.5) inset;\n}\n\nprogress[value]::-webkit-progress-value {\n\tposition: relative;\n\n\tbackground-size: 35px 20px, 100% 100%, 100% 100%;\n\tborder-radius:3px;\n}\n\nprogress.active:not([value])::before {\n\tbackground-position: 10%;\n\tanimation-name: stripes;\n\tanimation-duration: 3s;\n\tanimation-timing-function: linear;\n\tanimation-iteration-count: infinite;\n}\n\nprogress[value]::-moz-progress-bar {\n\tbackground-size: 35px 20px, 100% 100%, 100% 100%;\n\tborder-radius:3px;\n}\n\nprogress:not([value])::-moz-progress-bar {\n\tborder-radius:3px;\n\tbackground:\n\tlinear-gradient(-45deg, transparent 33%, rgba(0, 0, 0, 0.2) 33%, rgba(0, 0, 0, 0.2) 66%, transparent 66%) left/2.5em 1.5em;\n\n}\n\nprogress.active:not([value])::-moz-progress-bar {\n\tbackground-position: 10%;\n\tanimation-name: stripes;\n\tanimation-duration: 3s;\n\tanimation-timing-function: linear;\n\tanimation-iteration-count: infinite;\n}\n\nprogress.active:not([value])::-webkit-progress-bar {\n\tbackground-position: 10%;\n\tanimation-name: stripes;\n\tanimation-duration: 3s;\n\tanimation-timing-function: linear;\n\tanimation-iteration-count: infinite;\n}\n\nprogress.primary[value]::-webkit-progress-value { background-color: #007bff; }\nprogress.primary:not([value])::before { background-color: #007bff; }\nprogress.primary:not([value])::-webkit-progress-bar { background-color: #007bff; }\nprogress.primary::-moz-progress-bar { background-color: #007bff; }\n\nprogress.secondary[value]::-webkit-progress-value { background-color: #6c757d; }\nprogress.secondary:not([value])::before { background-color: #6c757d; }\nprogress.secondary:not([value])::-webkit-progress-bar { background-color: #6c757d; }\nprogress.secondary::-moz-progress-bar { background-color: #6c757d; }\n\nprogress.success[value]::-webkit-progress-value { background-color: #28a745; }\nprogress.success:not([value])::before { background-color: #28a745; }\nprogress.success:not([value])::-webkit-progress-bar { background-color: #28a745; }\nprogress.success::-moz-progress-bar { background-color: #28a745; }\n\nprogress.danger[value]::-webkit-progress-value { background-color: #dc3545; }\nprogress.danger:not([value])::before { background-color: #dc3545; }\nprogress.danger:not([value])::-webkit-progress-bar { background-color: #dc3545; }\nprogress.danger::-moz-progress-bar { background-color: #dc3545; }\n\nprogress.warning[value]::-webkit-progress-value { background-color: #ffc107; }\nprogress.warning:not([value])::before { background-color: #ffc107; }\nprogress.warning:not([value])::-webkit-progress-bar { background-color: #ffc107; }\nprogress.warning::-moz-progress-bar { background-color: #ffc107; }\n\nprogress.info[value]::-webkit-progress-value { background-color: #17a2b8; }\nprogress.info:not([value])::before { background-color: #17a2b8; }\nprogress.info:not([value])::-webkit-progress-bar { background-color: #17a2b8; }\nprogress.info::-moz-progress-bar { background-color: #17a2b8; }\n\nprogress.light[value]::-webkit-progress-value { background-color: #f8f9fa; }\nprogress.light:not([value])::before { background-color: #f8f9fa; }\nprogress.light:not([value])::-webkit-progress-bar { background-color: #f8f9fa; }\nprogress.light::-moz-progress-bar { background-color: #f8f9fa; }\n\nprogress.dark[value]::-webkit-progress-value { background-color: #343a40; }\nprogress.dark:not([value])::-webkit-progress-bar { background-color: #343a40; }\nprogress.dark:not([value])::before { background-color: #343a40; }\nprogress.dark::-moz-progress-bar { background-color: #343a40; }\n\nprogress:not([value])::-webkit-progress-bar {\n\tborder-radius: 3px;\n\tbackground:\n\tlinear-gradient(-45deg, transparent 33%, rgba(0, 0, 0, 0.2) 33%, rgba(0, 0, 0, 0.2) 66%, transparent 66%) left/2.5em 1.5em;\n}\nprogress:not([value])::before {\n\tcontent:\" \";\n\tposition:absolute;\n\theight: 20px;\n\ttop:0;\n\tleft:0;\n\tright:0;\n\tbottom:0;\n\tborder-radius: 3px;\n\tbackground:\n\tlinear-gradient(-45deg, transparent 33%, rgba(0, 0, 0, 0.2) 33%, rgba(0, 0, 0, 0.2) 66%, transparent 66%) left/2.5em 1.5em;\n}\n\n@keyframes stripes {\n  from {background-position: 0%}\n  to {background-position: 100%}\n}\n");
        },
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var render_items = [{"docid":"1db7655a-5323-45ff-bc8a-dc0f37378d17","root_ids":["4311"],"roots":{"4311":"203e47bb-a9ad-4e88-aac5-fa65c60ed376"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();