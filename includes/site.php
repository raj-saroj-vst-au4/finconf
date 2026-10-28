<?php
// Shared content and layout for every page of the site. Pages require this file, then call
// page_start(), print their sections, and finish with page_end().
declare(strict_types=1);

$conference = 'QRD 2027';
$conference_full = 'Conference on Quant, Risk & Data';
$contact_email = 'info@qrdconference.com';   // For any questions or issues; shown on the venue & contact page, the FAQ and the footer

// Links that go live later. Leave empty until they exist: the buttons then explain that
// submissions or registration have not opened, instead of linking anywhere.
$submission_form_url = 'https://forms.gle/DsJRKpj5N8T7Ki697';   // Google Form for paper submissions
$poster_form_url = 'https://forms.gle/FNCouu8TLQxaPxjS9';       // Google Form for poster abstracts
$registration_url = '';                                          // Registration and payment page

function e(string $text): string { return htmlspecialchars($text, ENT_QUOTES, 'UTF-8'); }

// The persistent 3D figure. Each page section picks one with data-figure="<index>".
function figure_attrs(int $index): string {
    return 'data-figure="'.$index.'"';
}

// Pre-conference workshops (Day 1), on the workshops page and as Day 1's lanes in the programme. Fill in
// 'instructors' and 'outline' (a list of topics) when announced; until then the page shows them as to be announced.
$workshops = [
    ['track' => 'Track A', 'title' => 'High-Frequency Trading (HFT)', 'instructors' => '', 'outline' => []],
    ['track' => 'Track B', 'title' => 'Derivative Pricing', 'instructors' => '', 'outline' => []],
];

