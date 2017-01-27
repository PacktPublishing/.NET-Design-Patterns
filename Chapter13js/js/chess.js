



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-b94ec35a696398c8a00f27343992e597c93faadce7783164f7f8967248cc818f.css" integrity="sha256-uU7DWmljmMigDyc0OZLll8k/qtzneDFk9/iWckjMgY8=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-f1dd95db316b03c6d429dd35926fdf5b6520abdff62d481127e84cc9ab7460d0.css" integrity="sha256-8d2V2zFrA8bUKd01km/fW2Ugq9/2LUgRJ+hMyat0YNA=" media="all" rel="stylesheet" />
    
    
    
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>jhlywa/chess.js: A Javascript chess library for chess move generation/validation, piece placement/movement, and check/checkmate/draw detection</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars2.githubusercontent.com/u/43226?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jhlywa/chess.js" name="twitter:title" /><meta content="chess.js - A Javascript chess library for chess move generation/validation, piece placement/movement, and check/checkmate/draw detection" name="twitter:description" />
      <meta content="https://avatars2.githubusercontent.com/u/43226?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="jhlywa/chess.js" property="og:title" /><meta content="https://github.com/jhlywa/chess.js" property="og:url" /><meta content="chess.js - A Javascript chess library for chess move generation/validation, piece placement/movement, and check/checkmate/draw detection" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTM2OTA5NjU0OmM2ODI0YzczOGQ4MjUwODFkMmU1OWQ1Y2NlZDdhZDRlYzE0MjllM2MxNzU3NjA3YTM2ODdiODYyNmM4MGZmZTY=--e6c3c781a9d57b0ceb8c7cae7e852893f659ec2e">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="CA5325F5:0682:B140DBA:586239C2" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="CA5325F5:0682:B140DBA:586239C2" name="octolytics-dimension-request_id" /><meta content="1656318" name="octolytics-actor-id" /><meta content="shinexavier" name="octolytics-actor-login" /><meta content="e9244a2ba5e24fbd3406a89f4d9e964ccb668fe9c084cb96a009a3ef1c51580b" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="shinexavier">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="OGQyNzc3ZTQyYWNlMmZlMDY1ZWVmNGJmNjM2YWFlZWQxZTg1NGI1MDRiNTU3YTczMzQ4YTgyN2Q2MmMwOGUxMnx7InJlbW90ZV9hZGRyZXNzIjoiMjAyLjgzLjM3LjI0NSIsInJlcXVlc3RfaWQiOiJDQTUzMjVGNTowNjgyOkIxNDBEQkE6NTg2MjM5QzIiLCJ0aW1lc3RhbXAiOjE0ODI4MzIzMjIsImhvc3QiOiJnaXRodWIuY29tIn0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="1546aceb553e4be61ebc70fc5e6e71446228de63">

    <meta http-equiv="x-pjax-version" content="203d57c5c44f11628e7dad3025220601">
    

      
  <meta name="description" content="chess.js - A Javascript chess library for chess move generation/validation, piece placement/movement, and check/checkmate/draw detection">
  <meta name="go-import" content="github.com/jhlywa/chess.js git https://github.com/jhlywa/chess.js.git">

  <meta content="43226" name="octolytics-dimension-user_id" /><meta content="jhlywa" name="octolytics-dimension-user_login" /><meta content="98154" name="octolytics-dimension-repository_id" /><meta content="jhlywa/chess.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="98154" name="octolytics-dimension-repository_network_root_id" /><meta content="jhlywa/chess.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jhlywa/chess.js/commits/master.atom" rel="alternate" title="Recent Commits to chess.js:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/jhlywa/chess.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production windows vis-public">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jhlywa/chess.js/search" class="js-site-search-form" data-scoped-search-url="/jhlywa/chess.js/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:1656318" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="jhlywa/chess.js">This repository</span>
  </div>
    <a class="dropdown-item" href="/jhlywa/chess.js/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/shinexavier"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@shinexavier" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1656318?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">shinexavier</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/shinexavier" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/shinexavier?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qQY1k7iw57WIimMKSJCSQPqsPkqwkmF0lkDlWdUhehztMPs2pwK41ZednXmFlRL6s3ihQuJrzxay+7rj2NpVwg==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3xTeuR9MYZd0i/M3+6RU6wnMg6Ir29xVQR/vjSfjcd5cg64bai97Mv5VpCHUczwDyvte7iXdUYAFiLqWBuoONQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="98154" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/jhlywa/chess.js/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:files#disambiguate">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/jhlywa/chess.js/watchers"
            aria-label="72 users are watching this repository">
            72
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jhlywa/chess.js/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ic9gzazKz1/V3wt6e4CXNQ4EK97bMd5TIuNXqGSaEFxyI/RdUdGT/XSvqNGSep2yw0dwV1qJyUdLl/8pKoDAaQ==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar jhlywa/chess.js"
        data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jhlywa/chess.js/stargazers"
           aria-label="826 users starred this repository">
          826
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jhlywa/chess.js/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="2Na1xQ4nYQGkOZ81fkwVEKYNECsD+UUT4ZFFYSncKFO3FcjVmTMMgckkjjtMFmTnujG/XqntoFggasXQGIiSKA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star jhlywa/chess.js"
        data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/jhlywa/chess.js/stargazers"
           aria-label="826 users starred this repository">
          826
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jhlywa/chess.js/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nO5jJmhgPrFwuLrUZtWcb1j0Ii37UcPToYjuRnCs4P597vIE6Xpwnfg43Fj1Arz1uMKYJp3VQxlXtalQQiT5Hg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork"
                title="Fork your own copy of jhlywa/chess.js to your account"
                aria-label="Fork your own copy of jhlywa/chess.js to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/jhlywa/chess.js/network" class="social-count"
       aria-label="219 users forked this repository">
      219
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/jhlywa" class="url fn" rel="author">jhlywa</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/jhlywa/chess.js" data-pjax="#js-repo-pjax-container">chess.js</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jhlywa/chess.js" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jhlywa/chess.js" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/jhlywa/chess.js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jhlywa/chess.js/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">17</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jhlywa/chess.js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /jhlywa/chess.js/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">7</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/jhlywa/chess.js/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /jhlywa/chess.js/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>
    <a href="/jhlywa/chess.js/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /jhlywa/chess.js/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/jhlywa/chess.js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /jhlywa/chess.js/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/jhlywa/chess.js/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /jhlywa/chess.js/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
<div class="repository-meta js-details-container">
  <div class="repository-meta-content col-11">
        <span class="col-11 text-gray-dark" itemprop="about">
          A Javascript chess library for chess move generation/validation, piece placement/movement, and check/checkmate/draw detection
        </span>

  </div>

</div>



