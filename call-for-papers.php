<?php
require __DIR__.'/includes/site.php';

page_start('papers', 'Call for papers — QRD 2027, IIT Bombay',
    'Call for papers and posters for QRD 2027, the International Conference on Quant, Risk and Data: papers due 20 December 2026, poster abstracts due 15 January 2027. 4–6 March 2027 at VMCC, IIT Bombay.');
?>
    <section class="page-hero" <?= figure_attrs(2) ?> aria-labelledby="page-title">
        <div class="wrap">
            <?= page_kicker() ?>
            <h1 id="page-title" class="page-title" data-split><span class="line">Call for papers</span></h1>
            <div class="page-intro">
                <p class="lede">Present your research as a contributed talk or a poster at QRD 2027, the International Conference on Quant, Risk and Data. Conference papers are due by 20 December 2026; poster abstracts by 15 January 2027.</p>
                <div class="actions"><?= action_button($submission_form_url, 'Submit a paper', 'submission') ?><a class="pill pill-line" href="#posters">Call for posters</a></div>
            </div>
        </div>
    </section>

    <section id="papers" class="page-section" data-quiet aria-labelledby="papers-title">
        <div class="wrap page-grid">
            <h2 id="papers-title">Contributed talks and posters</h2>
            <div class="prose">
                <p>We invite papers for contributed talks and poster presentations at QRD 2027: a day of pre-conference workshops followed by two days of keynotes, parallel technical sessions, paper presentations and poster sessions.</p>
                <p>A scientific programme committee reviews every submission, decides whether it is accepted, and allocates it to a talk or a poster session. Its decision is final. Poster abstracts can also be submitted on their own, through the <a href="#posters">call for poster presentations</a> below.</p>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="themes-title">
        <div class="wrap page-grid">
            <h2 id="themes-title">Conference themes</h2>
            <dl class="prose facts-list facts-stack">
                <?php foreach ($themes as [$theme, $areas]): ?>
                <div><dt><?= e($theme) ?></dt><dd><?= e($areas) ?></dd></div>
                <?php endforeach; ?>
            </dl>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="submit-title">
        <div class="wrap page-grid">
            <h2 id="submit-title">How to submit</h2>
            <div class="prose">
                <ol>
                    <li>Post your paper on arXiv. You share its link instead of uploading a file.</li>
                    <li>Publish your code on GitHub or another public repository, and give the link in the paper.</li>
                    <li>Send the arXiv link through the Google Form by 20 December 2026.</li>
                </ol>
                <p>See <a href="#advice">before you submit</a>, below, for what the committee looks for.</p>
                <div class="actions"><?= action_button($submission_form_url, 'Submit a paper', 'submission') ?></div>
                <p class="fine"><?= $submission_form_url === '' ? 'The submission form opens when the call is announced.' : 'The Google Form opens in a new tab. Deadline: 20 December 2026.' ?></p>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="dates-title">
        <div class="wrap page-grid">
            <h2 id="dates-title">Key dates</h2>
            <div class="prose">
                <table class="data-table">
                    <caption><strong>Table 1.</strong> Key dates for conference papers.</caption>
                    <thead><tr><th scope="col">Milestone</th><th scope="col">Date</th></tr></thead>
                    <tbody>
                        <?php foreach (['submission', 'decision', 'early', 'registration', 'conference'] as $key): [$label, $when] = $dates[$key]; ?>
                        <tr><th scope="row"><?= e($label) ?></th><?= cell($when) ?></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="journal-title">
        <div class="wrap page-grid">
            <h2 id="journal-title">Journal special issue</h2>
            <div class="prose">
                <p>A special issue of the journal <a href="<?= e($journal_url) ?>" target="_blank" rel="noopener noreferrer"><cite>Applied Stochastic Models in Business and Industry</cite> (ASMBI)<span class="visually-hidden"> (opens in a new tab)</span></a> will publish high-quality work on the conference themes. Papers should offer new methodology or an insightful statistical analysis of interesting data.</p>
                <p>The special issue is open to anyone working on these topics, whether or not they present at the conference. Every submission goes through ASMBI’s standard, selective review.</p>
            </div>
        </div>
    </section>

    <section id="advice" class="page-section" data-quiet aria-labelledby="advice-title">
        <div class="wrap page-grid">
            <h2 id="advice-title">Before you submit</h2>
            <div class="prose">
                <ol type="a">
                    <?php foreach ($advice as $tip): ?>
                    <li><?= e($tip) ?></li>
                    <?php endforeach; ?>
                </ol>
            </div>
        </div>
    </section>

    <section id="posters" class="page-section" data-quiet aria-labelledby="posters-title">
        <div class="wrap page-grid">
            <h2 id="posters-title">Call for poster presentations</h2>
            <div class="prose">
                <p>The Organising Committee invites researchers, academicians, doctoral scholars, postgraduate students and industry professionals to submit original research abstracts for poster presentations.</p>
                <p>Poster submissions are welcome across all conference themes, including mathematical finance, financial econometrics, market microstructure, quantitative trading, portfolio optimisation, risk management and computational intelligence in finance.</p>
                <div class="actions"><?= action_button($poster_form_url, 'Submit a poster abstract', 'submission') ?></div>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="poster-guidelines-title">
        <div class="wrap page-grid">
            <h2 id="poster-guidelines-title">Poster guidelines</h2>
            <div class="prose">
                <ul>
                    <?php foreach ($poster_guidelines as $guideline): ?>
                    <li><?= e($guideline) ?></li>
                    <?php endforeach; ?>
                </ul>
                <p class="fine">Further instructions regarding poster dimensions, formatting and presentation requirements will be communicated to accepted authors.</p>
            </div>
        </div>
    </section>

    <section class="page-section" data-quiet aria-labelledby="poster-dates-title">
        <div class="wrap page-grid">
            <h2 id="poster-dates-title">Poster dates</h2>
            <div class="prose">
                <table class="data-table">
                    <caption><strong>Table 2.</strong> Important dates for poster presentations.</caption>
                    <thead><tr><th scope="col">Milestone</th><th scope="col">Date</th></tr></thead>
                    <tbody>
                        <?php foreach ($poster_dates as [$label, $when]): ?>
                        <tr><th scope="row"><?= e($label) ?></th><?= cell($when) ?></tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

<?php site_footer(); ?>
<?php page_end(dialog_templates('submission'));