// Programme. Day 1 is the pre-conference workshops; days 2 and 3 are the main conference.
// Each slot is [start, end, kind, title, lane titles]. Times are 24-hour. Kinds: 'break', 'plenary', 'keynote' and
// 'posters' span the whole room; 'workshop' and 'session' run in parallel, one block per lane (the lane's name when
// no lane titles are given). Session titles and speakers will be announced.
$days = [
    ['label' => 'Day 1', 'date' => 'Thursday 4 March', 'short' => 'Thu 4 Mar', 'theme' => 'Pre-conference workshops',
        'description' => 'Two workshops run side by side on the same schedule, on high-frequency trading and on derivative pricing: lectures from 10 AM to 1 PM, then a hands-on session from 2 PM to 5 PM. Register for one of them.',
        'lanes' => array_map(fn($w) => [$w['track'], $w['title']], $workshops),
        'slots' => [
            ['09:30', '10:00', 'break', 'Registration'],
            ['10:00', '11:30', 'workshop', 'Workshops, Part I', ['Workshop on High-Frequency Trading (HFT) – Part I', 'Workshop on Derivative Pricing – Part I']],
            ['11:30', '11:45', 'break', 'Tea / Coffee Break'],
            ['11:45', '13:00', 'workshop', 'Workshops, Part II', ['Workshop – Part II', 'Workshop – Part II']],
            ['13:00', '14:00', 'break', 'Lunch Break'],
            ['14:00', '15:30', 'workshop', 'Hands-on Session, Part I', ['Hands-on Session – Part I', 'Hands-on Session – Part I']],
            ['15:30', '15:45', 'break', 'Tea / Coffee Break'],
            ['15:45', '17:00', 'workshop', 'Hands-on Session, Part II', ['Hands-on Session – Part II', 'Hands-on Session – Part II']],
        ]],
    ['label' => 'Day 2', 'date' => 'Friday 5 March', 'short' => 'Fri 5 Mar', 'theme' => 'Main conference',
        'description' => 'The first keynote, four slots of parallel technical sessions, posters over lunch, and a panel discussion.',
        'lanes' => [['Track A', ''], ['Track B', ''], ['Track C', '']],
        'slots' => [
            ['08:30', '09:15', 'break', 'Registration and Welcome Tea'],
            ['09:15', '09:45', 'plenary', 'Opening Remarks'],
            ['09:45', '10:45', 'keynote', 'Keynote Address I'],
            ['10:45', '11:00', 'break', 'Tea / Coffee Break'],
            ['11:00', '11:45', 'session', 'Parallel Technical Sessions I'],
            ['11:45', '12:00', 'break', 'Tea / Coffee Break'],
            ['12:00', '12:45', 'session', 'Parallel Technical Sessions II'],
            ['12:45', '14:30', 'posters', 'Lunch Break & Poster Presentations'],
            ['14:30', '15:15', 'session', 'Parallel Technical Sessions III'],
            ['15:15', '15:30', 'break', 'Tea / Coffee Break'],
            ['15:30', '16:15', 'session', 'Parallel Technical Sessions IV'],
            ['16:15', '16:30', 'break', 'Tea / Coffee Break'],
            ['16:30', '17:30', 'plenary', 'Panel Discussion'],
        ]],
    ['label' => 'Day 3', 'date' => 'Saturday 6 March', 'short' => 'Sat 6 Mar', 'theme' => 'Main conference',
        'description' => 'The second keynote, three slots of parallel technical sessions, posters over lunch, parallel paper presentations, and the valedictory session.',
        'lanes' => [['Track A', ''], ['Track B', ''], ['Track C', '']],
        'slots' => [
            ['09:00', '09:25', 'break', 'Welcome Tea / Networking'],
            ['09:25', '10:25', 'keynote', 'Keynote Address II'],
            ['10:25', '10:45', 'break', 'Tea / Coffee Break & Transition to Parallel Session Halls'],
            ['10:45', '11:30', 'session', 'Parallel Technical Sessions V'],
            ['11:30', '11:45', 'break', 'Tea / Coffee Break'],
            ['11:45', '12:30', 'session', 'Parallel Technical Sessions VI'],
            ['12:30', '13:45', 'posters', 'Lunch Break & Poster Presentations'],
            ['13:45', '14:30', 'session', 'Parallel Technical Sessions VII'],
            ['14:30', '14:45', 'break', 'Tea / Coffee Break'],
            ['14:45', '16:45', 'session', 'Parallel Paper Presentation Sessions'],
            ['16:45', '17:00', 'break', 'Tea / Coffee Break'],
            ['17:00', '17:30', 'plenary', 'Valedictory Session & Closing Remarks'],
        ]],
];
// Organising committee. 'url' links the photo and name to a profile page; leave it empty until there is one.
// Replace the placeholder SVGs in assets/images/team/ with real photos (same file name, or update 'photo').
// In 'affiliation', a semicolon starts a new line.
$team = [
    ['role' => 'Faculty Chair', 'name' => 'Prof. Sudeep R. Bapat', 'affiliation' => 'PIC, IITB-Citadel Securities Quantitative Research Lab; Assistant Professor, SJMSOM', 'email' => '', 'url' => 'https://sites.google.com/view/srbapat/home', 'photo' => 'assets/images/team/sudeep-bapat.jpg'],
    ['role' => 'Faculty Co-Chair', 'name' => 'Prof. Piyush Pandey', 'affiliation' => 'Assistant Professor, SJMSOM', 'email' => '', 'url' => 'https://sites.google.com/iitb.ac.in/prof-piyush-pandey/home', 'photo' => 'assets/images/team/piyush-pandey.jpg'],
    ['role' => 'Faculty member', 'name' => 'Prof. Shashi Jain', 'affiliation' => 'Associate Professor, Department of Management Studies, IISc Bangalore', 'email' => '', 'url' => 'https://scholar.google.com/citations?user=TA9NeywAAAAJ&hl=en', 'photo' => 'assets/images/team/Shashi-Jain.jpg'],
    ['role' => 'Faculty member', 'name' => 'Prof. Siddhartha Pratim Chakrabarty', 'affiliation' => 'Professor, Department of Mathematics, IIT Guwahati', 'email' => '', 'url' => 'https://sites.google.com/site/pratimiitg/?pli=1&authuser=0', 'photo' => 'assets/images/team/spc.jpg'],
    ['role' => 'Student coordinator', 'name' => 'Aryan Bhambu', 'affiliation' => 'Postdoctoral Researcher', 'email' => '', 'url' => 'https://github.com/aryanbhambu', 'photo' => 'assets/images/team/aryan-bhambu.jpeg'],
    ['role' => 'Student coordinator', 'name' => 'Anshul Pawaskar', 'affiliation' => 'Doctoral Student', 'email' => '', 'url' => '', 'photo' => 'assets/images/team/anshul-pawaskar.jpg'],
    ['role' => 'Student coordinator', 'name' => 'Keshav Kumar', 'affiliation' => 'Doctoral Student', 'email' => '', 'url' => '', 'photo' => 'assets/images/team/keshav-kumar.svg'],
    ['role' => 'Student coordinator', 'name' => 'Jyoti Pandey', 'affiliation' => 'Doctoral Student', 'email' => '', 'url' => '', 'photo' => 'assets/images/team/jyoti-pandey.svg'],
    ['role' => 'Student coordinator', 'name' => 'Koushik Bera', 'affiliation' => 'Postdoctoral Researcher', 'email' => '', 'url' => 'https://kberaml.github.io/', 'photo' => 'assets/images/team/koushik-bera.jpg'],
    ['role' => 'Student coordinator', 'name' => 'Salam Rabindrajit Luwang', 'affiliation' => 'Postdoctoral Researcher', 'email' => '', 'url' => 'https://srabindrajitluwang.github.io/index.html', 'photo' => 'assets/images/team/salam-rabindrajit-luwang.jpg'],
];
$faculty = array_values(array_filter($team, fn($m) => str_starts_with($m['role'], 'Faculty')));
$students = array_values(array_filter($team, fn($m) => !str_starts_with($m['role'], 'Faculty')));