<div class="overall-summary overall-summary-bottomless">
  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/jhlywa/chess.js/commits/master">
            <svg aria-hidden="true" class="octicon octicon-history" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"/></svg>
            <span class="num text-emphasized">
              231
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/jhlywa/chess.js/branches">
          <svg aria-hidden="true" class="octicon octicon-git-branch" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
          <span class="num text-emphasized">
            2
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/jhlywa/chess.js/releases">
          <svg aria-hidden="true" class="octicon octicon-tag" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"/></svg>
          <span class="num text-emphasized">
            9
          </span>
          releases
        </a>
      </li>

      <li>
          <a href="/jhlywa/chess.js/graphs/contributors">
  <svg aria-hidden="true" class="octicon octicon-organization" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4"/></svg>
    <span class="num text-emphasized">
      17
    </span>
    contributors
</a>

      </li>
        <li>
          <a href="https://github.com/jhlywa/chess.js/blob/master/LICENSE">
            <svg aria-hidden="true" class="octicon octicon-law" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"/></svg>
              BSD-2-Clause
          </a>
        </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/jhlywa/chess.js/search?l=javascript"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">100.0%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details" data-ga-click="Repository, language bar stats toggle, location:repo overview">
    <span class="language-color" aria-label="JavaScript 100.0%" style="width:100.0%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
  </div>

  <include-fragment src="/jhlywa/chess.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page">

    <div class="select-menu get-repo-select-menu js-menu-container float-right select-menu-modal-right">
  <button class="btn btn-sm btn-primary select-menu-button js-menu-target"
    title="Clone or download this repository"
    type="button" aria-label="Clone or download this repository" tabindex="0" aria-haspopup="true">
    <span>Clone or download</span>
  </button>

  <div class="select-menu-modal-holder dropdown-menu-content js-menu-content" aria-hidden="true">
    <div class="get-repo-modal dropdown-menu dropdown-menu-sw pb-0 js-toggler-container ">
      <div class="clone-options https-clone-options">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6LZQPY8pf4RtlLuh+J0mCmlaLvi3XHdRPwc7KcftqlJzcMekEiKZp6uwr4LvRaN685t+5F4nYDfEv3jUE7mgEA==" /></div><button class="btn-link btn-change-protocol js-toggler-target float-right" type="submit">Use SSH</button></form>

        <h4 class="mb-1">
          Clone with HTTPS
          <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
            <svg aria-hidden="true" class="octicon octicon-question" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/></svg>
          </a>
        </h4>
        <p class="mb-2 get-repo-decription-text">
          Use Git or checkout with SVN using the web URL.
        </p>

        <div class="input-group js-zeroclipboard-container">
  <input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="https://github.com/jhlywa/chess.js.git" aria-label="Clone this repository at https://github.com/jhlywa/chess.js.git" readonly>
  <div class="input-group-button">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg></button>
  </div>
</div>

      </div>

        <div class="clone-options ssh-clone-options">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=https&amp;protocol_type=clone" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ae7K9NkNLJh5q4fmx4Rkme9GCCMhGxl5m1nXiybFQqGaKF1tRAbKu7+Pk8XQXOHpdYdYP8hgDh9g4ZR28pFI4w==" /></div><button class="btn-link btn-change-protocol js-toggler-target float-right" type="submit">Use HTTPS</button></form>

          <h4 class="mb-1">
            Clone with SSH
            <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
              <svg aria-hidden="true" class="octicon octicon-question" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/></svg>
            </a>
          </h4>
          <p class="mb-2 get-repo-decription-text">
            Use an SSH key and passphrase from account.
          </p>

          <div class="input-group js-zeroclipboard-container">
  <input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="git@github.com:jhlywa/chess.js.git" aria-label="Clone this repository at git@github.com:jhlywa/chess.js.git" readonly>
  <div class="input-group-button">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg></button>
  </div>
</div>

        </div>

      <div class="mt-2">
          <a href="github-windows://openRepo/https://github.com/jhlywa/chess.js" class="btn btn-outline get-repo-btn tooltipped tooltipped-s tooltipped-multiline" aria-label="Clone jhlywa/chess.js to your computer and use it in GitHub Desktop.">
    Open in Desktop
  </a>

<a href="/jhlywa/chess.js/archive/master.zip"
   class="btn btn-outline get-repo-btn
"
   rel="nofollow"
   data-ga-click="Repository, download zip, location:repo overview">
  Download ZIP
</a>

      </div>
    </div>
  </div>
</div>


  <div class="BtnGroup float-right">
      
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jhlywa/chess.js/new/master" class="BtnGroup-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ce4jx3sXl2lCb4NYybVZCT16a8/SBSqoAM+LdRRf4tDIdbCOwGTVLQ+wg1Kt3ZRRb3K1SoDIFGtByOeyK2IghQ==" /></div>
    <button class="btn btn-sm BtnGroup-item" type="submit" data-disable-with="Creating file…">
      Create new file
    </button>
</form>

      
  <a href="/jhlywa/chess.js/upload/master" class="btn btn-sm BtnGroup-item">
    Upload files
  </a>


    <a href="/jhlywa/chess.js/find/master"
      class="btn btn-sm empty-icon float-right BtnGroup-item"
      data-pjax
      data-hotkey="t"
      data-ga-click="Repository, find file, location:repo overview">
      Find file
    </a>
  </div>

  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jhlywa/chess.js/tree/960"
               data-name="960"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                960
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/jhlywa/chess.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhlywa/chess.js/tree/v0.10.2"
              data-name="v0.10.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.2">
                v0.10.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhlywa/chess.js/tree/v0.10.1"
              data-name="v0.10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.1">
                v0.10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhlywa/chess.js/tree/v0.10.0"
              data-name="v0.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.0">
                v0.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhlywa/chess.js/tree/v0.9.4"
              data-name="v0.9.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.4">
                v0.9.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhlywa/chess.js/tree/v0.9.3"
              data-name="v0.9.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.3">
                v0.9.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhlywa/chess.js/tree/v0.9.2"
              data-name="v0.9.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.2">
                v0.9.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhlywa/chess.js/tree/v0.9.1"
              data-name="v0.9.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.1">
                v0.9.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhlywa/chess.js/tree/v0.9.0"
              data-name="v0.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.0">
                v0.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jhlywa/chess.js/tree/v0.1"
              data-name="v0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1">
                v0.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


      <a href="/jhlywa/chess.js/pull/new/master" class="btn btn-sm new-pull-request-btn" data-pjax data-ga-click="Repository, new pull request, location:repo overview">
        New pull request
      </a>

  <div class="breadcrumb">
    
  </div>
