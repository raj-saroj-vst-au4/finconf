<?php
require __DIR__.'/includes/site.php';

page_start('home', 'QRD 2027 — International Conference on Quant, Risk and Data, IIT Bombay',
    'QRD 2027, the International Conference on Quant, Risk and Data: pre-conference workshops on 4 March, then two days of keynotes, parallel sessions and posters on 5–6 March 2027 at VMCC, IIT Bombay. Hosted by Citadel Lab, IIT Bombay, in collaboration with RTQF, IISc Bangalore.');
?>
    <section id="top" class="hero" <?= figure_attrs(0) ?> aria-labelledby="hero-title">
        <div class="wrap">
            <h1 id="hero-title" class="hero-title" data-split><span class="line">QRD</span> <span class="line">2027</span></h1>
            <div class="hero-sub">
                <p class="hero-tagline">International Conference on Quant, Risk and Data</p>
                <p class="hero-collab">Jointly organized with RTQF, IISc Bangalore</p>
            </div>
            <div class="hero-copy">
                <p class="hero-lede">A day of pre-conference workshops, then two days of keynotes, parallel sessions and posters, hosted by Citadel Lab at IIT Bombay.</p>
                <dl class="facts">
                    <div><dt>When</dt><dd>4–6 March 2027</dd></div>
                    <div><dt>Where</dt><dd>VMCC, IIT Bombay, Mumbai</dd></div>
                </dl>
                <div class="actions"><a class="pill pill-solid" href="<?= e(href('program')) ?>">See the programme</a><a class="pill pill-line" href="<?= e(href('papers')) ?>">Call for papers</a></div>
            </div>
        </div>
    </section>

    <section id="about" class="about" data-quiet aria-labelledby="about-title">
        <div class="wrap">
            <div class="column">
                <h2 id="about-title">The best questions in finance don’t fit in one discipline.</h2>
                <p class="lede">The International Conference on Quant, Risk &amp; Data (QRD 2027) will bring together researchers, academicians and industry professionals working across mathematical finance, financial econometrics, statistical learning, computational intelligence and quantitative risk analysis. The conference will provide a forum for presenting original research, discussing emerging challenges in financial markets and connecting theoretical advances with practical applications.</p>
                <p class="lede">The programme will span three days, beginning with pre-conference workshops on 4 March, followed by the main conference on 5–6 March 2027. Keynote addresses, parallel technical sessions, paper presentations, poster discussions and a panel discussion will provide opportunities for scientific exchange and collaboration.</p>
            </div>
            <div class="themes">
                <h3 class="themes-title">Conference themes</h3>
                <?php foreach ($themes as $i => [$theme, $areas]): ?>
                <details><summary><span class="theme-num"><?= $i + 1 ?></span><span><?= e($theme) ?></span></summary><p><?= e($areas) ?></p></details>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <div class="tone-zone" data-tone="field">
        <section id="programme" class="programme-teaser" <?= figure_attrs(1) ?> data-quiet aria-labelledby="programme-title">
            <div class="wrap">
                <h2 id="programme-title">One day of workshops, two days of research.</h2>
                <ol class="teaser-days">
                    <?php foreach ($days as $i => $day): ?>
                    <li>
                        <p class="teaser-date"><?= e($day['label']) ?>, <?= e($day['date']) ?></p>
                        <h3><?= e($day['theme']) ?></h3>
                        <p class="teaser-hours"><?= e(day_hours($day)) ?></p>
                        <p><?= e($day['description']) ?></p>
                    </li>
                    <?php endforeach; ?>
                </ol>
                <a class="pill pill-solid" href="<?= e(href('program')) ?>">See the full programme</a>
            </div>
        </section>

        <section class="take-part" <?= figure_attrs(2) ?> data-quiet aria-labelledby="take-part-title">
            <div class="wrap">
                <h2 id="take-part-title">Take part</h2>
                <ul class="contents">
                    <li><a href="<?= e(href('workshops')) ?>"><span class="contents-name">Workshops</span><span class="contents-text">The two pre-conference workshops on 4 March, on high-frequency trading and derivative pricing: schedule, audience and fees.</span></a></li>
                    <li><a href="<?= e(href('keynotes')) ?>"><span class="contents-name">Keynotes</span><span class="contents-text">The two keynote talks: themes, days and speakers.</span></a></li>
                    <li><a href="<?= e(href('papers')) ?>"><span class="contents-name">Call for papers</span><span class="contents-text">Submit a paper by 20 December 2026 or a poster abstract by 15 January 2027: themes, how to submit, key dates and the journal special issue.</span></a></li>
                    <li><a href="<?= e(href('registration')) ?>"><span class="contents-name">Registration</span><span class="contents-text">Who should attend, conference, poster and workshop fees, deadlines and accommodation.</span></a></li>
                    <li><a href="<?= e(href('venue')) ?>"><span class="contents-name">Venue</span><span class="contents-text">The Victor Menezes Convention Centre on the IIT Bombay campus, and how to get there.</span></a></li>
                    <li><a href="<?= e(href('committees')) ?>"><span class="contents-name">Committees</span><span class="contents-text">The organising committee, the operations team and the scientific programme committee.</span></a></li>
                </ul>
            </div>
        </section>
    </div>

    <section class="faq" data-quiet aria-labelledby="faq-title">
        <div class="wrap faq-grid">
            <h2 id="faq-title">Common questions</h2>
            <div class="faq-list">
                <?php foreach ($faq as [$question, $answer]): ?>
                <details><summary><?= e($question) ?></summary><p><?= e($answer) ?></p></details>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <div class="tone-zone" data-tone="field">
        <section id="attend" class="attend" <?= figure_attrs(3) ?> aria-labelledby="attend-title">
            <div class="wrap">
                <h2 id="attend-title" class="attend-title">Meet at the frontier.</h2>
                <div class="attend-copy">
                    <p class="lede">Whether you study markets, build strategies or simply want to know what comes next, there is a seat for you. Registration has not opened yet.</p>
                    <p class="attend-when">4–6 March 2027<br>VMCC, IIT Bombay, Mumbai</p>
                    <div class="actions"><a class="pill pill-solid" href="<?= e(href('registration')) ?>">Registration</a><a class="pill pill-line" href="<?= e(href('papers')) ?>">Call for papers</a></div>
                </div>
            </div>
        </section>
<?php site_footer(); ?>
    </div>
<?php page_end();