$operations = [
    ['role' => 'Program Manager', 'name' => 'Ms. Varsha Manne', 'affiliation' => '', 'email' => '', 'photo' => 'assets/images/team/varsha-manne.jpg'],
    ['role' => 'Admin staff', 'name' => 'Salman Shaikh', 'affiliation' => '', 'email' => '', 'photo' => 'assets/images/team/salman-shaikh.jpg'],
    ['role' => 'Tech staff', 'name' => 'Raj Saroj', 'affiliation' => '', 'email' => '', 'photo' => 'assets/images/team/raj-saroj-portrait.jpg'],
];

// Speakers page. Keynotes are keyed by their slot title in $days, which gives their day and time; set 'speaker' (and
// optionally 'affiliation', 'url', 'photo') once announced. Invited speakers from academia and industry take
// ['name', 'affiliation', 'talk', 'url', 'photo']: 'url' links the name to a profile page, 'photo' is a square image
// (initials are shown without one); leave any field empty until known.
$keynotes = [
    'Keynote Address I' => ['title' => 'Rethinking the possibilities of finance', 'summary' => 'Ideas, models, and open questions at the leading edge of quantitative research.', 'speaker' => '', 'affiliation' => '', 'url' => '', 'photo' => ''],
    'Keynote Address II' => ['title' => 'Understanding what moves markets', 'summary' => 'Technology, market structure, and the evolving landscape of electronic trading.', 'speaker' => '', 'affiliation' => '', 'url' => '', 'photo' => ''],
];
$academia_speakers = [
    ['name' => 'Anirban Banerjee', 'affiliation' => 'IIM Ahmedabad', 'talk' => '', 'photo' => 'assets/images/speakers/academics/Anirban-Banerjee.jpg', 'url' => 'https://www.iima.ac.in/faculty-research/faculty-directory/anirban-banerjee'],
    ['name' => 'Joshy Jacob', 'affiliation' => 'IIM Ahmedabad', 'talk' => '', 'photo' => 'assets/images/speakers/academics/Joshy-Jacob.jpeg', 'url' => 'https://www.iima.ac.in/faculty-research/faculty-directory/joshy-jacob'],
    ['name' => 'Nirupama Kulkarni', 'affiliation' => 'CAFRAL', 'talk' => '', 'photo' => 'assets/images/speakers/academics/Nirupama-Kulkarni.jpg', 'url' => 'https://www.nirupamakulkarni.com/'],
    ['name' => 'Samarpan Nawn', 'affiliation' => 'IIM Udaipur', 'talk' => '', 'photo' => 'assets/images/speakers/academics/Samarpan-Nawn.jpg', 'url' => 'https://faculty.iimu.ac.in/directory/samarpan-nawn/'],
    ['name' => 'Sourav Majumdar', 'affiliation' => 'IIT Kanpur', 'talk' => '', 'photo' => 'assets/images/speakers/academics/Sourav-Majumdar.jpg', 'url' => 'https://iitk.ac.in/sourav-majumdar'],
];
$industry_speakers = [
    ['name' => 'Eshan Ahluwalia', 'affiliation' => 'BlackRock', 'talk' => '', 'photo' => 'assets/images/speakers/industry/Eshan-Ahluwalia.jpg', 'url' => 'https://scholar.google.com/citations?user=TQvvgzIAAAAJ&hl=en'],
    ['name' => 'Lokesh Mrig', 'affiliation' => 'State Street Investment Management', 'talk' => '', 'photo' => 'assets/images/speakers/industry/Lokesh-Mrig.png', 'url' => 'https://in.linkedin.com/in/lokesh-mrig'],
    ['name' => 'Deep Narayan', 'affiliation' => '', 'talk' => '', 'photo' => '', 'url' => 'https://www.linkedin.com/in/deep-narayan-35729822/'],
];

