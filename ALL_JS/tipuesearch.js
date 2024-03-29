
/*
Tipue Search 6.1
Copyright (c) 2017 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


($ => {

     $.fn.tipuesearch = function(options) {

          const set = $.extend( {

          'contentLocation'        : 'tipuesearch/tipuesearch_content.json',
          'contextBuffer'          : 60,
          'contextLength'          : 60,
          'contextStart'           : 90,
          'debug'                  : false,
          'descriptiveWords'       : 25,
          'highlightTerms'         : true,
          'liveContent'            : '*',
          'liveDescription'        : '*',
          'minimumLength'          : 3,
          'mode'                   : 'static',
          'newWindow'              : false,
          'show'                   : 9,
          'showContext'            : true,
          'showRelated'            : true,
          'showTime'               : true,
          'showTitleCount'         : true,
          'showURL'                : false,
          'wholeWords'             : true

          }, options);

          return this.each(function() {

               let tipuesearch_in = {
                    pages: []
               };
               $.ajaxSetup({
                    async: false
               });
               let tipuesearch_t_c = 0;

               $('#tipue_search_content').hide().html('<div class="tipue_search_spinner"><div class="tipue_search_rect1"></div><div class="tipue_search_rect2"></div><div class="rect3"></div></div>').show();

               if (set.mode == 'live')
               {
                    for (let i = 0; i < tipuesearch_pages.length; i++)
                    {
                         $.get(tipuesearch_pages[i]).done(html => {
                              let cont = $(set.liveContent, html).text();
                              cont = cont.replace(/\s+/g, ' ');
                              let desc = $(set.liveDescription, html).text();
                              desc = desc.replace(/\s+/g, ' ');

                              const t_1 = html.toLowerCase().indexOf('<title>');
                              const t_2 = html.toLowerCase().indexOf('</title>', t_1 + 7);
                              if (t_1 != -1 && t_2 != -1)
                              {
                                   var tit = html.slice(t_1 + 7, t_2);
                              }
                              else
                              {
                                   var tit = tipuesearch_string_1;
                              }

                              tipuesearch_in.pages.push(
                              {
                                   "title": tit,
                                   "text": desc,
                                   "tags": cont,
                                   "url": tipuesearch_pages[i]
                              });
                         });
                    }
               }

               if (set.mode == 'json')
               {
                    $.getJSON(set.contentLocation).done(json => {
                         tipuesearch_in = $.extend({}, json);
                    });
               }

               if (set.mode == 'static')
               {
                    tipuesearch_in = $.extend({}, tipuesearch);
               }

               let tipue_search_w = '';
               if (set.newWindow)
               {
                    tipue_search_w = ' target="_blank"';
               }

               function getURLP(name)
               {
                    const _locSearch = location.search;
                    const _splitted = (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(_locSearch)||[,""]);
                    let searchString = _splitted[1].replace(/\+/g, '%20');
                    try
                    {
                         searchString = decodeURIComponent(searchString);
                    }
                    catch(e)
                    {
                         searchString = unescape(searchString);
                    }
                    return searchString || null;
               }

               if (getURLP('q'))
               {
                    $('#tipue_search_input').val(getURLP('q'));
                    getTipueSearch(0, true);
               }

               $(this).keyup(event => {
                    if(event.keyCode == '13')
                    {
                         getTipueSearch(0, true);
                    }
               });


               function getTipueSearch(start, replace)
               {
                    let out = '';
                    let show_replace = false;
                    let show_stop = false;
                    let standard = true;
                    let c = 0;
                    found = [];

                    let d_o = $('#tipue_search_input').val();
                    let d = d_o.toLowerCase();
                    d = $.trim(d);

                    if ((d.match("^\"") && d.match("\"$")) || (d.match("^'") && d.match("'$")))
                    {
                         standard = false;
                    }

                    let d_w = d.split(' ');

                    if (standard)
                    {
                         d = '';
                         for (var i = 0; i < d_w.length; i++)
                         {
                              let a_w = true;
                              for (var f = 0; f < tipuesearch_stop_words.length; f++)
                              {
                                   if (d_w[i] == tipuesearch_stop_words[f])
                                   {
                                        a_w = false;
                                        show_stop = true;
                                   }
                              }
                              if (a_w)
                              {
                                   d = d + ' ' + d_w[i];
                              }
                         }
                         d = $.trim(d);
                         d_w = d.split(' ');
                    }
                    else
                    {
                         d = d.substring(1, d.length - 1);
                    }

                    if (d.length >= set.minimumLength)
                    {
                         if (standard)
                         {
                              if (replace)
                              {
                                   var d_r = d;
                                   for (var i = 0; i < d_w.length; i++)
                                   {
                                        for (var f = 0; f < tipuesearch_replace.words.length; f++)
                                        {
                                             if (d_w[i] == tipuesearch_replace.words[f].word)
                                             {
                                                  d = d.replace(d_w[i], tipuesearch_replace.words[f].replace_with);
                                                  show_replace = true;
                                             }
                                        }
                                   }
                                   d_w = d.split(' ');
                              }

                              let d_t = d;
                              for (var i = 0; i < d_w.length; i++)
                              {
                                   for (var f = 0; f < tipuesearch_stem.words.length; f++)
                                   {
                                        if (d_w[i] == tipuesearch_stem.words[f].word)
                                        {
                                             d_t = d_t + ' ' + tipuesearch_stem.words[f].stem;
                                        }
                                   }
                              }
                              d_w = d_t.split(' ');

                              for (var i = 0; i < tipuesearch_in.pages.length; i++)
                              {
                                   var score = 0;
                                   var s_t = tipuesearch_in.pages[i].text;
                                   for (var f = 0; f < d_w.length; f++)
                                   {
                                        if (set.wholeWords)
                                        {
                                             var pat = new RegExp('\\b' + d_w[f] + '\\b', 'gi');
                                        }
                                        else
                                        {
                                             var pat = new RegExp(d_w[f], 'gi');
                                        }
                                        if (tipuesearch_in.pages[i].title.search(pat) != -1)
                                        {
                                             var m_c = tipuesearch_in.pages[i].title.match(pat).length;
                                             score += (20 * m_c);
                                        }
                                        if (tipuesearch_in.pages[i].text.search(pat) != -1)
                                        {
                                             var m_c = tipuesearch_in.pages[i].text.match(pat).length;
                                             score += (20 * m_c);
                                        }

                                        if (tipuesearch_in.pages[i].tags.search(pat) != -1)
                                        {
                                             var m_c = tipuesearch_in.pages[i].tags.match(pat).length;
                                             score += (10 * m_c);
                                        }

                                        if (tipuesearch_in.pages[i].url.search(pat) != -1)
                                        {
                                             score += 20;
                                        }

                                        if (score != 0)
                                        {
                                             for (var e = 0; e < tipuesearch_weight.weight.length; e++)
                                             {
                                                  if (tipuesearch_in.pages[i].url == tipuesearch_weight.weight[e].url)
                                                  {
                                                       score += tipuesearch_weight.weight[e].score;
                                                  }
                                             }
                                        }

                                        if (d_w[f].match('^-'))
                                        {
                                             pat = new RegExp(d_w[f].substring(1), 'i');
                                             if (tipuesearch_in.pages[i].title.search(pat) != -1 || tipuesearch_in.pages[i].text.search(pat) != -1 || tipuesearch_in.pages[i].tags.search(pat) != -1)
                                             {
                                                  score = 0;
                                             }
                                        }
                                   }

                                   if (score != 0)
                                   {
                                        found.push(
                                        {
                                             "score": score,
                                             "title": tipuesearch_in.pages[i].title,
                                             "desc": s_t,
                                             "url": tipuesearch_in.pages[i].url
                                        });
                                        c++;
                                   }
                              }
                         }
                         else
                         {
                              for (var i = 0; i < tipuesearch_in.pages.length; i++)
                              {
                                   var score = 0;
                                   var s_t = tipuesearch_in.pages[i].text;
                                   var pat = new RegExp(d, 'gi');
                                   if (tipuesearch_in.pages[i].title.search(pat) != -1)
                                   {
                                        var m_c = tipuesearch_in.pages[i].title.match(pat).length;
                                        score += (20 * m_c);
                                   }
                                   if (tipuesearch_in.pages[i].text.search(pat) != -1)
                                   {
                                        var m_c = tipuesearch_in.pages[i].text.match(pat).length;
                                        score += (20 * m_c);
                                   }

                                   if (tipuesearch_in.pages[i].tags.search(pat) != -1)
                                   {
                                        var m_c = tipuesearch_in.pages[i].tags.match(pat).length;
                                        score += (10 * m_c);
                                   }

                                   if (tipuesearch_in.pages[i].url.search(pat) != -1)
                                   {
                                        score += 20;
                                   }

                                   if (score != 0)
                                   {
                                        for (var e = 0; e < tipuesearch_weight.weight.length; e++)
                                        {
                                             if (tipuesearch_in.pages[i].url == tipuesearch_weight.weight[e].url)
                                             {
                                                  score += tipuesearch_weight.weight[e].score;
                                             }
                                        }
                                   }

                                   if (score != 0)
                                   {
                                        found.push(
                                        {
                                             "score": score,
                                             "title": tipuesearch_in.pages[i].title,
                                             "desc": s_t,
                                             "url": tipuesearch_in.pages[i].url
                                        });
                                        c++;
                                   }
                              }
                         }

                         if (c != 0)
                         {
                              if (set.showTitleCount && tipuesearch_t_c == 0)
                              {
                                   const title = document.title;
                                   document.title = '(' + c + ') ' + title;
                                   tipuesearch_t_c++;
                              }

                              if (show_replace)
                              {
                                   out += '<div id="tipue_search_warning">' + tipuesearch_string_2 + ' ' + d + '. ' + tipuesearch_string_3 + ' <a id="tipue_search_replaced">' + d_r + '</a></div>';
                              }
                              if (c == 1)
                              {
                                   out += '<div id="tipue_search_results_count">' + tipuesearch_string_4;
                              }
                              else
                              {
                                   c_c = c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                   out += '<div id="tipue_search_results_count">' + c_c + ' ' + tipuesearch_string_5;
                              }
                              if (set.showTime)
                              {
                                   const endTimer = new Date().getTime();
                                   const time = (endTimer - startTimer) / 1000;
                                   out += ' (' + time.toFixed(2) + ' ' + tipuesearch_string_14 + ')';
                                   set.showTime = false;
                              }
                              out += '</div>';
                              out += '<ul class="search-results">';

                              found.sort((a, b) => { return b.score - a.score } );

                              let l_o = 0;
                              for (var i = 0; i < found.length; i++)
                              {
                                   if (l_o >= start && l_o < set.show + start)
                                   {
                                        out += '<li><h3"><a href="' + found[i].url + '"' + tipue_search_w + '>' +  found[i].title + '</a></h2>';

                                        if (set.debug)
                                        {
                                             out += '<p class="tipue_search_content_debug">Score: ' + found[i].score + '</p>';
                                        }

                                        if (set.showURL)
                                        {
                                             let s_u = found[i].url.toLowerCase();
                                             if (s_u.indexOf('http://') == 0)
                                             {
                                                  s_u = s_u.slice(7);
                                             }
                                             out += '<p class="tipue_search_content_url"><a href="' + found[i].url + '"' + tipue_search_w + '>' + s_u + '</a></p>';
                                        }

                                        if (found[i].desc)
                                        {
                                             let t = found[i].desc;

                                             if (set.showContext)
                                             {
                                                  d_w = d.split(' ');
                                                  const s_1 = found[i].desc.toLowerCase().indexOf(d_w[0]);
                                                  if (s_1 > set.contextStart)
                                                  {
                                                       let t_1 = t.substr(s_1 - set.contextBuffer);
                                                       const s_2 = t_1.indexOf(' ');
                                                       t_1 = t.substr(s_1 - set.contextBuffer + s_2);
                                                       t_1 = $.trim(t_1);

                                                       if (t_1.length > set.contextLength)
                                                       {
                                                            t = '… ' + t_1;
                                                       }
                                                  }
                                             }

                                             if (standard)
                                             {
                                                  d_w = d.split(' ');
                                                  for (var f = 0; f < d_w.length; f++)
                                                  {
                                                       if (set.highlightTerms)
                                                       {
                                                            var patr = new RegExp('(' + d_w[f] + ')', 'gi');
                                                            t = t.replace(patr, "<h0011>$1<h0012>");
                                                       }
                                                  }
                                             }
                                             else if (set.highlightTerms)
                                             {
                                                  var patr = new RegExp('(' + d + ')', 'gi');
                                                  t = t.replace(patr, "<mark>$1</mark>");
                                             }

                                             let t_d = '';
                                             const t_w = t.split(' ');
                                             if (t_w.length < set.descriptiveWords)
                                             {
                                                  t_d = t;
                                             }
                                             else
                                             {
                                                  for (var f = 0; f < set.descriptiveWords; f++)
                                                  {
                                                       t_d += t_w[f] + ' ';
                                                  }
                                             }
                                             t_d = $.trim(t_d);
                                             if (t_d.charAt(t_d.length - 1) != '.')
                                             {
                                                  t_d += ' …';
                                             }

                                             t_d = t_d.replace(/h0011/g, 'mark');
                                             t_d = t_d.replace(/h0012/g, '/mark');

                                             out += '<p class="tipue_search_content_text">' + t_d + '</p></li>';
                                        }
                                   }
                                   l_o++;
                              }

                              if (set.showRelated && standard)
                              {
                                   f = 0;
                                   for (var i = 0; i < tipuesearch_related.searches.length; i++)
                                   {
                                        if (d == tipuesearch_related.searches[i].search)
                                        {
                                             if (show_replace)
                                             {
                                                  d_o = d;
                                             }
                                             if (!f)
                                             {
                                                  out += '<div class="tipue_search_related_title">' + tipuesearch_string_15 + ' <span class="tipue_search_related_bold">' + d_o + '</span></div><div class="tipue_search_related_cols">';
                                             }

                                             out += '<div class="tipue_search_related_text"><a class="tipue_search_related" id="' + tipuesearch_related.searches[i].related + '">';
                                             if (tipuesearch_related.searches[i].before)
                                             {
                                                  out += '<span class="tipue_search_related_before">' + tipuesearch_related.searches[i].before + '</span> ';
                                             }
                                             out += tipuesearch_related.searches[i].related;
                                             if (tipuesearch_related.searches[i].after)
                                             {
                                                  out += ' <span class="tipue_search_related_after">' + tipuesearch_related.searches[i].after + '</span>';
                                             }
                                             out += '</a></div>';
                                             f++;
                                        }
                                   }
                                   if (f)
                                   {
                                        out += '</div>';
                                   }
                              }

                              out += '</ul>';

                              if (c > set.show)
                              {
                                   const pages = Math.ceil(c / set.show);
                                   const page = (start / set.show);
                                   out += '<footer><nav class="pagination" aria-label="pagination"><ul>';

                                   if (start > 0)
                                   {
                                       out += '<li><button class="tipue_search_foot_box" id="' + (start - set.show) + '_' + replace + '">' + tipuesearch_string_6 + '</button></li>';
                                   }

                                   if (page <= 2)
                                   {
                                        var p_b = pages;
                                        if (pages > 3)
                                        {
                                             p_b = 3;
                                        }
                                        for (var f = 0; f < p_b; f++)
                                        {
                                             if (f == page)
                                             {
                                                  out += '<li class="current">' + (f + 1) + '</li>';
                                             }
                                             else
                                             {
                                                  out += '<li><button class="tipue_search_foot_box" id="' + (f * set.show) + '_' + replace + '">' + (f + 1) + '</button></li>';
                                             }
                                        }
                                   }
                                   else
                                   {
                                        var p_b = page + 2;
                                        if (p_b > pages)
                                        {
                                             p_b = pages;
                                        }
                                        for (var f = page - 1; f < p_b; f++)
                                        {
                                             if (f == page)
                                             {
                                                  out += '<li class="current">' + (f + 1) + '</li>';
                                             }
                                             else
                                             {
                                                  out += '<li><button class="tipue_search_foot_box" id="' + (f * set.show) + '_' + replace + '">' + (f + 1) + '</button></li>';
                                             }
                                        }
                                   }

                                   if (page + 1 != pages)
                                   {
                                       out += '<li><button class="tipue_search_foot_box" id="' + (start + set.show) + '_' + replace + '">' + tipuesearch_string_7 + '</button></li>';
                                   }

                                   out += '</ul></nav></footer>';
                              }
                         }
                         else
                         {
                              out += '<div id="tipue_search_warning">' + tipuesearch_string_8 + '</div>';
                         }
                    }
                    else
                    {
                         if (show_stop)
                         {
                              out += '<div id="tipue_search_warning">' + tipuesearch_string_8 + '. ' + tipuesearch_string_9 + '</div>';
                         }
                         else
                         {
                              out += '<div id="tipue_search_warning">' + tipuesearch_string_10 + '</div>';
                              if (set.minimumLength == 1)
                              {
                                   out += '<div id="tipue_search_warning">' + tipuesearch_string_11 + '</div>';
                              }
                              else
                              {
                                   out += '<div id="tipue_search_warning">' + tipuesearch_string_12 + ' ' + set.minimumLength + ' ' + tipuesearch_string_13 + '</div>';
                              }
                         }
                    }

                    $('#tipue_search_content').hide().html(out).slideDown(200);

                    $('#tipue_search_replaced').click(() => {
                         getTipueSearch(0, false);
                    });

                    $('.tipue_search_related').click(function()
                    {
                         $('#tipue_search_input').val($(this).attr('id'));
                         getTipueSearch(0, true);
                    });

                    $('.tipue_search_foot_box').click(function()
                    {
                         const id_v = $(this).attr('id');
                         const id_a = id_v.split('_');

                         getTipueSearch(parseInt(id_a[0]), id_a[1]);
                    });
               }

          });
     };

})(jQuery);