</div>





  <div class="commit-tease js-details-container">
    <span class="float-right">
      Latest commit
      <a class="commit-tease-sha" href="/jhlywa/chess.js/commit/c81a2889921d88e523e5dd54b85d643b63f40415" data-pjax>
        c81a288
      </a>
      <span itemprop="dateModified"><relative-time datetime="2016-06-10T04:36:00Z">Jun 10, 2016</relative-time></span>
    </span>


    <span class="commit-author-section">
      <img alt="@jhlywa" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/43226?v=3&amp;s=40" width="20" />
      <a href="/jhlywa" class="user-mention" rel="author">jhlywa</a>
    </span>

        <a href="/jhlywa/chess.js/commit/c81a2889921d88e523e5dd54b85d643b63f40415" class="message" data-pjax="true" title="0.10.2">0.10.2</a>
    </span>

  </div>


<div class="file-wrap">

  <a href="/jhlywa/chess.js/tree/c81a2889921d88e523e5dd54b85d643b63f40415" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-directory" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jhlywa/chess.js/tree/master/test" class="js-navigation-open" id="098f6bcd4621d373cade4e832627b4f6-4c81925ae8f7f18d106311713d07ac0d99fbb8a4" title="test">test</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/jhlywa/chess.js/commit/f4d6b1e0eba4e8cd8b21cd8d66fdd57232836e4f" class="message" data-pjax="true" title="Documentation tweaks">Documentation tweaks</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-06-10T04:35:25Z">Jun 10, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jhlywa/chess.js/blob/master/.gitignore" class="js-navigation-open" id="a084b794bc0759e7a6b77810e01874f2-c2658d7d1b31848c3b71960543cb0368e56cd4c7" title=".gitignore">.gitignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/jhlywa/chess.js/commit/9f5ca210b50b8f942f98dc8cd249bfa44f41aa01" class="message" data-pjax="true" title="Using Mocha/Chai for js testing.">Using Mocha/Chai for js testing.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2013-01-19T12:27:52Z">Jan 19, 2013</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jhlywa/chess.js/blob/master/.jshintrc" class="js-navigation-open" id="4d5aa81bf4f18104bb6ea53a8b5d1f43-4c7c536502e0e80b9a155b4e23e6ca8dc37bd93d" title=".jshintrc">.jshintrc</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/jhlywa/chess.js/commit/d9caaa2fa8ea007d9ff56070226803ce03ff8c64" class="message" data-pjax="true" title="added jshint conf file">added jshint conf file</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2013-06-09T05:11:57Z">Jun 9, 2013</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jhlywa/chess.js/blob/master/.travis.yml" class="js-navigation-open" id="354f30a63fb0907d4ad57269548329e3-192d8edb95509ae105d00a784fe5d1c1688cd0e7" title=".travis.yml">.travis.yml</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/jhlywa/chess.js/commit/7829f3161cc8b3aa7305190055ec105f2c55227b" class="message" data-pjax="true" title="Add latest node versions to .travis.yml">Add latest node versions to .travis.yml</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-06-08T02:51:19Z">Jun 8, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jhlywa/chess.js/blob/master/CONTRIBUTORS.md" class="js-navigation-open" id="f0eaedffe49f98e11072394a678af7cc-181586052481383fc45ff613a5f6c819161e96a9" title="CONTRIBUTORS.md">CONTRIBUTORS.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/jhlywa/chess.js/commit/788f81569d9eb0f97fa735566ab6ad8a527159d2" class="message" data-pjax="true" title="Documentation updates">Documentation updates</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-05-13T01:55:35Z">May 13, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jhlywa/chess.js/blob/master/LICENSE" class="js-navigation-open" id="9879d6db96fd29134fc802214163b95a-cbfcbf9d0737dd54f37b2b5619b3d47b0b33e492" itemprop="license" title="LICENSE">LICENSE</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/jhlywa/chess.js/commit/0946e47be70f1712ad847a954da4e445eb6ad423" class="message" data-pjax="true" title="Update copyright year">Update copyright year</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-05-13T02:06:56Z">May 13, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jhlywa/chess.js/blob/master/README.md" class="js-navigation-open" id="04c6e90faac2675aa89e2176d2eec7d8-5a7d693077c9bc6d1ff5466f74a6ae49e5a0bef3" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/jhlywa/chess.js/commit/f4d6b1e0eba4e8cd8b21cd8d66fdd57232836e4f" class="message" data-pjax="true" title="Documentation tweaks">Documentation tweaks</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-06-10T04:35:25Z">Jun 10, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jhlywa/chess.js/blob/master/chess.js" class="js-navigation-open" id="a75a9616b1317fddb9d4f2e2e504a534-34d48524b697fdce240e2157f52a8395a2893360" title="chess.js">chess.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/jhlywa/chess.js/commit/2d0ae741af12f0d1f2e0fc5192d354b8964f764e" class="message" data-pjax="true" title="Sloppy parser now supports long algebraic notation

The sloppy parser can now be used to read various format of long
algebraic notation, such as: e2e4, e2-e4, Pe2e4, Pe2-e4, Qf3xf7+,
e7xe8Q+ (capture and promotion), and e1-g1 (king-side castling).  This
parser will also catch and parse many non-standard methods of move
disambiguation.">Sloppy parser now supports long algebraic notation</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-06-10T04:32:26Z">Jun 10, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jhlywa/chess.js/blob/master/chess.min.js" class="js-navigation-open" id="f1551d7aef55da541d296c8da1cf5ae1-01e3719187e73c84a6fda41ca2068c2e177c3f8b" title="chess.min.js">chess.min.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/jhlywa/chess.js/commit/2d0ae741af12f0d1f2e0fc5192d354b8964f764e" class="message" data-pjax="true" title="Sloppy parser now supports long algebraic notation

The sloppy parser can now be used to read various format of long
algebraic notation, such as: e2e4, e2-e4, Pe2e4, Pe2-e4, Qf3xf7+,
e7xe8Q+ (capture and promotion), and e1-g1 (king-side castling).  This
parser will also catch and parse many non-standard methods of move
disambiguation.">Sloppy parser now supports long algebraic notation</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-06-10T04:32:26Z">Jun 10, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jhlywa/chess.js/blob/master/package.json" class="js-navigation-open" id="b9cfc7f2cdf78a7f4b91a753d10865a2-5e172bc75cc3100816f06550e6fba43e99b03451" title="package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/jhlywa/chess.js/commit/c81a2889921d88e523e5dd54b85d643b63f40415" class="message" data-pjax="true" title="0.10.2">0.10.2</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-06-10T04:36:00Z">Jun 10, 2016</time-ago></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>



  <div id="readme" class="readme boxed-group clearfix announce instapaper_body md">
    <h3>
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      README.md
    </h3>

      <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-chessjs" class="anchor" href="#chessjs" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>chess.js</h1>

<p><a href="https://travis-ci.org/jhlywa/chess.js"><img src="https://camo.githubusercontent.com/99ea507ce84f22c3cbb1b0274ffa33af179f5042/68747470733a2f2f7472617669732d63692e6f72672f6a686c7977612f63686573732e6a732e7376673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://travis-ci.org/jhlywa/chess.js.svg?branch=master" style="max-width:100%;"></a></p>