// Scientific programme committee: ['name' => '', 'affiliation' => '', 'url' => '']. 'url' links the name to a profile page.
$programme_committee = [
    ['name' => 'Prof. Rohan Chinchwadkar', 'affiliation' => 'Associate Professor of Finance, SJMSOM, IIT Bombay', 'url' => 'https://www.som.iitb.ac.in/prof-rohan-chinchwadkar/'],
];

// Conference themes, on the home page and as the call for papers' topics: the title, then the research areas it covers.
$themes = [
    ['Stochastic Modelling, Derivative Markets, and Financial Engineering', 'Stochastic calculus, derivative valuation, rough volatility, structured products, pricing techniques.'],
    ['Financial Econometrics, Statistical Learning, and Time Series Analysis', 'Econometric forecasting, volatility estimation, high-dimensional statistics, causal inference, regime switching, time series.'],
    ['Market Microstructure, High-Frequency and Quantitative Trading', 'Order book dynamics, market making, liquidity modelling, execution strategies, algorithmic trading.'],
    ['Portfolio Optimisation, Asset Pricing, and Quantitative Investment Strategies', 'Factor investing, asset allocation, robust portfolios, systematic investing, stochastic optimisation, investment decision-making.'],
    ['Computational Intelligence and High-Performance Computing in Finance', 'Deep learning, LLMs, reinforcement learning, Monte Carlo methods, GPU computing, quantum finance.'],
    ['Risk Modelling, Financial Stability, and Emerging Market Dynamics', 'Tail risk, systemic risk, financial regulation, Indian markets, climate finance, FinTech, and digital assets.'],
];
// Deadlines and important dates. Pages pick the rows they need by key.
$dates = [
    'submission' => ['Conference paper submission', '20 December 2026'],
    'poster' => ['Poster abstract submission', '15 January 2027'],
    'decision' => ['Conference paper acceptance notification', '20 January 2027'],
    'poster_decision' => ['Poster acceptance notification', '1 February 2027'],
    'early' => ['Early-bird registration deadline', '10 February 2027'],
    'registration' => ['Regular registration deadline', '25 February 2027'],
    'conference' => ['Conference', '4–6 March 2027'],
];
$advice = [
    'Choose an informative title.',
    'Number the main sections so you can refer to them: “see Section 4”, “as explained in Section 1”.',
    'Run a spell checker. Spelling mistakes distract reviewers and weaken the impact of your paper.',
    'Keep sentences short; more than twenty words is usually too long. Write in the active voice and the present tense.',
    'Read your paper aloud to find where sentences should end.',
    'Use paragraphs to group sentences on the same theme.',
    'Include only the tables and figures that matter, and discuss each one in the text: what does it show? Give each a number and a caption that says exactly what it contains. R’s ggplot2 makes clear plots.',
    'Explain the problem and why it matters in finance or economics, including its wider social and economic impact.',
    'Explain the statistical method you used and compare your results with benchmark models.',
];

