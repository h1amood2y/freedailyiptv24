<script type='text/javascript'>
//<![CDATA[
/*GLOBAL SETTINGS, USER CAN CHANGE*/
var soraOptions = {
    monthFormat: [, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    noThumbnail: "http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png",
    postperPage: 7,
    labelResults: 7,
    shareText: "Share:",
    relatedTitleText: "You Might Also Like",
    cmmTitleText: "Post a Comment"
};

// Main Scripts - "NOTE" (Encrypt in free version)
$(document)['ready'](function(_0x148ex1) {
    _0x148ex1('#menu')['each'](function() {
        var _0x148ex2 = _0x148ex1('#menu .LinkList .widget-content ul')['children']('li')['children']('a');
        var _0x148ex3 = _0x148ex2['length'];
        var _0x148ex4, _0x148ex5, _0x148ex6, _0x148ex7, _0x148ex8;
        for (var _0x148ex9 = 0; _0x148ex9 < _0x148ex3; _0x148ex9++) {
            _0x148ex4 = _0x148ex2['eq'](_0x148ex9);
            _0x148ex6 = _0x148ex4['text']();
            if (_0x148ex6['charAt'](0) !== '_') {
                _0x148ex5 = _0x148ex2['eq'](_0x148ex9 + 1);
                _0x148ex7 = _0x148ex5['text']();
                if (_0x148ex7['charAt'](0) === '_') {
                    _0x148ex8 = _0x148ex4['parent']();
                    _0x148ex8['append']('<ul class="sub-menu"/>')
                }
            };
            if (_0x148ex6['charAt'](0) === '_') {
                _0x148ex4['text'](_0x148ex6['replace']('_', ''));
                _0x148ex4['parent']()['appendTo'](_0x148ex8['children']('.sub-menu'))
            }
        };
        _0x148ex1('#menu ul li ul')['parent']('li')['addClass']('has-sub');
        _0x148ex1('#menu .widget')['css']('display', 'block');
        _0x148ex1('.mobile-menu')['prepend']('<div class=\'nav-toggle\'/>');
        _0x148ex1('#nav2')['clone']()['appendTo']('.mobile-menu');
        _0x148ex1('.mobile-menu ul li a')['on']('click', function(_0x148exa) {
            if (_0x148ex1(this)['parent']()['hasClass']('has-sub')) {
                _0x148exa['preventDefault']();
                if (!_0x148ex1(this)['parent']()['hasClass']('show')) {
                    _0x148ex1(this)['parent']()['addClass']('show')['children']('.sub-menu')['slideToggle'](200)
                } else {
                    _0x148ex1(this)['parent']()['removeClass']('show')['find']('> .sub-menu')['slideToggle'](200)
                }
            }
        });
        _0x148ex1('.nav-toggle')['on']('click', function() {
            _0x148ex1('body')['toggleClass']('show-menu')
        })
    });
    _0x148ex1('#search-icon')['on']('click', function() {
        _0x148ex1('body')['toggleClass']('show-search')
    });
    _0x148ex1('.tm-menu')['each'](function() {
        _0x148ex1('.tm-mobile')['prepend']('<div class=\'tm-toggle\'/>');
        _0x148ex1('.menu1 #nav1')['clone']()['appendTo']('.tm-mobile');
        _0x148ex1('.tm-toggle')['on']('click', function() {
            _0x148ex1('body')['toggleClass']('show-tm')
        })
    });
    _0x148ex1('.sora-share-post > span')['text'](soraOptions['shareText']);
    _0x148ex1('#related-wrap .title-wrap h2')['text'](soraOptions['relatedTitleText']);
    _0x148ex1('.cmm-title h2')['text'](soraOptions['cmmTitleText']);
    _0x148ex1('.block-image .thumb img, .PopularPosts ul li img, .avatar-image-container img')['each'](function() {
        var _0x148exb = _0x148ex1(this)['attr']('src'),
            _0x148exb = _0x148exb['replace'](/\/s[0-9]+\-c/g, '/s1600'),
            _0x148exb = _0x148exb['replace']('/w72-h72-p-nu/', '/s1600/'),
            _0x148exb = _0x148exb['replace']('/hqdefault.jpg', '/mqdefault.jpg'),
            _0x148exb = _0x148exb['replace']('/default.jpg', '/mqdefault.jpg'),
            _0x148exb = _0x148exb['replace']('/s35/', '/s45/'),
            _0x148exb = _0x148exb['replace']('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s45-r/avatar.png'),
            _0x148exb = _0x148exb['replace']('http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png', soraOptions['noThumbnail']);
        _0x148ex1(this)['attr']('src', _0x148exb)
    });
    _0x148ex1('.PopularPosts .widget-content ul li')['each'](function() {
        var _0x148exa = _0x148ex1(this),
            _0x148exc = _0x148exa['find']('.item-title a'),
            _0x148exd = _0x148exc['attr']('href');
        _0x148ex1['ajax']({
            url: _0x148exd,
            type: 'get',
            success: function(_0x148exe) {
                var _0x148exf = _0x148ex1(_0x148exe)['find']('.published')['text']();
                _0x148exc['parent']()['after']('<div class=\'sora-meta\'><span class=\'item-date\'>' + _0x148exf + '</span></div>')
            }
        })
    });
    _0x148ex1('.Label a')['attr']('href', function(_0x148exa, _0x148ex10) {
        return _0x148ex10['replace'](_0x148ex10, _0x148ex10 + '?&max-results=' + soraOptions['labelResults'])
    });
    _0x148ex1(window)['scroll'](function() {
        if (_0x148ex1(this)['scrollTop']() > 100) {
            _0x148ex1('.back-top')['css']({
                bottom: '25px'
            })
        } else {
            _0x148ex1('.back-top')['css']({
                bottom: '-100px'
            })
        }
    });
    _0x148ex1('.back-top')['click'](function() {
        _0x148ex1('html, body')['animate']({
            scrollTop: 0
        }, 800);
        return false
    });
    _0x148ex1('#social-widget .widget ul li')['each'](function() {
        var _0x148ex11 = _0x148ex1(this);
        var _0x148ex12 = _0x148ex11['find']('a')['attr']('data-name');
        var _0x148ex13 = _0x148ex11['find']('a')['attr']('data-href');
        var _0x148ex14 = _0x148ex12['match'](/[^[\]]+(?=])/g);
        if (_0x148ex12['charAt'](0) === '[') {
            var _0x148exa = _0x148ex11;
            var _0x148ex15 = _0x148ex14[0];
            var _0x148ex16 = _0x148ex15['toLowerCase']()['replace']('+', '');
            _0x148ex17(_0x148exa, _0x148ex16, _0x148ex15, _0x148ex13)
        }
    });

    function _0x148ex17(_0x148exa, _0x148ex16, _0x148ex15, _0x148ex13) {
        _0x148exa['addClass'](_0x148ex16);
        var _0x148ex18 = '<a class="' + _0x148ex16 + '" href="' + _0x148ex13 + '" target="_blank">' + _0x148ex15 + '</a>';
        _0x148exa['html'](_0x148ex18);
        _0x148ex1('#social-widget .widget')['show']()
    }
    _0x148ex1('#menu li')['each'](function() {
        var _0x148ex11 = _0x148ex1(this);
        var _0x148ex12 = _0x148ex11['find']('a')['attr']('href');
        var _0x148ex14 = _0x148ex12['match'](/[^[\]]+(?=])/g);
        if (_0x148ex12['charAt'](0) === '[') {
            var _0x148exa = _0x148ex11;
            var _0x148ex15 = _0x148ex14[0]['toLowerCase']();
            var _0x148ex19 = _0x148ex14[0]['split'](',');
            var _0x148ex1a = _0x148ex19[0];
            var _0x148ex1b = _0x148ex14[1];
            _0x148ex33(_0x148exa, _0x148ex15, 4, _0x148ex1a, _0x148ex1b)
        }
    });
    _0x148ex1('#feat-sec .HTML')['each'](function() {
        var _0x148ex1c = _0x148ex1(this);
        var _0x148ex1d = _0x148ex1c['children']('.widget-content');
        var _0x148ex1e = _0x148ex1d['text']()['trim']();
        var _0x148ex14 = _0x148ex1e['match'](/[^[\]]+(?=])/g);
        if (_0x148ex1e['charAt'](0) === '[') {
            var _0x148exa = _0x148ex1d;
            var _0x148ex15 = _0x148ex14[0]['toLowerCase']();
            var _0x148ex19 = _0x148ex14[0]['split'](',');
            var _0x148ex1f = _0x148ex19[0];
            var _0x148ex1a = _0x148ex19[1];
            _0x148ex33(_0x148exa, _0x148ex15, _0x148ex1f, _0x148ex1a)
        }
    });
    _0x148ex1('.ready-widget .HTML')['each'](function() {
        var _0x148ex1c = _0x148ex1(this);
        var _0x148ex1d = _0x148ex1c['children']('.widget-content');
        var _0x148ex1e = _0x148ex1d['text']()['trim']();
        var _0x148ex14 = _0x148ex1e['match'](/[^[\]]+(?=])/g);
        if (_0x148ex1e['charAt'](0) === '[') {
            var _0x148exa = _0x148ex1d;
            var _0x148ex15 = _0x148ex14[0]['toLowerCase']();
            var _0x148ex19 = _0x148ex14[0]['split'](',');
            var _0x148ex1f = _0x148ex19[0];
            var _0x148ex1a = _0x148ex19[1];
            _0x148ex33(_0x148exa, _0x148ex15, _0x148ex1f, _0x148ex1a)
        }
    });
    _0x148ex1('.related-ready')['each'](function() {
        var _0x148exa = _0x148ex1(this),
            _0x148ex1a = _0x148exa['find']('.related-tag')['attr']('data-label');
        _0x148ex33(_0x148exa, 'related-posts', 3, _0x148ex1a)
    });

    function _0x148ex20(_0x148ex21, _0x148ex22, _0x148ex23) {
        for (var _0x148ex24 = 0; _0x148ex24 < _0x148ex21[_0x148ex22]['link']['length']; _0x148ex24++) {
            if (_0x148ex21[_0x148ex22]['link'][_0x148ex24]['rel'] == 'alternate') {
                _0x148ex23 = _0x148ex21[_0x148ex22]['link'][_0x148ex24]['href'];
                break
            }
        };
        return _0x148ex23
    }

    function _0x148ex25(_0x148ex26, _0x148ex22, _0x148ex23) {
        var _0x148ex27 = _0x148ex26[_0x148ex22]['title']['$t'],
            _0x148ex18 = '<a href="' + _0x148ex23 + '">' + _0x148ex27 + '</a>';
        return _0x148ex18
    }

    function _0x148ex28(_0x148ex26, _0x148ex22) {
        var _0x148ex27 = _0x148ex26[_0x148ex22]['author'][0]['name']['$t'],
            _0x148ex18 = '<span class="item-author">' + _0x148ex27 + '</span>';
        return _0x148ex18
    }

    function _0x148ex29(_0x148ex26, _0x148ex22) {
        var _0x148ex2a = _0x148ex26[_0x148ex22]['published']['$t'];
        var _0x148ex2b = _0x148ex2a['substring'](0, 4),
            _0x148ex7 = _0x148ex2a['substring'](5, 7),
            _0x148ex2c = _0x148ex2a['substring'](8, 10),
            _0x148ex2d = soraOptions['monthFormat'][parseInt(_0x148ex7, 10)] + ' ' + _0x148ex2c + ', ' + _0x148ex2b,
            _0x148ex18 = '<span class="item-date">' + _0x148ex2d + '</span>';
        return _0x148ex18
    }

    function _0x148ex2e(_0x148ex26, _0x148ex22) {
        var _0x148ex27 = _0x148ex26[_0x148ex22]['title']['$t'],
            _0x148ex5 = _0x148ex26[_0x148ex22]['content']['$t'],
            _0x148ex2f = _0x148ex1('<div>')['html'](_0x148ex5);
        if ('media$thumbnail' in _0x148ex26[_0x148ex22]) {
            var _0x148ex30 = _0x148ex26[_0x148ex22]['media$thumbnail']['url']['replace'](/\/s[0-9]+\-c/g, '/s1600');
            if (_0x148ex5['indexOf']('youtube.com/embed') > -1) {
                _0x148ex30 = _0x148ex26[_0x148ex22]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg')
            }
        } else {
            if (_0x148ex5['indexOf']('<img') > -1) {
                _0x148ex30 = _0x148ex2f['find']('img:first')['attr']('src')
            } else {
                _0x148ex30 = soraOptions['noThumbnail']
            }
        };
        var _0x148ex18 = '<img class="sora-thumb" alt="' + _0x148ex27 + '" src="' + _0x148ex30 + '"/>';
        return _0x148ex18
    }

    function _0x148ex31(_0x148ex26, _0x148ex22) {
        if (void(0) != _0x148ex26[_0x148ex22]['category']) {
            var _0x148ex32 = _0x148ex26[_0x148ex22]['category'][0]['term']
        };
        var _0x148ex18 = '<span class="slider-tag">' + _0x148ex32 + '</span>';
        return _0x148ex18
    }

    function _0x148ex33(_0x148exa, _0x148ex15, _0x148ex1f, _0x148ex1a) {
        var _0x148ex34 = '';
        if (_0x148ex15['match']('slider-recent') || _0x148ex15['match']('slider-tag') || _0x148ex15['match']('recent-posts') || _0x148ex15['match']('post-tag') || _0x148ex15['match']('related-posts')) {
            if (_0x148ex15['match']('recent-posts') || _0x148ex15['match']('slider-recent')) {
                _0x148ex34 = '/feeds/posts/default?alt=json-in-script&max-results=' + _0x148ex1f
            } else {
                _0x148ex34 = '/feeds/posts/default/-/' + _0x148ex1a + '?alt=json-in-script&max-results=' + _0x148ex1f
            };
            _0x148ex1['ajax']({
                url: _0x148ex34,
                type: 'get',
                dataType: 'jsonp',
                success: function(_0x148ex35) {
                    if (_0x148ex15['match']('slider-recent') || _0x148ex15['match']('slider-tag')) {
                        var _0x148ex36 = '<ul class="featured-posts">'
                    };
                    if (_0x148ex15['match']('recent-posts') || _0x148ex15['match']('post-tag')) {
                        var _0x148ex36 = '<ul class="custom-widget">'
                    };
                    if (_0x148ex15['match']('related-posts')) {
                        var _0x148ex36 = '<ul class="related-posts">'
                    };
                    for (var _0x148ex23 = '', _0x148ex22 = 0, _0x148ex21 = _0x148ex35['feed']['entry']; _0x148ex22 < _0x148ex21['length']; _0x148ex22++) {
                        var _0x148ex23 = _0x148ex20(_0x148ex21, _0x148ex22, _0x148ex23),
                            _0x148ex37 = _0x148ex25(_0x148ex21, _0x148ex22, _0x148ex23),
                            _0x148ex38 = _0x148ex2e(_0x148ex21, _0x148ex22),
                            _0x148ex39 = _0x148ex28(_0x148ex21, _0x148ex22),
                            _0x148ex3a = _0x148ex29(_0x148ex21, _0x148ex22),
                            _0x148ex1a = _0x148ex31(_0x148ex21, _0x148ex22);
                        var _0x148ex8 = '';
                        if (_0x148ex15['match']('slider-recent') || _0x148ex15['match']('slider-tag')) {
                            if (_0x148exa['parent']()['addClass']('sora-show')) {};
                            _0x148ex8 += '<li><div class="sora-inner"><a class="sora-image" href="' + _0x148ex23 + '">' + _0x148ex38 + '</a><div class="sora-entry">' + _0x148ex1a + '<span class="divider"/><h3 class="sora-title">' + _0x148ex37 + '</h3><div class="sora-meta">' + _0x148ex3a + '</div></div></div></li>'
                        } else {
                            if (_0x148ex15['match']('recent-posts') || _0x148ex15['match']('post-tag')) {
                                _0x148ex8 += '<li><a class="custom-thumb" href="' + _0x148ex23 + '">' + _0x148ex38 + '</a><div class="sora-entry"><h3 class="sora-title">' + _0x148ex37 + '</h3><div class="sora-meta">' + _0x148ex3a + '</div></div></li>'
                            } else {
                                _0x148ex15['match']('related-posts') && (_0x148ex8 += '<li class="related-item"><div class="sora-image"><a class="related-thumb" href="' + _0x148ex23 + '">' + _0x148ex38 + '</a></div><div class="sora-entry"><h3 class="sora-title">' + _0x148ex37 + '</h3><div class="sora-meta">' + _0x148ex3a + '</div></div></li>')
                            }
                        };
                        _0x148ex36 += _0x148ex8
                    };
                    _0x148ex36 += '</ul>';
                    _0x148exa['html'](_0x148ex36);
                    _0x148ex1('.featured-posts')['owlCarousel']({
                        items: 2,
                        loop: true,
                        margin: 20,
                        nav: true,
                        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
                        dots: false,
                        responsive: {
                            0: {
                                items: 1
                            },
                            768: {
                                items: 2
                            }
                        }
                    })
                }
            })
        }
    }
});
window['onload'] = function() {
    var _0x148ex3b = document['getElementById']('mycontent');
    if (_0x148ex3b == null) {
        window['location']['href'] = 'https://goldeniptv.blogspot.com/'
    };
    _0x148ex3b['setAttribute']('href', 'https://goldeniptv.blogspot.com/');
    _0x148ex3b['innerHTML'] = 'goldeniptv'
}
//]]>
</script>