<p>chess.js is a Javascript chess library that is used for chess move
generation/validation, piece placement/movement, and check/checkmate/stalemate
detection - basically everything but the AI.</p>

<p>chess.js has been extensively tested in node.js and most modern browsers.</p>

<h2><a id="user-content-installation" class="anchor" href="#installation" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>

<p>To install the stable version:</p>

<div class="highlight highlight-source-shell"><pre>npm install --save chess.js</pre></div>

<p>chess.js is also available via <a href="https://cdnjs.com/libraries/chess.js">CDNJS</a>:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.2/chess.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</pre></div>

<h2><a id="user-content-example-code" class="anchor" href="#example-code" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example Code</h2>

<p>The code below plays a complete game of chess ... randomly.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> Chess <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./chess<span class="pl-pds">'</span></span>).<span class="pl-smi">Chess</span>;
<span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();

<span class="pl-k">while</span> (<span class="pl-k">!</span><span class="pl-smi">chess</span>.<span class="pl-en">game_over</span>()) {
  <span class="pl-k">var</span> moves <span class="pl-k">=</span> <span class="pl-smi">chess</span>.<span class="pl-en">moves</span>();
  <span class="pl-k">var</span> move <span class="pl-k">=</span> moves[<span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> <span class="pl-smi">moves</span>.<span class="pl-c1">length</span>)];
  <span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(move);
}
<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">chess</span>.<span class="pl-en">pgn</span>());</pre></div>

<h2><a id="user-content-sites-using-chessjs" class="anchor" href="#sites-using-chessjs" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sites Using chess.js</h2>

<ul>
<li><a href="http://www.chessclub.com/">The Internet Chess Club (ICC)</a></li>
<li><a href="http://lichess.org/tv">lichess</a></li>
<li><a href="http://battleforthequeen.redbull.com/">Redbull - Battle for the Queen</a></li>
<li><a href="https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/chess/">Asm.js Chess Battle</a></li>
<li><a href="http://creativejs.com/2012/12/3d-hartwig-chess/">3D Hartwig Chess</a></li>
<li><a href="http://client.scenevr.com/?connect=chess.scenevr.hosting/chess.xml">Scene VR</a></li>
<li><a href="http://chessapp.com/">Multiplayer Chess</a></li>
<li><a href="http://retichess.nodejitsu.com/">Reti Chess</a></li>
<li><a href="http://www.chessfork.com/">Chess Fork</a></li>
<li><a href="http://op12no2.me/posts/1641">Lozza</a></li>
<li><a href="http://theborakompanioni.github.io/angular-chess">angular-chess</a></li>
</ul>

<p>Need a user interface?  Try Chris Oakman's excellent
<a href="http://chessboardjs.com">chessboard.js</a> library.  See
<a href="http://chessboardjs.com/examples#5002">chessboard.js - Random vs Random</a> for
an example integration of chess.js with chessboard.js.</p>

<h2><a id="user-content-api" class="anchor" href="#api" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h2>

<h3><a id="user-content-constructor-chess-fen-" class="anchor" href="#constructor-chess-fen-" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Constructor: Chess([ fen ])</h3>

<p>The Chess() constructor takes a optional parameter which specifies the board configuration
in <a href="http://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation">Forsyth-Edwards Notation</a>.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> board defaults to the starting position when called with no parameters</span>
<span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();

<span class="pl-c"><span class="pl-c">//</span> pass in a FEN string to load a particular position</span>
<span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>(<span class="pl-s"><span class="pl-pds">'</span>r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1 b - c3 0 19<span class="pl-pds">'</span></span>);</pre></div>

<h3><a id="user-content-ascii" class="anchor" href="#ascii" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.ascii()</h3>

<p>Returns a string containing an ASCII diagram of the current position.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();

<span class="pl-c"><span class="pl-c">//</span> make some moves</span>
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>e4<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>e5<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>f4<span class="pl-pds">'</span></span>);

<span class="pl-smi">chess</span>.<span class="pl-en">ascii</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; '   +------------------------+</span>
<span class="pl-c"><span class="pl-c">//</span>      8 | r  n  b  q  k  b  n  r |</span>
<span class="pl-c"><span class="pl-c">//</span>      7 | p  p  p  p  .  p  p  p |</span>
<span class="pl-c"><span class="pl-c">//</span>      6 | .  .  .  .  .  .  .  . |</span>
<span class="pl-c"><span class="pl-c">//</span>      5 | .  .  .  .  p  .  .  . |</span>
<span class="pl-c"><span class="pl-c">//</span>      4 | .  .  .  .  P  P  .  . |</span>
<span class="pl-c"><span class="pl-c">//</span>      3 | .  .  .  .  .  .  .  . |</span>
<span class="pl-c"><span class="pl-c">//</span>      2 | P  P  P  P  .  .  P  P |</span>
<span class="pl-c"><span class="pl-c">//</span>      1 | R  N  B  Q  K  B  N  R |</span>
<span class="pl-c"><span class="pl-c">//</span>        +------------------------+</span>
<span class="pl-c"><span class="pl-c">//</span>          a  b  c  d  e  f  g  h'</span></pre></div>

<h3><a id="user-content-clear" class="anchor" href="#clear" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.clear()</h3>

<p>Clears the board.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">chess</span>.<span class="pl-c1">clear</span>();
<span class="pl-smi">chess</span>.<span class="pl-en">fen</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; '8/8/8/8/8/8/8/8 w - - 0 1' &lt;- empty board</span></pre></div>

<h3><a id="user-content-fen" class="anchor" href="#fen" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.fen()</h3>

<p>Returns the FEN string for the current position.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();

<span class="pl-c"><span class="pl-c">//</span> make some moves</span>
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>e4<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>e5<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>f4<span class="pl-pds">'</span></span>);

<span class="pl-smi">chess</span>.<span class="pl-en">fen</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; 'rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq f3 0 2'</span></pre></div>

<h3><a id="user-content-game_over" class="anchor" href="#game_over" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.game_over()</h3>

<p>Returns true if the game has ended via checkmate, stalemate, draw, threefold repetition, or insufficient material. Otherwise, returns false.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();
<span class="pl-smi">chess</span>.<span class="pl-en">game_over</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; false</span>

<span class="pl-smi">chess</span>.<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">'</span>4k3/4P3/4K3/8/8/8/8/8 b - - 0 78<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-en">game_over</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; true (stalemate)</span>

<span class="pl-smi">chess</span>.<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">'</span>rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-en">game_over</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; true (checkmate)</span></pre></div>

<h3><a id="user-content-getsquare" class="anchor" href="#getsquare" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.get(square)</h3>

<p>Returns the piece on the square:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">chess</span>.<span class="pl-c1">clear</span>();
<span class="pl-smi">chess</span>.<span class="pl-en">put</span>({ type<span class="pl-k">:</span> <span class="pl-smi">chess</span>.<span class="pl-c1">PAWN</span>, color<span class="pl-k">:</span> <span class="pl-smi">chess</span>.<span class="pl-c1">BLACK</span> }, <span class="pl-s"><span class="pl-pds">'</span>a5<span class="pl-pds">'</span></span>) <span class="pl-c"><span class="pl-c">//</span> put a black pawn on a5</span>