// Call for poster presentations.
$poster_guidelines = [
    'Structured research abstract: 350–500 words.',
    'Posters must be prepared in A0 size, in portrait orientation.',
    'Previously published papers may be presented as posters (but not as contributed talks).',
    'The abstract must include the research problem, objectives, methodology, key findings, and original contribution.',
    'Preliminary or completed research results are expected.',
    'Submissions will undergo scientific review by the conference committee.',
    'Accepted posters will be presented during designated poster sessions, over lunch on Days 2 and 3.',
    'Selected posters may be considered for Best Poster Presentation Awards.',
];
$poster_dates = [
    ['Poster abstract submission deadline', '15 January 2027'],
    ['Notification of acceptance', '1 February 2027'],
    ['Final poster submission', '20 February 2027'],
    ['Conference', '4–6 March 2027'],
];

// Journal that conference participants are encouraged to submit to. $journal_cover is the journal's title page
// image, shown on the call for papers once the file exists.
$journal_name = 'Applied Stochastic Models in Business and Industry';
$journal_url = 'https://onlinelibrary.wiley.com/journal/15264025';
$journal_cover = 'assets/images/asmbi-cover.jpg';   // shown once the file exists

// Registration fees: [category, early bird, regular]. Main conference days and oral paper presentations.
$fees = [
    ['UG / PG / PhD Scholars', '₹2,500', '₹3,000'],
    ['Faculty / Academicians / Postdoctoral Researchers', '₹3,500', '₹4,000'],
    ['Industry Professionals', '₹5,000', '₹6,000'],
    ['International Students/Professionals', '$80', '$100'],
];
// Poster presentation registration: [category, early bird, regular]. Not charged on top of conference registration.
$poster_fees = [
    ['UG / PG / PhD Scholars', '₹2,000', '₹2,500'],
    ['Faculty / Academicians / Postdoctoral Researchers', '₹3,000', '₹3,500'],
    ['International Poster Presenters', '$70', '$90'],
];
// Pre-conference workshop fees (Day 1): [category, fee for one workshop].
$workshop_fees = [
    ['UG / PG / PhD Scholars', '₹800'],
    ['Faculty / Academicians / Postdoctoral Researchers', '₹1,500'],
    ['Industry Professionals', '₹2,500'],
    ['International Students/Professionals', '$40'],
];

$faq = [
    ['Who is the conference for?', 'Researchers, students, and practitioners working on quantitative finance, risk, and data: from stochastic modelling and financial econometrics to market microstructure, portfolio optimisation, and computational finance.'],
    ['When and where is it?', 'Pre-conference workshops on Thursday 4 March, then the main conference on Friday 5 and Saturday 6 March 2027, at the Victor Menezes Convention Centre (VMCC), IIT Bombay, Mumbai.'],
    ['How do I submit a paper or a poster?', 'Through the Google Forms linked from the call for papers page. Upload conference papers as a PDF by 20 December 2026; poster abstracts are due by 15 January 2027.'],
    ['How do I register?', 'Registration has not opened yet. Fees and deadlines are on the registration page: early-bird registration closes on 10 February 2027 and regular registration on 25 February 2027.'],
    ['What will the programme include?', 'Two pre-conference workshops on Day 1, on high-frequency trading and derivative pricing. Then two days with two keynote addresses, 21 parallel technical sessions, parallel paper presentations, poster sessions over lunch, a panel discussion, and a valedictory session. Session titles and speakers will be announced.'],
    ['Who do I contact with questions?', 'Email info@qrdconference.com for any questions or issues about submissions, registration, the workshops, or your visit.'],
];

/* Rendering helpers */

// Programme times: '09:45' is 585 minutes after midnight; ranges read like the printed programme,
// '09:45 – 10:45 AM', with the meridiem repeated only when it changes ('11:50 AM – 12:05 PM').
function minutes(string $time): int {
    [$hours, $mins] = array_map('intval', explode(':', $time));
    return $hours * 60 + $mins;
}
function clock(string $time, bool $meridiem = true): string {
    return DateTime::createFromFormat('H:i', $time)->format($meridiem ? 'h:i A' : 'h:i');
}
function time_range(string $start, string $end): string {
    $same = (minutes($start) < 720) === (minutes($end) < 720);
    return clock($start, !$same).' – '.clock($end);
}
function day_hours(array $day): string {
    return time_range($day['slots'][0][0], end($day['slots'])[1]);
}

// A local file's URL with its modification time appended, so browsers fetch a replaced photo instead of a cached copy.
function asset_url(string $path): string {
    $file = dirname(__DIR__).'/'.$path;
    return is_file($file) ? $path.'?v='.filemtime($file) : $path;
}

function member(array $m, string $variant): string {
    $url = $m['url'] ?? '';
    $link = fn(string $inner, string $class) => $url === '' ? $inner
        : '<a class="'.$class.'" href="'.e($url).'" target="_blank" rel="noopener noreferrer">'.$inner.'<span class="visually-hidden"> (profile, opens in a new tab)</span></a>';
    $org = $m['affiliation'] !== '' ? '<p class="member-org">'.implode('<br>', array_map(fn($line) => e(trim($line)), explode(';', $m['affiliation']))).'</p>' : '';
    $email = $m['email'] !== '' ? '<a class="member-email" href="mailto:'.e($m['email']).'">'.e($m['email']).'</a>' : '';
    $photo = '<img class="member-photo" src="'.e(asset_url($m['photo'])).'" alt="'.e($m['name']).'" width="400" height="400" loading="lazy" decoding="async">';
    return '<li class="member member-'.$variant.'">'.($url === '' ? $photo : '<a class="member-photo-link" href="'.e($url).'" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">'.$photo.'</a>')
        .'<div><h3>'.$link(e($m['name']), 'member-link').'</h3><p class="member-role">'.e($m['role']).'</p>'.$org.$email.'</div></li>';
}

// A cell that reads 'To be announced' is set in italic so pending values are easy to spot.
function cell(string $value): string {
    return '<td'.($value === 'To be announced' ? ' class="is-pending"' : '').'>'.e($value).'</td>';
}

// A button that opens an external link when it exists, or explains via a dialog when it does not.
function action_button(string $url, string $label, string $dialog, string $class = 'pill pill-solid'): string {
    if ($url !== '') {
        return '<a class="'.$class.'" href="'.e($url).'" target="_blank" rel="noopener noreferrer">'.e($label).'<span class="visually-hidden"> (opens in a new tab)</span></a>';
    }
    return '<button class="'.$class.'" type="button" data-dialog="'.e($dialog).'">'.e($label).'</button>';
}

/* Layout */

$pages = [
    'home' => ['Home', 'index.php'],
    'program' => ['Programme', 'programme.php'],
    'workshops' => ['Workshops', 'workshops.php'],
    'speakers' => ['Speakers', 'speakers.php'],
    'papers' => ['Call for papers', 'call-for-papers.php'],
    'registration' => ['Registration', 'registration.php'],
    'venue' => ['Venue & Contact', 'venue.php'],
    'committees' => ['Committees', 'committees.php'],
];
$current_page = 'home';

// Link to a page, or to a section of the home page. On the home page, section links stay in-page.
function href(string $page, string $anchor = ''): string {
    global $pages, $current_page;
    if ($anchor !== '') return ($current_page === 'home' ? '' : 'index.php').'#'.$anchor;
    return $pages[$page][1];
}
function nav_link(string $page, string $label, string $anchor = ''): string {
    global $current_page;
    $current = $anchor === '' && $page === $current_page ? ' aria-current="page"' : '';
    return '<a href="'.e(href($page, $anchor)).'"'.$current.'>'.e($label).'</a>';
}

function brand(): string {
    global $current_page;
    $link = $current_page === 'home' ? '#top' : 'index.php';
    $label = $current_page === 'home' ? 'Citadel Lab, IIT Bombay: back to top' : 'Citadel Lab, IIT Bombay: home';
    return '<a class="brand" href="'.$link.'" aria-label="'.$label.'"><img class="brand-crest" src="assets/images/iit-bombay-logo.png" width="300" height="292" alt="IIT Bombay"><span class="brand-words"><img class="brand-citadel" src="assets/images/citadel-securities-logo.png" width="1024" height="80" alt="Citadel Securities"><span class="brand-lab">Quantitative Research Lab</span></span></a>';
}