<span class="pl-smi">chess</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>a5<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> -&gt; { type: 'p', color: 'b' },</span>
<span class="pl-smi">chess</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>a6<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> -&gt; null</span></pre></div>

<h3><a id="user-content-history-options-" class="anchor" href="#history-options-" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.history([ options ])</h3>

<p>Returns a list containing the moves of the current game.  Options is an optional
parameter which may contain a 'verbose' flag.  See .moves() for a description of the
verbose move fields.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>e4<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>e5<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>f4<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>exf4<span class="pl-pds">'</span></span>);

<span class="pl-smi">chess</span>.<span class="pl-c1">history</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; ['e4', 'e5', 'f4', 'exf4']</span>

<span class="pl-smi">chess</span>.<span class="pl-c1">history</span>({ verbose<span class="pl-k">:</span> <span class="pl-c1">true</span> });
<span class="pl-c"><span class="pl-c">//</span> -&gt; [{ color: 'w', from: 'e2', to: 'e4', flags: 'b', piece: 'p', san: 'e4' },</span>
<span class="pl-c"><span class="pl-c">//</span>     { color: 'b', from: 'e7', to: 'e5', flags: 'b', piece: 'p', san: 'e5' },</span>
<span class="pl-c"><span class="pl-c">//</span>     { color: 'w', from: 'f2', to: 'f4', flags: 'b', piece: 'p', san: 'f4' },</span>
<span class="pl-c"><span class="pl-c">//</span>     { color: 'b', from: 'e5', to: 'f4', flags: 'c', piece: 'p', captured: 'p', san: 'exf4' }]</span></pre></div>

<h3><a id="user-content-in_check" class="anchor" href="#in_check" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.in_check()</h3>