function page_start(string $page, string $title, string $description): void {
    global $current_page;
    $current_page = $page;
    $links = nav_link('program', 'Programme').nav_link('workshops', 'Workshops').nav_link('speakers', 'Speakers').nav_link('papers', 'Call for papers').nav_link('venue', 'Venue & Contact').nav_link('committees', 'Committees');
    ?>
<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#f7f7f2">
    <meta name="description" content="<?= e($description) ?>">
    <title><?= e($title) ?></title>
    <link rel="icon" type="image/png" href="assets/images/iit-bombay-logo.png">
    <link rel="preload" href="assets/fonts/stix-two-text-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="assets/fonts/ibm-plex-sans-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="assets/v2/v2.css">
    <script>document.documentElement.classList.replace('no-js', 'js');</script>
    <script defer src="assets/v2/v2.js"></script>
</head>
<body data-tone="paper" data-page="<?= e($page) ?>">
<a class="skip-link" href="#main">Skip to content</a>
<canvas id="figure" class="figure-canvas" aria-hidden="true"></canvas>

<header class="masthead">
    <?= brand() ?>

    <nav class="nav" aria-label="Main"><?= $links ?></nav>
    <a class="pill pill-solid masthead-cta" href="<?= e(href('registration')) ?>"<?= $page === 'registration' ? ' aria-current="page"' : '' ?>>Registration</a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
    <nav id="menu" class="menu" aria-label="Menu" hidden><?= nav_link('home', 'Home').$links.nav_link('registration', 'Registration') ?></nav>
</header>

<main id="main" tabindex="-1">
<?php
}

function site_footer(): void {
    ?>
        <footer class="footer">
            <div class="wrap footer-grid">
                <?= brand() ?>

                <nav class="footer-nav" aria-label="Footer"><?= nav_link('program', 'Programme').nav_link('workshops', 'Workshops').nav_link('speakers', 'Speakers').nav_link('papers', 'Call for papers').nav_link('registration', 'Registration').nav_link('venue', 'Venue & Contact').nav_link('committees', 'Committees') ?></nav>
                <p class="footer-meta">For questions about submissions, registration, or your visit, write to us at <a href="mailto:<?= e($GLOBALS['contact_email']) ?>"><?= e($GLOBALS['contact_email']) ?></a>.<br>© <?= date('Y') ?> Citadel Lab, IIT Bombay.</p>
            </div>
        </footer>
<?php
}

// $templates: <template id="dialog-…"> elements for any data-dialog buttons on the page.
function page_end(string $templates = ''): void {
    ?>
</main>

<dialog id="info" class="dialog" aria-labelledby="dialog-title"><div class="dialog-body"><button class="dialog-close" type="button" aria-label="Close dialog">×</button><div class="dialog-content"></div><button class="pill pill-solid dialog-done" type="button">Close</button></div></dialog>
<?= $templates ?>
</body>
</html>
<?php
}

// Shared dialog copy for links that are not live yet.
function dialog_templates(string ...$names): string {
    $copy = [
        'submission' => '<template id="dialog-submission"><p class="dialog-kicker">Call for papers</p><h2 id="dialog-title">The submission form is not open yet.</h2><p>Papers for contributed talks and posters are submitted through a Google Form. The organisers will link it here and announce the deadline.</p><p class="dialog-note">You can prepare now: have your paper ready as a PDF to upload when the form opens.</p></template>',
        'registration' => '<template id="dialog-registration"><p class="dialog-kicker">4–6 March 2027, VMCC, IIT Bombay</p><h2 id="dialog-title">Registration has not opened yet.</h2><p>Fees are on the registration page. The registration link and dates will be announced there by the organisers.</p><p class="dialog-note">No booking or payment is available on this site yet.</p></template>',
    ];
    return implode("\n", array_map(fn($name) => $copy[$name], $names));
}