<p>Returns true or false if the side to move is in check.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>(<span class="pl-s"><span class="pl-pds">'</span>rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-en">in_check</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; true</span></pre></div>

<h3><a id="user-content-in_checkmate" class="anchor" href="#in_checkmate" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.in_checkmate()</h3>

<p>Returns true or false if the side to move has been checkmated.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>(<span class="pl-s"><span class="pl-pds">'</span>rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-en">in_checkmate</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; true</span></pre></div>

<h3><a id="user-content-in_draw" class="anchor" href="#in_draw" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.in_draw()</h3>

<p>Returns true or false if the game is drawn (50-move rule or insufficient material).</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>(<span class="pl-s"><span class="pl-pds">'</span>4k3/4P3/4K3/8/8/8/8/8 b - - 0 78<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-en">in_draw</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; true</span></pre></div>

<h3><a id="user-content-in_stalemate" class="anchor" href="#in_stalemate" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.in_stalemate()</h3>

<p>Returns true or false if the side to move has been stalemated.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>(<span class="pl-s"><span class="pl-pds">'</span>4k3/4P3/4K3/8/8/8/8/8 b - - 0 78<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-en">in_stalemate</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; true</span></pre></div>

<h3><a id="user-content-in_threefold_repetition" class="anchor" href="#in_threefold_repetition" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.in_threefold_repetition()</h3>

<p>Returns true or false if the current board position has occurred three or more
times.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>(<span class="pl-s"><span class="pl-pds">'</span>rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> -&gt; true</span>
<span class="pl-c"><span class="pl-c">//</span> rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq occurs 1st time</span>
<span class="pl-smi">chess</span>.<span class="pl-en">in_threefold_repetition</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; false</span>

<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Nf3<span class="pl-pds">'</span></span>); <span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Nf6<span class="pl-pds">'</span></span>); <span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Ng1<span class="pl-pds">'</span></span>); <span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Ng8<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq occurs 2nd time</span>
<span class="pl-smi">chess</span>.<span class="pl-en">in_threefold_repetition</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; false</span>

<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Nf3<span class="pl-pds">'</span></span>); <span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Nf6<span class="pl-pds">'</span></span>); <span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Ng1<span class="pl-pds">'</span></span>); <span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Ng8<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq occurs 3rd time</span>
<span class="pl-smi">chess</span>.<span class="pl-en">in_threefold_repetition</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; true</span></pre></div>

<h3><a id="user-content-header" class="anchor" href="#header" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.header()</h3>

<p>Allows header information to be added to PGN output. Any number of key/value
pairs can be passed to .header().</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">chess</span>.<span class="pl-en">header</span>(<span class="pl-s"><span class="pl-pds">'</span>White<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Robert James Fischer<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-en">header</span>(<span class="pl-s"><span class="pl-pds">'</span>Black<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Mikhail Tal<span class="pl-pds">'</span></span>);

<span class="pl-c"><span class="pl-c">//</span> or</span>

<span class="pl-smi">chess</span>.<span class="pl-en">header</span>(<span class="pl-s"><span class="pl-pds">'</span>White<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Morphy<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Black<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Anderssen<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Date<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>1858-??-??<span class="pl-pds">'</span></span>);</pre></div>

<p>Calling .header() without any arguments returns the header information as an object.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">chess</span>.<span class="pl-en">header</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; { White: 'Morphy', Black: 'Anderssen', Date: '1858-??-??' }</span></pre></div>

<h3><a id="user-content-insufficient_material" class="anchor" href="#insufficient_material" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.insufficient_material()</h3>

<p>Returns true if the game is drawn due to insufficient material (K vs. K,
K vs. KB, or K vs. KN); otherwise false.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>(<span class="pl-s"><span class="pl-pds">'</span>k7/8/n7/8/8/8/8/7K b - - 0 1<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-en">insufficient_material</span>()
<span class="pl-c"><span class="pl-c">//</span> -&gt; true</span></pre></div>

<h3><a id="user-content-loadfen" class="anchor" href="#loadfen" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.load(fen)</h3>

<p>The board is cleared and the FEN string is loaded.  Returns true if position was
successfully loaded, otherwise false.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();
<span class="pl-smi">chess</span>.<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">'</span>4r3/8/2p2PPk/1p6/pP2p1R1/P1B5/2P2K2/3r4 w - - 1 45<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> -&gt; true</span>

<span class="pl-smi">chess</span>.<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">'</span>4r3/8/X12XPk/1p6/pP2p1R1/P1B5/2P2K2/3r4 w - - 1 45<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> -&gt; false, bad piece X</span></pre></div>

<h3><a id="user-content-load_pgnpgn--options-" class="anchor" href="#load_pgnpgn--options-" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.load_pgn(pgn, [ options ])</h3>

<p>Load the moves of a game stored in
<a href="http://en.wikipedia.org/wiki/Portable_Game_Notation">Portable Game Notation</a>.
Options is a optional parameter that may contain a <code>newline_char</code> which is a
string representation of a RegExp (and should not be pre-escaped) and defaults
to <code>\r?\n</code>).  Options may also contain a <code>sloppy</code> flag which allows chess.js
to parse moves in various non-standard notations  (see <code>.move</code> documentation
for more information).  Returns true if the PGN was parsed successfully,
otherwise false.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();
pgn <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">'</span>[Event "Casual Game"]<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>[Site "Berlin GER"]<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>[Date "1852.??.??"]<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>[EventDate "?"]<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>[Round "?"]<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>[Result "1-0"]<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>[White "Adolf Anderssen"]<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>[Black "Jean Dufresne"]<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>[ECO "C52"]<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>[WhiteElo "?"]<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>[BlackElo "?"]<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>[PlyCount "47"]<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>d3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 17.Nf6+ gxf6 18.exf6<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>Rg8 19.Rad1 Qxf3 20.Rxe7+ Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8<span class="pl-pds">'</span></span>,
       <span class="pl-s"><span class="pl-pds">'</span>23.Bd7+ Kf8 24.Bxe7# 1-0<span class="pl-pds">'</span></span>];

<span class="pl-smi">chess</span>.<span class="pl-en">load_pgn</span>(<span class="pl-smi">pgn</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">'</span><span class="pl-cce">\n</span><span class="pl-pds">'</span></span>));
<span class="pl-c"><span class="pl-c">//</span> -&gt; true</span>

<span class="pl-smi">chess</span>.<span class="pl-en">fen</span>()
<span class="pl-c"><span class="pl-c">//</span> -&gt; 1r3kr1/pbpBBp1p/1b3P2/8/8/2P2q2/P4PPP/3R2K1 b - - 0 24</span>

<span class="pl-smi">chess</span>.<span class="pl-en">ascii</span>()
<span class="pl-c"><span class="pl-c">//</span> -&gt; '  +------------------------+</span>
<span class="pl-c"><span class="pl-c">//</span>     8 | .  r  .  .  .  k  r  . |</span>
<span class="pl-c"><span class="pl-c">//</span>     7 | p  b  p  B  B  p  .  p |</span>
<span class="pl-c"><span class="pl-c">//</span>     6 | .  b  .  .  .  P  .  . |</span>
<span class="pl-c"><span class="pl-c">//</span>     5 | .  .  .  .  .  .  .  . |</span>
<span class="pl-c"><span class="pl-c">//</span>     4 | .  .  .  .  .  .  .  . |</span>
<span class="pl-c"><span class="pl-c">//</span>     3 | .  .  P  .  .  q  .  . |</span>
<span class="pl-c"><span class="pl-c">//</span>     2 | P  .  .  .  .  P  P  P |</span>
<span class="pl-c"><span class="pl-c">//</span>     1 | .  .  .  R  .  .  K  . |</span>
<span class="pl-c"><span class="pl-c">//</span>       +------------------------+</span>
<span class="pl-c"><span class="pl-c">//</span>         a  b  c  d  e  f  g  h'</span></pre></div>

<h3><a id="user-content-movemove--options-" class="anchor" href="#movemove--options-" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.move(move, [ options ])</h3>

<p>Attempts to make a move on the board, returning a move object if the move was
legal, otherwise null.  The .move function can be called two ways, by passing
a string in Standard Algebraic Notation (SAN):</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();

<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>e4<span class="pl-pds">'</span></span>)
<span class="pl-c"><span class="pl-c">//</span> -&gt; { color: 'w', from: 'e2', to: 'e4', flags: 'b', piece: 'p', san: 'e4' }</span>

<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>nf6<span class="pl-pds">'</span></span>) <span class="pl-c"><span class="pl-c">//</span> SAN is case sensitive!!</span>
<span class="pl-c"><span class="pl-c">//</span> -&gt; null</span>

<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Nf6<span class="pl-pds">'</span></span>)
<span class="pl-c"><span class="pl-c">//</span> -&gt; { color: 'b', from: 'g8', to: 'f6', flags: 'n', piece: 'n', san: 'Nf6' }</span></pre></div>

<p>Or by passing .move() a move object (only the 'to', 'from', and when necessary
'promotion', fields are needed):</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();

<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>({ from<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>g2<span class="pl-pds">'</span></span>, to<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>g3<span class="pl-pds">'</span></span> });
<span class="pl-c"><span class="pl-c">//</span> -&gt; { color: 'w', from: 'g2', to: 'g3', flags: 'n', piece: 'p', san: 'g3' }</span></pre></div>

<p>An optional sloppy flag can be used to parse a variety of non-standard move
notations:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();

<span class="pl-c"><span class="pl-c">//</span> various forms of Long Algebraic Notation</span>
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>e2e4<span class="pl-pds">'</span></span>, {sloppy<span class="pl-k">:</span> <span class="pl-c1">true</span>});
<span class="pl-c"><span class="pl-c">//</span> -&gt; { color: 'w', from: 'e2', to: 'e4', flags: 'b', piece: 'p', san: 'e4' }</span>
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>e7-e5<span class="pl-pds">'</span></span>, {sloppy<span class="pl-k">:</span> <span class="pl-c1">true</span>});
<span class="pl-c"><span class="pl-c">//</span> -&gt; { color: 'b', from: 'e7', to: 'e5', flags: 'b', piece: 'p', san: 'e5' }</span>
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Pf2f4<span class="pl-pds">'</span></span>, {sloppy<span class="pl-k">:</span> <span class="pl-c1">true</span>});
<span class="pl-c"><span class="pl-c">//</span> -&gt; { color: 'w', from: 'f2', to: 'f4', flags: 'b', piece: 'p', san: 'f4' }</span>
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Pe5xf4<span class="pl-pds">'</span></span>, {sloppy<span class="pl-k">:</span> <span class="pl-c1">true</span>});
<span class="pl-c"><span class="pl-c">//</span> -&gt; { color: 'b', from: 'e5', to: 'f4', flags: 'c', piece: 'p', captured: 'p', san: 'exf4' }</span>


<span class="pl-c"><span class="pl-c">//</span> correctly parses incorrectly disambiguated moves</span>
chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>(<span class="pl-s"><span class="pl-pds">'</span>r2qkbnr/ppp2ppp/2n5/1B2pQ2/4P3/8/PPP2PPP/RNB1K2R b KQkq - 3 7<span class="pl-pds">'</span></span>);

<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Nge7<span class="pl-pds">'</span></span>);  <span class="pl-c"><span class="pl-c">//</span> Ne7 is unambiguous because the knight on c6 is pinned</span>
<span class="pl-c"><span class="pl-c">//</span> -&gt; null</span>

<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Nge7<span class="pl-pds">'</span></span>, {sloppy<span class="pl-k">:</span> <span class="pl-c1">true</span>});
<span class="pl-c"><span class="pl-c">//</span> -&gt; { color: 'b', from: 'g8', to: 'e7', flags: 'n', piece: 'n', san: 'Ne7' }</span></pre></div>

<h3><a id="user-content-moves-options-" class="anchor" href="#moves-options-" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.moves([ options ])</h3>

<p>Returns a list of legals moves from the current position.  The function takes an optional parameter which controls the single-square move generation and verbosity.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();
<span class="pl-smi">chess</span>.<span class="pl-en">moves</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; ['a3', 'a4', 'b3', 'b4', 'c3', 'c4', 'd3', 'd4', 'e3', 'e4',</span>
<span class="pl-c"><span class="pl-c">//</span>     'f3', 'f4', 'g3', 'g4', 'h3', 'h4', 'Na3', 'Nc3', 'Nf3', 'Nh3']</span>

<span class="pl-smi">chess</span>.<span class="pl-en">moves</span>({square<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>e2<span class="pl-pds">'</span></span>});
<span class="pl-c"><span class="pl-c">//</span> -&gt; ['e3', 'e4']</span>

<span class="pl-smi">chess</span>.<span class="pl-en">moves</span>({square<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>e9<span class="pl-pds">'</span></span>}); <span class="pl-c"><span class="pl-c">//</span> invalid square</span>
<span class="pl-c"><span class="pl-c">//</span> -&gt; []</span>

<span class="pl-smi">chess</span>.<span class="pl-en">moves</span>({ verbose<span class="pl-k">:</span> <span class="pl-c1">true</span> });
<span class="pl-c"><span class="pl-c">//</span> -&gt; [{ color: 'w', from: 'a2', to: 'a3',</span>
<span class="pl-c"><span class="pl-c">//</span>       flags: 'n', piece: 'p', san 'a3'</span>
<span class="pl-c"><span class="pl-c">//</span>       # a captured: key is included when the move is a capture</span>
<span class="pl-c"><span class="pl-c">//</span>       # a promotion: key is included when the move is a promotion</span>
<span class="pl-c"><span class="pl-c">//</span>     },</span>
<span class="pl-c"><span class="pl-c">//</span>     ...</span>
<span class="pl-c"><span class="pl-c">//</span>     ]</span></pre></div>

<p>The <em>piece</em>, <em>captured</em>, and <em>promotion</em> fields contain the lowercase
representation of the applicable piece.</p>

<p>The <em>flags</em> field in verbose mode may contain one or more of the following values:</p>

<ul>
<li>'n' - a non-capture</li>
<li>'b' - a pawn push of two squares</li>
<li>'e' - an en passant capture</li>
<li>'c' - a standard capture</li>
<li>'p' - a promotion</li>
<li>'k' - kingside castling</li>
<li>'q' - queenside castling</li>
</ul>

<p>A flag of 'pc' would mean that a pawn captured a piece on the 8th rank and promoted.</p>

<h3><a id="user-content-pgn-options-" class="anchor" href="#pgn-options-" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.pgn([ options ])</h3>

<p>Returns the game in PGN format. Options is an optional parameter which may include
max width and/or a newline character settings.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();
<span class="pl-smi">chess</span>.<span class="pl-en">header</span>(<span class="pl-s"><span class="pl-pds">'</span>White<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Plunky<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Black<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Plinkie<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>e4<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>e5<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Nc3<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>Nc6<span class="pl-pds">'</span></span>);

<span class="pl-smi">chess</span>.<span class="pl-en">pgn</span>({ max_width<span class="pl-k">:</span> <span class="pl-c1">5</span>, newline_char<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>&lt;br /&gt;<span class="pl-pds">'</span></span> });
<span class="pl-c"><span class="pl-c">//</span> -&gt; '[White "Plunky"]&lt;br /&gt;[Black "Plinkie"]&lt;br /&gt;&lt;br /&gt;1. e4 e5&lt;br /&gt;2. Nc3 Nc6'</span></pre></div>

<h3><a id="user-content-putpiece-square" class="anchor" href="#putpiece-square" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.put(piece, square)</h3>

<p>Place a piece on square where piece is an object with the form
{ type: ..., color: ... }.  Returns true if piece was successfully placed,
otherwise the board remains unchanged and false is returned.  <code>put()</code> will fail
when passed an invalid piece or square, or when two or more kings of the
same color are placed.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">chess</span>.<span class="pl-c1">clear</span>();

<span class="pl-smi">chess</span>.<span class="pl-en">put</span>({ type<span class="pl-k">:</span> <span class="pl-smi">chess</span>.<span class="pl-c1">PAWN</span>, color<span class="pl-k">:</span> <span class="pl-smi">chess</span>.<span class="pl-c1">BLACK</span> }, <span class="pl-s"><span class="pl-pds">'</span>a5<span class="pl-pds">'</span></span>) <span class="pl-c"><span class="pl-c">//</span> put a black pawn on a5</span>
<span class="pl-c"><span class="pl-c">//</span> -&gt; true</span>
<span class="pl-smi">chess</span>.<span class="pl-en">put</span>({ type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>k<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>w<span class="pl-pds">'</span></span> }, <span class="pl-s"><span class="pl-pds">'</span>h1<span class="pl-pds">'</span></span>) <span class="pl-c"><span class="pl-c">//</span> shorthand</span>
<span class="pl-c"><span class="pl-c">//</span> -&gt; true</span>

<span class="pl-smi">chess</span>.<span class="pl-en">fen</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; '8/8/8/p7/8/8/8/7K w - - 0 0'</span>

<span class="pl-smi">chess</span>.<span class="pl-en">put</span>({ type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>z<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>w<span class="pl-pds">'</span></span> }, <span class="pl-s"><span class="pl-pds">'</span>a1<span class="pl-pds">'</span></span>) <span class="pl-c"><span class="pl-c">//</span> invalid piece</span>
<span class="pl-c"><span class="pl-c">//</span> -&gt; false</span>

<span class="pl-smi">chess</span>.<span class="pl-c1">clear</span>();

<span class="pl-smi">chess</span>.<span class="pl-en">put</span>({ type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>k<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>w<span class="pl-pds">'</span></span> }, <span class="pl-s"><span class="pl-pds">'</span>a1<span class="pl-pds">'</span></span>)
<span class="pl-c"><span class="pl-c">//</span> -&gt; true</span>

<span class="pl-smi">chess</span>.<span class="pl-en">put</span>({ type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>k<span class="pl-pds">'</span></span>, color<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>w<span class="pl-pds">'</span></span> }, <span class="pl-s"><span class="pl-pds">'</span>h1<span class="pl-pds">'</span></span>) <span class="pl-c"><span class="pl-c">//</span> fail - two kings</span>
<span class="pl-c"><span class="pl-c">//</span> -&gt; false</span>
</pre></div>

<h3><a id="user-content-removesquare" class="anchor" href="#removesquare" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.remove(square)</h3>

<p>Remove and return the piece on <em>square</em>.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">chess</span>.<span class="pl-c1">clear</span>();
<span class="pl-smi">chess</span>.<span class="pl-en">put</span>({ type<span class="pl-k">:</span> <span class="pl-smi">chess</span>.<span class="pl-c1">PAWN</span>, color<span class="pl-k">:</span> <span class="pl-smi">chess</span>.<span class="pl-c1">BLACK</span> }, <span class="pl-s"><span class="pl-pds">'</span>a5<span class="pl-pds">'</span></span>) <span class="pl-c"><span class="pl-c">//</span> put a black pawn on a5</span>
<span class="pl-smi">chess</span>.<span class="pl-en">put</span>({ type<span class="pl-k">:</span> <span class="pl-smi">chess</span>.<span class="pl-c1">KING</span>, color<span class="pl-k">:</span> <span class="pl-smi">chess</span>.<span class="pl-c1">WHITE</span> }, <span class="pl-s"><span class="pl-pds">'</span>h1<span class="pl-pds">'</span></span>) <span class="pl-c"><span class="pl-c">//</span> put a white king on h1</span>

<span class="pl-smi">chess</span>.<span class="pl-c1">remove</span>(<span class="pl-s"><span class="pl-pds">'</span>a5<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> -&gt; { type: 'p', color: 'b' },</span>
<span class="pl-smi">chess</span>.<span class="pl-c1">remove</span>(<span class="pl-s"><span class="pl-pds">'</span>h1<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> -&gt; { type: 'k', color: 'w' },</span>
<span class="pl-smi">chess</span>.<span class="pl-c1">remove</span>(<span class="pl-s"><span class="pl-pds">'</span>e1<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> -&gt; null</span></pre></div>

<h3><a id="user-content-reset" class="anchor" href="#reset" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.reset()</h3>

<p>Reset the board to the initial starting position.</p>

<h3><a id="user-content-square_colorsquare" class="anchor" href="#square_colorsquare" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.square_color(square)</h3>

<p>Returns the color of the square ('light' or 'dark').</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-en">Chess</span>();
<span class="pl-smi">chess</span>.<span class="pl-en">square_color</span>(<span class="pl-s"><span class="pl-pds">'</span>h1<span class="pl-pds">'</span></span>)
<span class="pl-c"><span class="pl-c">//</span> -&gt; 'light'</span>
<span class="pl-smi">chess</span>.<span class="pl-en">square_color</span>(<span class="pl-s"><span class="pl-pds">'</span>a7<span class="pl-pds">'</span></span>)
<span class="pl-c"><span class="pl-c">//</span> -&gt; 'dark'</span>
<span class="pl-smi">chess</span>.<span class="pl-en">square_color</span>(<span class="pl-s"><span class="pl-pds">'</span>bogus square<span class="pl-pds">'</span></span>)
<span class="pl-c"><span class="pl-c">//</span> -&gt; null</span></pre></div>

<h3><a id="user-content-turn" class="anchor" href="#turn" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.turn()</h3>

<p>Returns the current side to move.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">chess</span>.<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">'</span>rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1<span class="pl-pds">'</span></span>)
<span class="pl-smi">chess</span>.<span class="pl-en">turn</span>()
<span class="pl-c"><span class="pl-c">//</span> -&gt; 'b'</span></pre></div>

<h3><a id="user-content-undo" class="anchor" href="#undo" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.undo()</h3>

<p>Takeback the last half-move, returning a move object if successful, otherwise null.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> chess <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Chess</span>();

<span class="pl-smi">chess</span>.<span class="pl-en">fen</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'</span>
<span class="pl-smi">chess</span>.<span class="pl-c1">move</span>(<span class="pl-s"><span class="pl-pds">'</span>e4<span class="pl-pds">'</span></span>);
<span class="pl-smi">chess</span>.<span class="pl-en">fen</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1'</span>

<span class="pl-smi">chess</span>.<span class="pl-en">undo</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; { color: 'w', from: 'e2', to: 'e4', flags: 'b', piece: 'p', san: 'e4' }</span>
<span class="pl-smi">chess</span>.<span class="pl-en">fen</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'</span>
<span class="pl-smi">chess</span>.<span class="pl-en">undo</span>();
<span class="pl-c"><span class="pl-c">//</span> -&gt; null</span></pre></div>

<h3><a id="user-content-validate_fenfen" class="anchor" href="#validate_fenfen" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.validate_fen(fen):</h3>

<p>Returns a validation object specifying validity or the errors found within the
FEN string.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">chess</span>.<span class="pl-en">validate_fen</span>(<span class="pl-s"><span class="pl-pds">'</span>2n1r3/p1k2pp1/B1p3b1/P7/5bP1/2N1B3/1P2KP2/2R5 b - - 4 25<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> -&gt; { valid: true, error_number: 0, error: 'No errors.' }</span>

<span class="pl-smi">chess</span>.<span class="pl-en">validate_fen</span>(<span class="pl-s"><span class="pl-pds">'</span>4r3/8/X12XPk/1p6/pP2p1R1/P1B5/2P2K2/3r4 w - - 1 45<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> -&gt; { valid: false, error_number: 9,</span>
<span class="pl-c"><span class="pl-c">//</span>     error: '1st field (piece positions) is invalid [invalid piece].' }</span></pre></div>

<h2><a id="user-content-music" class="anchor" href="#music" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MUSIC</h2>

<p>Musical support provided by:</p>

<ul>
<li><a href="https://www.youtube.com/watch?feature=player_detailpage&amp;v=ANF6qanEB7s#t=2999">The Grateful Dead</a></li>
<li><a href="http://www.youtube.com/watch?v=jh-1fFWkSdw">Umphrey's McGee</a></li>
</ul>

<h2><a id="user-content-bugs" class="anchor" href="#bugs" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>BUGS</h2>

<ul>
<li>The en passant square and castling flags aren't adjusted when using the put/remove functions (workaround: use .load() instead)</li>
</ul>

<h2><a id="user-content-todo" class="anchor" href="#todo" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TODO</h2>

<ul>
<li>Investigate the use of piece lists (this may shave a few cycles off
generate_moves() and attacked()).</li>
<li>Refactor API to use camelCase - yuck.</li>
<li>Add more robust FEN validation.</li>
</ul>
</article>
  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.15696s from github-fe120-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-n9HCPfyjV3IQ6kJMOhSfwhrIu2Yqzd7DcomYbi1mnaw=" src="https://assets-cdn.github.com/assets/frameworks-9fd1c23dfca3577210ea424c3a149fc21ac8bb662acddec37289986e2d669dac.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-SJta8F9hDpPx9gLG3AT2FJlbtvW5IuRisZyQyDaEiwc=" src="https://assets-cdn.github.com/assets/github-489b5af05f610e93f1f602c6dc04f614995bb6f5b922e462b19c90c836848b07.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  </body>
</html>

